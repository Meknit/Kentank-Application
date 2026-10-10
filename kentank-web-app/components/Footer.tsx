import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, nav } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = nav.filter((n) => n.label !== "Home");

  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 font-heading text-sm font-bold text-white">
              KT
            </span>
            <span className="font-heading text-xl font-bold text-white">
              Kentank
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {site.footerBlurb}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-accent-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Contact Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="flex items-center gap-3 text-slate-400 transition-colors duration-200 hover:text-accent-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all text-slate-400 transition-colors duration-200 hover:text-accent-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <MapPin className="h-4 w-4 shrink-0 text-accent-400" aria-hidden />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © {year} Kentank. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
