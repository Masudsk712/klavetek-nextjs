/**
 * ------------------------------------------------------------
 * KLAVETEK WEBSITE
 * Global Metadata Configuration
 * Next.js 16 App Router
 * ------------------------------------------------------------
 */

import type { Metadata } from "next";
import { SITE } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  keywords: [...SITE.keywords],

  applicationName: SITE.name,

  authors: [
    {
      name: SITE.name,
      url: SITE.url,
    },
  ],

  creator: SITE.name,

  publisher: SITE.name,

  category: "Construction",

  alternates: {
    canonical: SITE.url,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: SITE.name,

    description: SITE.description,

    url: SITE.url,

    siteName: SITE.name,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: SITE.images.og,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE.name,

    description: SITE.description,

    images: [SITE.images.twitter],
  },

  icons: {
    icon: SITE.images.favicon,

    shortcut: SITE.images.favicon,

    apple: SITE.images.favicon,
  },

  verification: {
    google: "",
  },
};