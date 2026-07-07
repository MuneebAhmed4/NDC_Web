import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ndc.com.pk"),
  title: {
    default: "National Dry Cleaners | Dry Cleaning & Pickup in Lahore",
    template: "%s | National Dry Cleaners",
  },
  description:
    "Dry cleaning, laundry, alterations, bridal care, and free pickup and delivery across Lahore.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "National Dry Cleaners",
    description:
      "Garment care, alterations, bridal cleaning, and pickup and delivery across Lahore.",
    url: "/",
    siteName: "National Dry Cleaners",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Dry Cleaners",
    description:
      "Dry cleaning, laundry, alterations, and pickup and delivery across Lahore.",
  },
  keywords: [
    "dry cleaning Lahore",
    "laundry Lahore",
    "National Dry Cleaners",
    "bridal dress cleaning",
    "free pickup dry cleaning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper pb-16 text-ink antialiased md:pb-0">
        {/* data-native-anchor: skip Lenis smooth-scroll interception so the
            browser's native jump moves keyboard focus into <main> */}
        <a
          href="#main"
          data-native-anchor
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-forest focus:text-paper focus:px-5 focus:py-3 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
