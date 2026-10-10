"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { products, site } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hello Kentank, my name is ${name || "(not given)"}.`,
      size ? `I'm interested in the ${size} tank.` : "",
      message ? `Message: ${message}` : "",
      phone ? `You can reach me on ${phone}.` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join(" "));
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener");
  };

  const field =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";
  const label = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="cf-name" className={label}>
          Full name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jane Wanjiru"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className={label}>
          Phone number
        </label>
        <input
          id="cf-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 0712 345678"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="cf-size" className={label}>
          Tank size of interest
        </label>
        <select
          id="cf-size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className={field}
        >
          <option value="">Select a size (optional)</option>
          {products.map((p) => (
            <option key={p.capacity} value={p.capacity}>
              {p.capacity} — {p.price}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>
          Message
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need…"
          className={field}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors duration-200 hover:bg-brand-700 sm:w-auto"
      >
        <Send className="h-5 w-5" />
        Send via WhatsApp
      </button>
      <p className="text-xs text-slate-500">
        This opens WhatsApp with your details pre-filled so you can send them to
        our team.
      </p>
    </form>
  );
}
