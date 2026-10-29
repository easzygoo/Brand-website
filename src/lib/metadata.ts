import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: `${siteConfig.name} — ${siteConfig.tagline}` };

/**
 * Full page metadata, including Open Graph and Twitter fields.
 * Next.js replaces (rather than merges) a parent's `openGraph` object, so every page builds the whole set here.
 */
export function pageMetadata({
  title,
  socialTitle,
  description,
  path,
}: {
  /** Page title; omitted on the homepage so the root default is used. */
  title?: string;
  socialTitle: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url: path,
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
