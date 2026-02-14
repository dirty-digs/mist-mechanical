"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navItems = [
  { label: "DASHBOARD", href: "/" },
  { label: "SYSTEMS", href: "/systems" },
  { label: "DIAGNOSTICS", href: "/diagnostics" },
  { label: "CLIENTS", href: "/clients" },
  { label: "ABOUT", href: "/about" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo />
        </Link>
        <div className="brand-meta">EST 2026 / VANCOUVER</div>
      </div>

      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`nav-item${pathname === item.href ? " active" : ""}`}
            >
              <span>{item.label}</span>
              <div className="nav-icon" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-footer">
        <span>V 2.0.4</span>
        <span>SECURE</span>
      </div>
    </aside>
  );
}
