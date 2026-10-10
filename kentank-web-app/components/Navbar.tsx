"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandMark variant="dark" />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-soft transition-colors duration-200 hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop phone */}
        <a
          href={site.phones[0].href}
          className="hidden items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:bg-brand-100 md:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {site.phones[0].label}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-slate-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-ink hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phones[0].href}
              className="mt-2 flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {site.phones[0].label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
