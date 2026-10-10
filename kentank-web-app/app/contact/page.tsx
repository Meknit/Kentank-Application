import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Kentank",
  description:
    "Get in touch with Kentank for quotes, orders, and installation of premium water storage tanks across Kenya.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Contact Us
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              Let&apos;s talk water storage
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Reach out for quotes, orders, or installation advice. Our team is
              ready to help you choose the right tank.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Info */}
          <Reveal>
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink">
                Get in touch
              </h2>
              <p className="mt-3 text-ink-soft">
                Prefer to reach us directly? Use any of the channels below.
              </p>

              <ul className="mt-8 space-y-5">
                {site.phones.map((p) => (
                  <li key={p.href} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">Call us</div>
                      <a
                        href={p.href}
                        className="text-ink-soft transition-colors hover:text-brand-600"
                      >
                        {p.label}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">Email us</div>
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-ink-soft transition-colors hover:text-brand-600"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">Location</div>
                    <div className="text-ink-soft">{site.location}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink">Hours</div>
                    <div className="text-ink-soft">Mon – Sat, 8:00am – 6:00pm</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200 sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-ink">
                Request a quote
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                Fill in your details and we&apos;ll get right back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
