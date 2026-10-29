import { ChevronDown } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ReviewNote } from "@/components/ui/ReviewNote";
import { legalConfig } from "@/config/site";

export type LegalSection = { id: string; title: string; content: ReactNode };

function TocList({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-1 text-sm">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="flex gap-2 rounded-lg px-3 py-1.5 text-muted transition-colors hover:bg-brand-yellow-soft hover:text-brand-navy"
          >
            <span className="w-5 shrink-0 font-semibold text-brand-navy/40 tabular-nums">{i + 1}.</span>
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalLayout({
  eyebrow,
  title,
  intro,
  sections,
  related,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  related: { label: string; href: "/privacy-policy" | "/terms-and-conditions" };
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title}>
        {intro}
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="font-semibold text-brand-navy">Last updated:</dt>
            <dd>{legalConfig.draftUpdated}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-brand-navy">Status:</dt>
            <dd>{legalConfig.effectiveDate ? `Effective ${legalConfig.effectiveDate}` : "Draft — not yet in effect"}</dd>
          </div>
        </dl>
      </PageHero>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {/* Mobile: collapsible contents */}
            <details className="group rounded-2xl bg-white shadow-soft ring-1 ring-line lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-bold text-brand-navy [&::-webkit-details-marker]:hidden">
                Table of contents
                <ChevronDown aria-hidden="true" className="h-5 w-5 transition-transform group-open:rotate-180" />
              </summary>
              <nav aria-label="Table of contents" className="border-t border-line px-2 py-3">
                <TocList sections={sections} />
              </nav>
            </details>
            {/* Desktop: sticky contents */}
            <nav aria-labelledby="toc-title" className="hidden rounded-2xl bg-white p-4 shadow-soft ring-1 ring-line lg:block">
              <h2 id="toc-title" className="px-3 pb-2 text-xs font-bold tracking-[0.16em] text-brand-green uppercase">
                Contents
              </h2>
              <div className="max-h-[calc(100dvh-12rem)] overflow-y-auto">
                <TocList sections={sections} />
              </div>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <ReviewNote title="Draft for review — not legal advice">
              This document is a working draft prepared for EaszyGoo and has not been legally reviewed. Highlighted{" "}
              <span className="font-semibold">[To confirm]</span> items mark company-specific facts and policy decisions that
              must be verified and approved before publication.
            </ReviewNote>

            <div className="mt-10 space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                  <h2 id={`${s.id}-title`} className="text-xl font-extrabold tracking-tight text-brand-navy sm:text-2xl">
                    <span className="mr-2 text-brand-green">{i + 1}.</span>
                    {s.title}
                  </h2>
                  <div className="prose-legal mt-4">{s.content}</div>
                </section>
              ))}
            </div>

            <p className="mt-14 border-t border-line pt-6 text-sm text-muted">
              See also our{" "}
              <Link href={related.href} className="font-semibold text-brand-navy underline underline-offset-4">
                {related.label}
              </Link>
              .
            </p>
          </article>
        </div>
      </Container>
    </>
  );
}
