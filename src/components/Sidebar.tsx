"use client";

import Logo from "./Logo";

const navItems = [
  { label: "DASHBOARD", active: true },
  { label: "SYSTEMS", active: false },
  { label: "DIAGNOSTICS", active: false },
  { label: "CLIENTS", active: false },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <Logo />
        <div className="brand-meta">EST 2026 / VANCOUVER</div>
      </div>

      <ul className="nav-list">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`nav-item${item.active ? " active" : ""}`}
          >
            <span>{item.label}</span>
            <div className="nav-icon" />
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
