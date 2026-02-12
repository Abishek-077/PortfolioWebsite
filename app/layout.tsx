import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ContactModalProvider } from "@/components/providers/ContactModalProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { profile } from "@/data/profile";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description:
    "Portfolio of Abishek Ghimire, a full stack developer focused on backend systems, AI API integrations, and production-ready web applications.",
  authors: [{ name: profile.name, url: profile.website }],
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "AI API Integration",
    "Node.js Developer",
    "Next.js Portfolio",
    "TypeScript",
    "PostgreSQL",
    "System Design",
    "Cloud Infrastructure",
    "API Architecture",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${profile.name} | Full Stack Developer`,
    description:
      "Backend-first full stack portfolio featuring AI API integrations, scalable services, and modern product engineering.",
    url: profile.website,
    siteName: `${profile.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | Full Stack Developer`,
    description:
      "Portfolio focused on backend architecture, AI API workflows, and end-to-end full stack product development.",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ContactModalProvider>
            <Navbar />
            {children}
            <Footer />
            <ContactModal />
            <Toaster />
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
