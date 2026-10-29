/**
 * Central, editable business configuration for the EaszyGoo website.
 *
 * Anything set to `null` (or an empty list) is an unconfirmed company detail.
 * The UI hides unconfirmed values instead of showing placeholders publicly,
 * so fill these in only with verified, approved information.
 */

export type AppId = "customer" | "vendor" | "rider";

export type StoreLinks = {
  /** Verified Google Play listing URL, or null while unavailable. */
  android: string | null;
  /** Verified App Store listing URL, or null while unavailable. */
  ios: string | null;
};

export type SocialLink = { label: string; href: string };

export const siteConfig = {
  name: "EaszyGoo",
  tagline: "Freshness Delivered. Convenience Redefined.",
  description:
    "EaszyGoo connects you with local vendors for fresh vegetables, fruits, and everyday essentials, delivered to your doorstep.",
  /**
   * Public site URL used for canonical links, Open Graph and the sitemap.
   * Set NEXT_PUBLIC_SITE_URL at build time once the production domain is confirmed.
   * On Vercel it falls back to the project's production domain, which Vercel provides automatically.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  locale: "en_IN",
} as const;

export const contactConfig = {
  // TODO(company): add verified public contact details. Left null on purpose — never invent these.
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
  /** Privacy-specific contact (for example a grievance or privacy officer). */
  privacyEmail: null as string | null,
  /**
   * Endpoint the contact form will POST JSON to once a backend exists.
   * While null the form runs in preview mode: it validates input but sends nothing.
   */
  formEndpoint: null as string | null,
};

// TODO(company): add genuine social profile URLs. Empty list = no social links are shown.
export const socialLinks: SocialLink[] = [];

export const appsConfig: Record<AppId, { name: string; storeLinks: StoreLinks }> = {
  customer: { name: "EaszyGoo Customer", storeLinks: { android: null, ios: null } },
  vendor: { name: "EaszyGoo Vendor", storeLinks: { android: null, ios: null } },
  rider: { name: "EaszyGoo Rider", storeLinks: { android: null, ios: null } },
};

export const legalConfig = {
  /** Date the current draft text was prepared. Update when the text changes. */
  draftUpdated: "29 October 2026",
  /** Set once the policy is approved and published. null = still a draft. */
  effectiveDate: null as string | null,
  // TODO(company): registered legal entity name and address, once confirmed for publication.
  legalEntityName: null as string | null,
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Apps", href: "/#apps" },
  { label: "Contact", href: "/contact" },
] as const;
