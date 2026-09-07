// components/MainNav.jsx
"use client"; // Add this for App Router

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

function MainNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Profession" },
    { href: "/lifestyle", label: "Lifestyle" },
    { href: "/blog", label: "Blog" },
  
  ];

  return (
    <nav className="flex gap-9 justify-center items-center m-5 princess-thin">
      {navItems.map(({ href, label }) => {
        const isActive = pathname === href;
        const isPro = isActive && pathname == "/";
        const isLifestyle = isActive && pathname == "/lifestyle";
        const isBlog = isActive && pathname == "/blog";
        const isProIss =  pathname == "/proffession/workissues";
        return (
          <Link key={href} href={href}>
            <h2
              className={`text-2xl transition-colors 
                ${isPro && "text-yellow-500 font-bold border-b-2 border-yellow-500"}
                ${isProIss && href=="/" && "text-yellow-500 font-bold border-b-2 border-yellow-500"}
               ${isLifestyle && "text-cyan-500 font-bold border-b-2 border-cyan-500"}
                   ${isBlog && "text-pink-600 font-bold border-b-2 border-pink-500"}
                  
              `}
            >
              {label}
            </h2>
          </Link>
        );
      })}
    </nav>
  );
}

export default MainNav;
