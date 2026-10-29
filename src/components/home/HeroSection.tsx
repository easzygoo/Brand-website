import { ArrowRight, Leaf, ShieldCheck, Store } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import produce from "../../../public/images/fresh-produce.webp";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft brand backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-yellow/25 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[26rem] w-[26rem] rounded-full bg-brand-green-bright/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgb(9_39_91/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <Container className="relative grid items-center gap-12 pt-10 pb-16 sm:pt-16 lg:grid-cols-2 lg:gap-8 lg:pt-20 lg:pb-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.7rem] font-bold tracking-[0.22em] text-brand-green shadow-soft ring-1 ring-line sm:text-xs">
            <Leaf aria-hidden="true" className="h-3.5 w-3.5" />
            FRESH • LOCAL • RELIABLE
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-balance text-brand-navy sm:text-6xl lg:text-[3.5rem] xl:text-[3.9rem]"
          >
            Freshness Delivered.{" "}
            <span className="relative whitespace-nowrap text-brand-green">
              Convenience
              <svg
                aria-hidden="true"
                viewBox="0 0 300 16"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand-yellow"
                preserveAspectRatio="none"
              >
                <path d="M3 11 C 80 3, 200 3, 297 9" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Redefined.
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            EaszyGoo connects you with local vendors for fresh vegetables, fruits, and everyday essentials, delivered to your
            doorstep.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/about" size="lg">
              Discover EaszyGoo
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/#apps" size="lg" variant="secondary">
              Explore Our Apps
            </ButtonLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-ink/80">
            <li className="flex items-center gap-2">
              <Store aria-hidden="true" className="h-4 w-4 text-brand-green" /> Local vendors
            </li>
            <li className="flex items-center gap-2">
              <Leaf aria-hidden="true" className="h-4 w-4 text-brand-green" /> Fresh produce
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="h-4 w-4 text-brand-green" /> Clear order updates
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[36rem]">
          <Image
            src={produce}
            alt="A colourful arrangement of fresh vegetables — tomatoes, carrots, lettuce, spinach, broccoli, aubergine, a yellow bell pepper, onion and potato."
            preload
            sizes="(min-width: 1024px) 560px, 92vw"
            className="relative h-auto w-full drop-shadow-[0_30px_40px_rgb(9_39_91/0.18)] motion-safe:animate-float"
          />

          <div
            aria-hidden="true"
            className="absolute top-[6%] left-0 hidden items-center gap-3 rounded-2xl bg-white/95 p-3 pr-4 shadow-lift ring-1 ring-line backdrop-blur sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green">
              <Store className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-navy">From local vendors</span>
              <span className="block text-xs text-muted">Shops in your neighbourhood</span>
            </span>
          </div>

          <div
            aria-hidden="true"
            className="absolute right-0 bottom-[4%] hidden items-center gap-3 rounded-2xl bg-brand-navy p-3 pr-4 text-white shadow-lift sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-navy">
              <ArrowRight className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold">To your doorstep</span>
              <span className="block text-xs text-white/70">Follow every order step</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
