import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Urbanist } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Modern Real Estate & Luxury Homes | Property",
  description: "Discover your dream home with Property. Explore listings of modern real estate and luxury villas in prime locations. Trusted by 10k+ happy clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${atkinson.variable} ${urbanist.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Property Real Estate",
              "url": "https://github.com/ceomaverick/piratebay",
              "logo": "https://github.com/ceomaverick/piratebay/logo.png",
              "author": {
                "@type": "Person",
                "name": "Avinash Deshmukh",
                "alternateName": "ceomaverick"
              }
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-text">{children}</body>
    </html>
  );
}
