"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { label: "Nosotros", href: "/#about" },
  { label: "Servicios", href: "/#services" },
  { label: "Barberos", href: "/#barbers" },
  { label: "Ubicación", href: "/#location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Navbar background after 60px of scroll (initNavbar)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open + close on Escape (initMobileNav)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Mobile nav drawer */}
      <div
        id="nav-drawer"
        className={`nav__drawer${open ? " nav__drawer--open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegación móvil">
          {links.map((l) => (
            <Link key={l.href} className="nav__drawer-link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link className="nav__drawer-link" href="/#booking" onClick={() => setOpen(false)}>
            Agendar ahora
          </Link>
        </nav>
      </div>

      <header>
        <nav className={`nav${scrolled ? " nav--scrolled" : ""}`} id="primary-nav" aria-label="Navegación principal">
          <Link className="nav__logo" href="/" aria-label={`${site.name} — Inicio`}>
            {site.name}
          </Link>

          <ul className="nav__menu" role="list">
            {links.map((l) => (
              <li key={l.href} className="nav__item">
                <Link className="nav__link" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="nav__item">
              <Link className="nav__link nav__link--cta" href="/#booking">
                Agendar ahora
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className={`nav__toggle${open ? " nav__toggle--open" : ""}`}
            aria-expanded={open}
            aria-controls="nav-drawer"
            aria-label="Abrir o cerrar el menú"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__toggle-line" />
            <span className="nav__toggle-line" />
            <span className="nav__toggle-line" />
          </button>
        </nav>
      </header>
    </>
  );
}
