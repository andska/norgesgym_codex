import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.gymName} | Treningssenter og styrketrening i Moss`,
  description: `${siteConfig.gymName} er et lokalt treningssenter i Moss ved ${siteConfig.locationShort}. ${siteConfig.accessStatement}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${manrope.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
