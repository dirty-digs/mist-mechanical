"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="mobile-header">
        <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
          <span className="mobile-logo-text">MIST MECHANICAL</span>
        </Link>
        <button
          type="button"
          className="mobile-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`mobile-nav-link${pathname === item.href ? " active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
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
    </>
  );
}
