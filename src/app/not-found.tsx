import { ArrowLeft, Home, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import produce from "../../public/images/fresh-produce.webp";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-yellow/25 blur-3xl" />
      <Container className="relative flex flex-col items-center py-20 text-center sm:py-28">
        <Image src={produce} alt="" sizes="240px" className="h-auto w-56 opacity-95 sm:w-60" />
        <p className="mt-8 text-sm font-bold tracking-[0.2em] text-brand-green">ERROR 404</p>
        <h1 id="nf-title" className="mt-3 text-4xl font-extrabold tracking-tight text-balance text-brand-navy sm:text-5xl">
          This aisle seems to be empty.
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
          We couldn&apos;t find the page you were looking for. It may have moved, or the link might be mistyped.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <Home aria-hidden="true" className="h-4 w-4" />
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Contact us
          </ButtonLink>
        </div>
        <Link href="/#apps" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy underline underline-offset-4">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Or explore our apps
        </Link>
      </Container>
    </section>
  );
}
