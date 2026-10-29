import { ArrowRight, Bike, ShoppingBag, Store } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoTile } from "@/components/ui/Logo";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roles = [
  { icon: ShoppingBag, title: "Customers", text: "Shop fresh produce from nearby stores.", tint: "bg-brand-green-soft text-brand-green" },
  { icon: Store, title: "Local vendors", text: "Bring their store online and manage orders.", tint: "bg-brand-yellow-soft text-[#8a6d00]" },
  { icon: Bike, title: "Delivery partners", text: "Carry orders from store to doorstep.", tint: "bg-brand-navy-50 text-brand-navy" },
];

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-title" className="bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="about-preview-title"
            eyebrow="About EaszyGoo"
            title="Fresh-produce shopping, made simple and local."
            description="EaszyGoo is built to make buying vegetables, fruits, and daily essentials more convenient — while keeping neighbourhood vendors at the centre. One platform connects the people who shop, the stores that sell, and the partners who deliver."
          />
          <ButtonLink href="/about" variant="secondary" className="mt-8">
            Read our story
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </ButtonLink>
        </div>

        <div className="relative rounded-[2rem] bg-cream p-6 ring-1 ring-line sm:p-10">
          <div className="flex items-center gap-4 border-b border-line pb-6">
            <LogoTile className="h-14 w-14" />
            <p className="text-sm leading-relaxed text-muted">
              <span className="block font-bold text-brand-navy">One connected platform</span>
              Three dedicated apps, one shared goal: fresh produce, made easy.
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            {roles.map(({ icon: Icon, title, text, tint }) => (
              <li key={title} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tint}`}>
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-bold text-brand-navy">{title}</span>
                  <span className="block text-sm text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
