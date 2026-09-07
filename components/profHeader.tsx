"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function profHeader() {
  const pathname = usePathname();
  return (
    <div className="post flex justify-center items-center gap-8">
      <Link href="/">
        <div>
          <h2
            className={`text-4xl ${pathname == "/" && "border-b-2 border-black"}`}
          >
            Introduction
          </h2>
        </div>
      </Link>
      <Link href="/proffession/workissues">
        <div>
          <h2
            className={`text-4xl ${pathname == "/proffession/workissues" && "border-b-2 border-black"}`}
          >
            Work Issues
          </h2>
        </div>
      </Link>
    </div>
  );
}

export default profHeader;
