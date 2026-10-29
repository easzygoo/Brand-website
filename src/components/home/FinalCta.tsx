import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import produce from "../../../public/images/fresh-produce.webp";

export function FinalCta({
  title = "Fresh, local, and a few taps away.",
  text = "Discover how EaszyGoo brings neighbourhood stores and fresh produce closer to you — or get in touch with our team.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="final-cta-title" className="pb-20 sm:pb-28">
      <Container>
        <div className="surface-dark relative overflow-hidden rounded-[2rem] bg-brand-navy px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 id="final-cta-title" className="text-3xl font-extrabold tracking-tight text-balance text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href="/about" size="lg">
                  Discover EaszyGoo
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/#apps" size="lg" variant="light">
                  Explore Our Apps
                </ButtonLink>
                <ButtonLink href="/contact" size="lg" variant="light">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Contact the team
                </ButtonLink>
              </div>
            </div>
            <div className="relative mx-auto hidden w-full max-w-sm lg:block">
              <div aria-hidden="true" className="absolute inset-6 rounded-full bg-brand-yellow/90" />
              <Image src={produce} alt="" sizes="384px" className="relative h-auto w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
