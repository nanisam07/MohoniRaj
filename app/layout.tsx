import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Mohiniraj — Holistic Healer & Life Skills Mentor | Ho'oponopono Healing",
  description:
    "Break free from stress, heal deep emotional baggage, and unlock lasting inner peace with Mohiniraj. Join the free live Ho'oponopono healing masterclass.",
  keywords: [
    "Mohiniraj",
    "Ho'oponopono",
    "Ho'oponopono Workshop",
    "Holistic Healing",
    "Emotional Healing",
    "Life Skills Mentor",
    "Stress Relief",
    "Personal Transformation",
  ],
  authors: [{ name: "Mohiniraj" }],
  openGraph: {
    title: "Mohiniraj — Holistic Healer & Life Skills Mentor",
    description:
      "Break free from stress and heal deep emotional baggage with simple, practical Ho'oponopono healing.",
    url: "https://go.mohiniraj.in/",
    siteName: "Mohiniraj Holistic Healing",
    images: [
      {
        url: "https://go.mohiniraj.in/wp-content/uploads/2025/03/MohiniRaj-5-1.png",
        width: 1200,
        height: 630,
        alt: "Mohiniraj — Holistic Healer & Life Skills Mentor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohiniraj — Holistic Healer & Life Skills Mentor",
    description: "Break free from stress & heal deep emotional wounds with Ho'oponopono.",
    images: ["https://go.mohiniraj.in/wp-content/uploads/2025/03/MohiniRaj-5-1.png"],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy-900 text-sand-100 antialiased selection:bg-gold-500 selection:text-navy-950 flex flex-col min-h-screen">
        <ModalProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
