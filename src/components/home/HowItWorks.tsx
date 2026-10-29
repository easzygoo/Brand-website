import { Bike, ClipboardCheck, MapPin, ShoppingBasket, Store, Truck } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { icon: MapPin, title: "Discover nearby stores", text: "See local vendors serving your area and what they have on their shelves." },
  { icon: ShoppingBasket, title: "Choose fresh produce", text: "Browse vegetables, fruits, and essentials, and build your cart." },
  { icon: ClipboardCheck, title: "Place your order", text: "Confirm your address and order details in a few taps." },
  { icon: Truck, title: "Follow delivery progress", text: "Watch your order move from the store to your doorstep." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="How EaszyGoo works"
          title="From neighbourhood store to your doorstep."
          description="A simple journey for customers, supported by vendors who prepare each order and delivery partners who bring it home."
        />

        <div className="relative mt-14">
        <div aria-hidden="true" className="absolute top-14 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-yellow-deep/50 lg:block" />
        <ol className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="relative rounded-[var(--radius-card)] bg-cream p-6 ring-1 ring-line">
              <div className="flex items-center justify-between">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow text-brand-navy shadow-[0_8px_20px_-10px_rgb(230_184_0/0.9)]">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <span className="text-4xl font-extrabold text-brand-navy/10" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-brand-navy">
                <span className="sr-only">Step {i + 1}: </span>
                {title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="flex gap-5 rounded-[var(--radius-card)] bg-brand-green-soft p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-green">
              <Store aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Vendors prepare your order</h3>
              <p className="mt-2 leading-relaxed text-ink/75">
                When an order comes in, the store reviews it in the EaszyGoo Vendor app, packs the items, and updates the
                preparation status as it goes.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-[var(--radius-card)] bg-brand-navy-50 p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-navy">
              <Bike aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Riders handle the delivery</h3>
              <p className="mt-2 leading-relaxed text-ink/75">
                A delivery partner sees the pickup and drop details in the EaszyGoo Rider app, collects the order, and updates
                its status through to delivery.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Store availability, product range, and service areas depend on the vendors and delivery partners in your locality.
        </p>
      </Container>
    </section>
  );
}
