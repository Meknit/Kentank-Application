import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site";
import { site } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const enquiry = encodeURIComponent(
    `Hello Kentank, I'm interested in the ${product.capacity} water tank (${product.price}). Please share more details.`
  );
  const href = `https://wa.me/${site.whatsapp}?text=${enquiry}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src="/media/kentank-tank.webp"
          alt={`${site.name} ${product.capacity} water storage tank`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow">
          {product.capacity}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-heading text-xl font-bold text-ink">
            {product.capacity}
          </h3>
          <span className="font-heading text-lg font-bold text-brand-600">
            {product.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-700"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
