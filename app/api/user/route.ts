import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { db } from "@/db/db";
import { Users } from "@/db/schema";

export async function GET() {
  try {
    //await db.insert(Users).values({ name: "andrew", uuid: randomUUID() });
    let users=await db.select().from(Users);
    console.log(users)
    return NextResponse.json({ works: true });
  } catch (e) {
    console.error("User insert failed", e);
    return NextResponse.json({ err: "Unable to insert user" }, { status: 500 });
  }
}
