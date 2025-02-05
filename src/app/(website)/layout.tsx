import React from "react";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import "aos/dist/aos.css";
import Header from "../ui/common/header/Header";
import WithAOS from "../ui/withAOS/WithAos";
import Head from "next/head";

// Lazy load non-critical components
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
  openGraph: {
    title: "Scaffolding in the UK | Reliable Scaffolding Services",
    description:
      "Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs.",
    url: "https://thescaffolding.co.uk/",
    siteName: "Face2Face Scaffolding",
    images: [
      {
        url: "/assets/herocover.webp",
        width: 1200,
        height: 630,
        alt: "Scaffolding Services in the UK",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scaffolding in the UK | Reliable Scaffolding Services",
    description:
      "Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs.",
    images: ["/assets/herocover.webp"],
  },
  alternates: {
    canonical: "https://thescaffolding.co.uk/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Preload Critical Assets */}
        <link href="/assets/herocover.webp" as="image" rel="preload" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700&display=swap`}
          rel="stylesheet"
        />
        <meta
          name="keywords"
          content="scaffolding, scaffolding UK, scaffolding services, construction scaffolding, reliable scaffolding, scaffolding for hire, UK scaffolding solutions"
        />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Face2Face Scaffolding",
            image: "/assets/herocover.webp",
            url: "https://thescaffolding.co.uk/",
            telephone: "+44-123-456-7890",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Scaffold Street",
              addressLocality: "London",
              postalCode: "SW1A 1AA",
              addressCountry: "UK",
            },
            description:
              "Professional scaffolding services in the UK for construction, maintenance, and more. Reliable, safe, and cost-effective solutions tailored to your needs.",
            openingHours: "Mo-Fr 08:00-18:00",
          })}
        </script>
      </Head>
      <body className={urbanist.className}>
        <WithAOS>
          <Header />
          {children}
          <React.Suspense fallback={<div>Loading Footer...</div>}>
            <Footer />
          </React.Suspense>
        </WithAOS>
      </body>
    </html>
  );
}
