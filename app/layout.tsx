import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Droplets } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santa Cruz Water District",
  description: "Clean and reliable water services in Santa Cruz, Laguna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GLOBAL HEADER */}
        <header className="absolute top-0 left-0 w-full z-30 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Droplets size={40} className="text-blue-200" />
                <div>
                  <h1 className="text-2xl font-bold">
                    Santa Cruz Water District
                  </h1>
                  <p className="text-sm text-blue-100">
                    Serving the Community Since 1995
                  </p>
                </div>
              </div>
              <nav className="hidden md:flex gap-6 font-medium">
                <a href="#services" className="hover:text-blue-200 transition">
                  Services
                </a>
                <a href="#about" className="hover:text-blue-200 transition">
                  About
                </a>
                <a href="#contact" className="hover:text-blue-200 transition">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Droplets size={24} className="text-blue-400" />
              <p className="text-lg font-semibold">
                Santa Cruz Water District
              </p>
            </div>
            <p className="text-gray-400">
              © 2026 Santa Cruz Water District. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
  