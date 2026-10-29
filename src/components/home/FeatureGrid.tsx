import { Bike, Eye, Handshake, LayoutDashboard, Salad, Smartphone } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Salad,
    title: "Fresh produce & essentials",
    text: "Vegetables, fruits, and everyday essentials from stores close to home.",
    tint: "bg-brand-green-soft text-brand-green",
  },
  {
    icon: Handshake,
    title: "Local vendor connections",
    text: "Shop with neighbourhood vendors and help local businesses reach you online.",
    tint: "bg-brand-yellow-soft text-[#8a6d00]",
  },
  {
    icon: Smartphone,
    title: "Convenient ordering",
    text: "Browse, build your cart, and place an order without leaving home.",
    tint: "bg-brand-navy-50 text-brand-navy",
  },
  {
    icon: Eye,
    title: "Order visibility",
    text: "Clear status updates from the moment you order to the moment it arrives.",
    tint: "bg-brand-green-soft text-brand-green",
  },
  {
    icon: LayoutDashboard,
    title: "Dedicated vendor tools",
    text: "A separate app for stores to manage products, availability, and incoming orders.",
    tint: "bg-brand-yellow-soft text-[#8a6d00]",
  },
  {
    icon: Bike,
    title: "Delivery-partner experience",
    text: "A focused app for riders with assignments, delivery details, and earnings history.",
    tint: "bg-brand-navy-50 text-brand-navy",
  },
];

export function FeatureGrid() {
  return (
    <section aria-labelledby="why-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="why-title"
          align="center"
          eyebrow="Why EaszyGoo"
          title="Built around freshness and convenience."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text, tint }) => (
            <li
              key={title}
              className="rounded-[var(--radius-card)] bg-white p-7 shadow-soft ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className={`flex h-13 w-13 items-center justify-center rounded-2xl ${tint}`}>
                <Icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
