import React from "react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import "aos/dist/aos.css";
import Header from "../ui/common/header/Header";
import WithAOS from "../ui/withAOS/WithAos";
const Footer = React.lazy(() => import("../ui/common/footer/Footer"));

const urbanist = Urbanist({
  subsets: ["latin"], // Add other subsets if needed
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Specify the font weights you need
});

export const metadata: Metadata = {
  title: "Scaffolding in the UK | Reliable Scaffolding Services",
  description:
    "Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs.",
  icons: "/svgs/logolap.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/herocover.webp" as="image" rel="preload" />
        {/* Meta Tags for SEO */}
        <meta
          name="title"
          content="Scaffolding in the UK | Reliable Scaffolding Services"
        />
        <meta
          name="description"
          content="Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="scaffolding, scaffolding UK, scaffolding services, construction scaffolding, reliable scaffolding, scaffolding for hire, UK scaffolding solutions"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Meta Tags (for sharing on social media) */}
        <meta
          property="og:title"
          content="Scaffolding in the UK | Reliable Scaffolding Services"
        />
        <meta
          property="og:description"
          content="Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thescaffolding.co.uk/" />
        <meta property="og:image" content="/assets/herocover.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Scaffolding in the UK | Reliable Scaffolding Services"
        />
        <meta
          name="twitter:description"
          content="Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs."
        />
        <meta name="twitter:image" content="/assets/herocover.webp" />
      </head>
      <body className={urbanist.className}>
        <WithAOS>
          <Header />
          {children}
          <Footer />
        </WithAOS>
      </body>
    </html>
  );
}
