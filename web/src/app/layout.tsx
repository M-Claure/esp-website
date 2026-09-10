import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Euro Soccer Passport",
  description: "Train with the clubs. Live the culture. Experience European football.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} ${caveat.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
