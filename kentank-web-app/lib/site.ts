// Central content + config for the Kentank site.
// Edit contact details, products, and copy here — everything reads from this file.

export const site = {
  name: "Kentank",
  tagline: "Premium Water Storage Solutions",
  location: "Nairobi, Kenya",
  email: "rmoulderskenya@gmail.com",
  phones: [
    { label: "0714 749328", href: "tel:+254714749328" },
  ],
  // WhatsApp uses the primary line (international format, no +, spaces, or dashes)
  whatsapp: "254714749328",
  footerBlurb:
    "Kenya's trusted provider of premium water storage solutions. Quality and reliability since day one.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Product = {
  capacity: string;
  liters: number;
  price: string;
  description: string;
};

export const products: Product[] = [
  {
    capacity: "1000L",
    liters: 1000,
    price: "KES 8,400",
    description:
      "Perfect for small households and residential use. Compact design with excellent durability and UV protection.",
  },
  {
    capacity: "1500L",
    liters: 1500,
    price: "KES 12,000",
    description:
      "Ideal for medium-sized families. Enhanced capacity with robust construction for reliable water storage.",
  },
  {
    capacity: "2000L",
    liters: 2000,
    price: "KES 14,800",
    description:
      "Great for larger households and small commercial applications. Durable and long-lasting construction.",
  },
  {
    capacity: "3000L",
    liters: 3000,
    price: "KES 20,800",
    description:
      "Excellent choice for commercial use and large families. High capacity with premium quality materials.",
  },
  {
    capacity: "4000L",
    liters: 4000,
    price: "KES 29,400",
    description:
      "High-capacity solution for commercial properties and institutions. Built to last with superior engineering.",
  },
  {
    capacity: "4600L",
    liters: 4600,
    price: "KES 32,400",
    description:
      "Perfect for medium-scale commercial operations. Optimized design for maximum water storage efficiency.",
  },
  {
    capacity: "5000L",
    liters: 5000,
    price: "KES 35,400",
    description:
      "Large capacity for demanding commercial needs. Superior quality with exceptional durability.",
  },
  {
    capacity: "6000L",
    liters: 6000,
    price: "KES 44,400",
    description:
      "Industrial-grade storage for large commercial facilities. Built to withstand harsh conditions.",
  },
  {
    capacity: "8000L",
    liters: 8000,
    price: "KES 60,800",
    description:
      "Premium large-scale solution for industrial applications. Unmatched reliability and performance.",
  },
  {
    capacity: "10000L",
    liters: 10000,
    price: "KES 78,400",
    description:
      "Maximum capacity for large-scale industrial and commercial operations. The ultimate water storage solution.",
  },
];

export const aboutParagraphs = [
  "Kentank is Kenya's leading manufacturer of premium water storage solutions. We've been providing reliable, durable, and high-quality water tanks to residential, commercial, and industrial clients across the nation.",
  "Our commitment to excellence and customer satisfaction has made us the preferred choice for thousands of satisfied customers. Every tank is manufactured using cutting-edge technology and the highest quality materials.",
];

export const aboutHighlights = [
  "Over 10 years of industry experience",
  "ISO certified manufacturing process",
  "100% food-grade materials",
  "Nationwide delivery & installation",
];

export const faqs = [
  {
    q: "What tank sizes do you offer?",
    a: "We stock ten sizes ranging from 1,000L up to 10,000L — suitable for small households, large families, commercial properties, and industrial facilities.",
  },
  {
    q: "How much do your water tanks cost?",
    a: "Prices range from KES 8,400 for the 1,000L tank to KES 78,400 for the 10,000L tank. See the Products page for the full price list, and contact us for bulk or trade pricing.",
  },
  {
    q: "Do you deliver and install the tanks?",
    a: "Yes. We offer nationwide delivery and professional installation support across Kenya, so your tank arrives and is set up correctly.",
  },
  {
    q: "Is there a warranty?",
    a: "All tanks come with a warranty, and select models carry up to a 15-year warranty. We stand behind the quality and durability of every product we sell.",
  },
  {
    q: "What are the tanks made of?",
    a: "Our tanks are manufactured from 100% food-grade materials using an ISO-certified process, with UV protection to withstand harsh sun and outdoor conditions.",
  },
  {
    q: "How do I place an order?",
    a: "Call us on 0714 749328, tap the WhatsApp button, or send us a request through the Contact page. Our team will confirm availability, pricing, and delivery.",
  },
  {
    q: "Which tank size is right for me?",
    a: "As a rough guide: 1,000–2,000L suits small to medium households, 3,000–5,000L suits large homes and small businesses, and 6,000–10,000L suits commercial and industrial use. Our team is happy to advise based on your needs.",
  },
  {
    q: "Do you serve areas outside Nairobi?",
    a: "Yes. Although we are based in Nairobi, we deliver to clients across the country. Reach out with your location and we will arrange delivery.",
  },
];

export const features = [
  {
    icon: "ShieldCheck",
    title: "Premium Quality",
    description:
      "ISO certified manufacturing with food-grade materials ensuring the highest standards.",
  },
  {
    icon: "BadgeCheck",
    title: "Long Warranty",
    description:
      "Up to 15-year warranty on select models. We stand behind our products.",
  },
  {
    icon: "Truck",
    title: "Fast Delivery",
    description:
      "Nationwide delivery and professional installation services available.",
  },
  {
    icon: "Headset",
    title: "Expert Support",
    description:
      "Dedicated customer support team ready to assist you at every step.",
  },
];
