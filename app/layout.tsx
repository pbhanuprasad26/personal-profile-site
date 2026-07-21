import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { person } from "@/lib/content";

const siteUrl = "https://pbhanuprasad26.github.io/personal-profile-site";
const description =
  "Building the future of enterprise tax technology — compliance engineering, QA, and applied AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${person.name} — Tax Technology Professional`,
  description:
    "Tax Technology professional specializing in enterprise tax software compliance, ATS validation, and XML/XSD schema testing across Intuit Lacerte, ProSeries, and H&R Block — extending into automation and applied AI.",
  keywords: [
    "Tax Technology",
    "QA Tax Analyst",
    "ATS Validation",
    "Intuit Lacerte",
    "ProSeries",
    "IRS MeF",
    "XML XSD Schema Validation",
    "Bhanu Prasad Pochannapeta",
  ],
  authors: [{ name: person.name }],
  openGraph: {
    title: `${person.name} — Tax Technology Professional`,
    description,
    url: siteUrl,
    siteName: person.name,
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Tax Technology Professional`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.currentTitle,
  email: person.email,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  sameAs: [person.linkedin, person.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Always land at the top on a fresh load — browsers otherwise restore
            the last scroll position for a given tab/URL, which makes reloads
            or reused links land mid-page instead of at the hero. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              if (!window.location.hash) {
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
