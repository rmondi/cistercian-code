import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Système cistercien de notation numérique",
  description: "Convertisseur de nombre arabe en système cistercien de notation numérique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-lvh flex flex-col bg-stone-100"
      >
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
