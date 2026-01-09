import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can keep Inter as fallback
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Remove Cinzel and Lato imports
// import { Cinzel, Lato } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "White Noroh Studio",
  description: "Graphic Design Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        {/* Add Futura Fonts from CDN */}
        <link rel="stylesheet" href="https://use.typekit.net/xlo0qba.css" />
        {/* Alternative: Fonts.com CDN for Futura */}
        <link
          rel="stylesheet"
          href="https://fast.fonts.net/cssapi/6b2936b8-14c8-4939-aa39-0770c2e4e1a8.css"
        />
      </head>

      <body
        className={`${inter.className} antialiased transition-colors duration-300`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}