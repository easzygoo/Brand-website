import type { ReactNode } from "react";

import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand-yellow/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgb(9_39_91/0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance text-brand-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {children ? <div className="mt-6 text-lg leading-relaxed text-pretty text-muted sm:text-xl">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
