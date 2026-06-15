import type { Metadata, Viewport } from "next";
import { Caveat, Spline_Sans } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL("https://innoviaplus.com"),
  alternates: {
    languages: {
      "tr": "https://innoviaplus.com",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Innovia Plus — Endüstriyel Kalıp ve Hassas Mühendislik",
    description:
      "Endüstriyel kalıp imalatı ve hassas mühendislik çözümlerinde 25 yılı aşkın tecrübeyle global standartlarda üretim.",
    url: "https://innoviaplus.com",
    siteName: "Innovia Plus",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/innoviaplus-Open-Graph.jpg",
        width: 1200,
        height: 630,
        alt: "Innovia Plus — Endüstriyel Kalıp ve Hassas Mühendislik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovia Plus — Endüstriyel Kalıp ve Hassas Mühendislik",
    description:
      "Endüstriyel kalıp imalatı ve hassas mühendislik çözümlerinde 25 yılı aşkın tecrübeyle global standartlarda üretim.",
    images: ["/images/innoviaplus-Open-Graph.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF6900",
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
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
