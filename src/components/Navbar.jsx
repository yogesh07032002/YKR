
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Branches", href: "#branches" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar">

        {/* BRAND LOGO */}
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="YKR Training Institute Home"
        >
          <img
            src="/logo.jpeg"
            alt="YKR Training Institute Logo"
            className="navbar-logo"
          />

          <span className="brand-text">
            <strong>YKR</strong>
            <small>TRAINING INSTITUTE</small>
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="https://wa.me/917218550652?text=Hello%20YKR%20Training%20Institute%2C%20I%20want%20to%20book%20a%20free%20demo."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Book Free Demo <span>↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
