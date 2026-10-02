"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfHeader() {
  const pathname = usePathname();
  return <nav className="section-nav" aria-label="Profession pages"><span className="section-nav-label">PROFESSION</span><Link href="/" className={pathname === "/" ? "active" : ""}>Introduction</Link><Link href="/proffession/workissues" className={pathname === "/proffession/workissues" ? "active" : ""}>Work & perspective</Link></nav>;
}
