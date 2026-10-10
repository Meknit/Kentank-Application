import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Products - Water Storage Tanks | Kentank",
  description:
    "Browse Kentank's full range of water storage tanks from 1,000L to 10,000L. Warranty and professional installation included.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page banner */}
      <section className="relative flex min-h-[42vh] items-center overflow-hidden">
        <Image
          src="/media/kentanks-site.jpeg"
          alt="Kentank tanks at a construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Our Products
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
              Water Storage Tanks
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-200">
              Choose from our wide range of water storage tanks. All products
              come with warranty and professional installation support.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full range showcase */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              The Complete Range
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink sm:text-4xl">
              One tank for every need
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              From compact 1,000L household tanks to 10,000L commercial storage —
              all built from 100% food-grade, UV-protected material.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <Image
                src="/media/kentank-range.webp"
                alt="The full range of Kentank water storage tanks, from 1,000L to 10,000L"
                width={1358}
                height={822}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="mx-auto h-auto w-full max-w-4xl"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full product grid */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.capacity} delay={(i % 4) * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {/* Help band */}
          <Reveal className="mt-16">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 sm:flex-row sm:justify-between sm:text-left">
              <div>
                <h2 className="font-heading text-2xl font-bold text-ink">
                  Not sure which size you need?
                </h2>
                <p className="mt-2 text-ink-soft">
                  Our team will help you pick the right tank for your household,
                  business, or institution.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Ask an Expert
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
