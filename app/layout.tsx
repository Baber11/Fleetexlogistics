import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/lib/company";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | International Freight & Supply Chain`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "logistics",
    "freight forwarding",
    "air freight",
    "ocean freight",
    "Pakistan logistics",
    "FleetEx Logistics",
    "supply chain",
  ],
  openGraph: {
    title: company.name,
    description: company.description,
    siteName: company.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
