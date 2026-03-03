import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Liliana Ledesma | Bay Area Mortgage & Real Estate Guidance",
    template: "%s | Liliana Ledesma",
  },
  description:
    "Strategic mortgage and real estate guidance for buyers, sellers, and investors in Richmond and the Bay Area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} bg-brand-bg text-brand-text antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
