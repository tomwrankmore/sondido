"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 box-border flex w-full items-start justify-between px-4 py-4 min-[481px]:items-center min-[481px]:px-8 min-[481px]:py-5 z-[99]"
      aria-label="Main navigation"
    >
      <Link
        className="text-xl font-bold text-inherit no-underline"
        href="/"
        aria-label="Home"
      >
        Sonido Media
      </Link>
      <button
        type="button"
        className="text-2xl leading-none min-[481px]:hidden"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "×" : "☰"}
      </button>
      <div
        className={`${menuOpen ? "flex" : "hidden"} absolute right-4 top-full z-10 flex-col gap-4 bg-inherit px-4 py-4 min-[481px]:static min-[481px]:flex min-[481px]:flex-row min-[481px]:items-center min-[481px]:justify-end min-[481px]:gap-8 min-[481px]:bg-transparent min-[481px]:p-0`}
      >
        <Link className="text-inherit no-underline" href="/work">
          Work
        </Link>
        <Link className="text-inherit no-underline" href="/about">
          About
        </Link>
        <Link className="text-inherit no-underline" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
