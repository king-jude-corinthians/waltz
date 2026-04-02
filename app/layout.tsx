import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waltz Signature | Nigerian Luxury Tailoring",
  description:
    "Bespoke Nigerian native wear crafted with precision and artistry. Agbada, Senator Wear, Kaftan and more — experience the pinnacle of Nigerian luxury tailoring in Lagos.",
  keywords:
    "Nigerian tailor, luxury native wear, bespoke agbada, senator wear, kaftan, Nigerian fashion, Lagos tailor, aso-oke, isi-agu",
  openGraph: {
    title: "Waltz Signature | Nigerian Luxury Tailoring",
    description: "Bespoke Nigerian native wear. The art of luxury tailoring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="grain-overlay">
        <CustomCursor />
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
