import "@/styles/globals.css";

import { type Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

import { TRPCReactProvider } from "@/trpc/react";
import { cn } from "@/lib/utils";
import AppProvider from "@/providers/AppProvider";
import { Toaster } from "sonner";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export const metadata: Metadata = {
  title: "Ciptacode - ERP Development, Apps & Webs Developer",
  description:
    "Ciptacode — Digital agency in Indonesia specializing in ERP Development, Website Development, and Apps & Web Solutions for startups and enterprises.",
  keywords: [
    "Ciptacode",
    "ERP Development",
    "Website Development",
    "Apps Development",
    "Web Developer Indonesia",
    "Digital Agency",
  ],
  authors: [{ name: "Ciptacode Team", url: "https://ciptacode.id" }],
  creator: "Ciptacode Team",
  publisher: "Ciptacode",
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Ciptacode - ERP Development, Apps & Webs Developer",
    description:
      "Ciptacode — Digital agency in Indonesia specializing in ERP Development, Website Development, and Apps & Web Solutions for startups and enterprises.",
    url: "https://ciptacode.id",
    siteName: "Ciptacode",
    images: [
      {
        url: "https://ciptacode.id/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ciptacode Landing Page Banner",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciptacode - ERP Development, Apps & Webs Developer",
    description:
      "Ciptacode — Digital agency in Indonesia specializing in ERP Development, Website Development, and Apps & Web Solutions for startups and enterprises.",
    images: ["https://ciptacode.id/images/twitter-banner.jpg"],
    creator: "@ciptacode",
  },
};

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: "400",
});

const satoshi = localFont({
  src: [
    {
      path: "../styles/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../styles/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../styles/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../styles/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../styles/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en_ID"
      className={cn(satoshi.variable, bebasNeue.variable)}
      suppressHydrationWarning
    >
      <body className="bg-background min-h-screen font-sans antialiased">
        <ErrorBoundary>
          <TRPCReactProvider>
            <AppProvider>
              {children}
              <Toaster />
            </AppProvider>
          </TRPCReactProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
