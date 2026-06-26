import type { Metadata } from "next";
import { Inter, Poppins, Manrope, Caveat, Kalam, Permanent_Marker } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const kalam = Kalam({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-kalam" });
const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: ["400"], variable: "--font-permanent-marker" });

export const metadata: Metadata = {
  title: "Quenoxa Internship Portal",
  description: "Apply for a premium internship at Quenoxa Global Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${manrope.variable} ${caveat.variable} ${kalam.variable} ${permanentMarker.variable} antialiased bg-[#F8F6F0] text-[#222222] min-h-screen flex flex-col`}
      >
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
