import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { aboutParagraphs, aboutHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Kentank",
  description:
    "Kentank is Kenya's leading manufacturer of premium water storage solutions, serving residential, commercial, and industrial clients nationwide.",
};

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "1000s", label: "Satisfied customers" },
  { value: "10", label: "Tank sizes available" },
  { value: "47", label: "Counties served" },
];

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <Image
          src="/media/about-kentank.jpg"
          alt="Kentank manufacturing"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              About Us
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              About Kentank
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <video
                className="aspect-video w-full object-cover"
                src="/media/tanks-walkthrough.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/kentanks-site.jpeg"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                Kenya&apos;s trusted water storage partner
              </h2>
              {aboutParagraphs.map((p) => (
                <p key={p} className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <div className="font-heading text-4xl font-bold text-accent-400 sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-slate-300">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-ink">
              Ready to work with us?
            </h2>
            <p className="mt-3 text-lg text-ink-soft">
              Get a quote and professional installation advice from our team.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
