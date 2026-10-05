import { randomUUID } from "node:crypto";
import {
  DeleteObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function getStorageConfig() {
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucket = process.env.R2_BUCKET_NAME;

  if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
    throw new Error("R2 storage is not configured");
  }

  return {
    bucket,
    client: new S3Client({
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      region: "auto",
      credentials: { accessKeyId, secretAccessKey },
    }),
  };
}

function errorResponse(error: unknown) {
  console.error("File storage request failed", error);
  return NextResponse.json(
    { error: "File storage request failed" },
    { status: 500 },
  );
}

function filenameFromKey(key: string) {
  return key.split("/").pop() ?? "download";
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ all: string[] }> },
) {
  try {
    const { all } = await params;
    const action = all[0];
    const { client, bucket } = getStorageConfig();

    if (action === "retreiveAll") {
      const result = await client.send(
        new ListObjectsV2Command({
          Bucket: bucket,
          MaxKeys: 100,
          ContinuationToken: request.nextUrl.searchParams.get("cursor") ?? undefined,
        }),
      );
      return NextResponse.json({
        files: (result.Contents ?? []).map(({ Key, Size, LastModified }) => ({
          key: Key,
          size: Size,
          lastModified: LastModified,
        })),
        truncated: result.IsTruncated ?? false,
        nextCursor: result.NextContinuationToken ?? null,
      });
    }

    if (action === "retreiveOne") {
      const key = all.slice(1).join("/");
      if (!key) {
        return NextResponse.json({ error: "A file key is required" }, { status: 400 });
      }

      const result = await client.send(
        new GetObjectCommand({ Bucket: bucket, Key: key }),
      );
      if (!result.Body) {
        return NextResponse.json({ error: "File has no content" }, { status: 404 });
      }

      const filename = encodeURIComponent(filenameFromKey(key));
      const headers = new Headers({
        "Content-Type": result.ContentType ?? "application/octet-stream",
        "Content-Disposition": `attachment; filename*=UTF-8''${filename}`,
      });
      if (result.ContentLength !== undefined) {
        headers.set("Content-Length", String(result.ContentLength));
      }
      return new Response(result.Body.transformToWebStream(), {
        headers,
      });
    }

    return NextResponse.json({ error: "Unknown file action" }, { status: 404 });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ all: string[] }> },
) {
  try {
    const { all } = await params;
    if (all[0] !== "uploadOne" && all[0] !== "uploadMany") {
      return NextResponse.json({ error: "Unknown file action" }, { status: 404 });
    }

    const form = await request.formData();
    const inputFiles = form.getAll("file");
    const files = inputFiles.filter((value): value is File => value instanceof File);
    if (files.length === 0) {
      return NextResponse.json(
        { error: 'Add at least one file in the "file" form field' },
        { status: 400 },
      );
    }
    if (all[0] === "uploadOne" && files.length !== 1) {
      return NextResponse.json({ error: "Upload one file at a time" }, { status: 400 });
    }
    if (files.some((file) => file.size === 0 || file.size > MAX_FILE_SIZE)) {
      return NextResponse.json(
        { error: "Each file must be between 1 byte and 10 MB" },
        { status: 413 },
      );
    }

    const { client, bucket } = getStorageConfig();
    const uploaded = [];
    for (const file of files) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120) || "file";
      const key = `${randomUUID()}-${safeName}`;
      await client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: Buffer.from(await file.arrayBuffer()),
          ContentLength: file.size,
          ContentType: file.type || "application/octet-stream",
        }),
      );
      uploaded.push({ key, name: file.name, size: file.size, type: file.type });
    }

    return NextResponse.json({ files: uploaded }, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ all: string[] }> },
) {
  try {
    const { all } = await params;
    if (all[0] !== "retreive") {
      return NextResponse.json({ error: "Unknown file action" }, { status: 404 });
    }
    const key = all.slice(1).join("/");
    if (!key) {
      return NextResponse.json({ error: "A file key is required" }, { status: 400 });
    }

    const { client, bucket } = getStorageConfig();
    await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
    return NextResponse.json({ deleted: true, key });
  } catch (error) {
    return errorResponse(error);
  }
}
