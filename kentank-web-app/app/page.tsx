import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, BadgeCheck, Truck, Headset } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import {
  products,
  aboutParagraphs,
  aboutHighlights,
  features,
  site,
} from "@/lib/site";

const iconMap = { ShieldCheck, BadgeCheck, Truck, Headset } as const;

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src="/media/hero-kentank.jpg"
          alt="Industrial water storage tanks"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-300 ring-1 ring-white/20">
                Trusted across Kenya
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-heading text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Premium Water
                <br />
                <span className="text-gradient-accent">Storage Solutions</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200">
                Trusted by thousands across Kenya. From 1,000L to 10,000L
                capacity tanks. Quality, durability, and reliability you can
                count on.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-700 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  View Products
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/70 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS PREVIEW ============ */}
      <section id="products" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Choose from our wide range of water storage tanks. All products
              come with warranty and professional installation support.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.capacity} delay={i * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              View All Tanks
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section id="about" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/media/about-kentank.jpg"
                alt="Kentank water tanks manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
                About Kentank
              </h2>
              {aboutParagraphs.map((p) => (
                <p key={p} className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-ink">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section id="why" className="bg-brand-950 py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Why Choose Kentank
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Experience the difference with Kenya&apos;s most trusted water
              storage solutions provider.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              return (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-400 text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {f.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND ============ */}
      <section className="bg-gradient-to-r from-brand-600 to-accent-500 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Ready to secure your water supply?
            </h2>
            <p className="mt-2 text-lg text-blue-50">
              Talk to our team today for a quote and free installation advice.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-brand-700 shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={site.phones[0].href}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/70 px-6 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Call {site.phones[0].label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
