import type { Metadata, Viewport } from "next";
import { Caveat, Spline_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InnoviaPlus",
  description: "InnoviaPlus site",
  openGraph: {
    title: "Innovia Plus — Endüstriyel Kalıp ve Hassas Mühendislik",
    description:
      "Endüstriyel kalıp imalatı ve hassas mühendislik çözümlerinde 25 yılı aşkın tecrübeyle global standartlarda üretim.",
    url: "https://innoviaplus.com",
    siteName: "Innovia Plus",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovia Plus — Endüstriyel Kalıp ve Hassas Mühendislik",
    description:
      "Endüstriyel kalıp imalatı ve hassas mühendislik çözümlerinde 25 yılı aşkın tecrübeyle global standartlarda üretim.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${caveat.variable} ${splineSans.variable}`}>
      <body
        className="min-h-screen flex flex-col"
        style={{
          fontFamily: "var(--font-spline-sans), sans-serif",
        }}
      >
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
