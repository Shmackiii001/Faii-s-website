"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [{ href: "/", label: "Profession" }, { href: "/lifestyle", label: "Lifestyle" }, { href: "/blog", label: "Journal" }];

export default function MainNav() {
  const pathname = usePathname();
  return <nav className="main-nav" aria-label="Main navigation"><div className="nav-wrap"><Link href="/" className="nav-brand">FK<span>.</span></Link><div className="nav-items">{items.map((item) => {
    const active = item.href === "/" ? pathname === "/" || pathname.startsWith("/proffession") : pathname === item.href;
    return <Link key={item.href} href={item.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>{item.label}</Link>;
  })}</div><a className="nav-contact" href="mailto:hello@example.com">Let’s connect <span>↗</span></a></div></nav>;
}
