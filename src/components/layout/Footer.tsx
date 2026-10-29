import { cacheLife } from "next/cache";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig, socialLinks } from "@/config/site";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Apps",
    links: [
      { label: "Customer App", href: "/#customer-app" },
      { label: "Vendor App", href: "/#vendor-app" },
      { label: "Rider App", href: "/#rider-app" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const linkClass =
  "text-[0.95rem] text-white/70 transition-colors hover:text-brand-yellow underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden bg-brand-navy text-white">
      {/* Subtle produce-inspired decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-green-bright/10 blur-3xl" />

      <Container className="relative pt-16 pb-8 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-11" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              EaszyGoo is a hyperlocal platform bringing customers, local vendors, and delivery partners together around fresh
              vegetables, fruits, and everyday essentials.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-sm font-bold tracking-wide text-brand-yellow">{col.title}</h2>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-sm font-bold tracking-wide text-brand-yellow">Connect</h2>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact Us
                  </Link>
                </li>
                {socialLinks.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className={linkClass} target="_blank" rel="noopener noreferrer">
                      {s.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
