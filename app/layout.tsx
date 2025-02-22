import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: "Cek Khodam",
  description: "Cek khodam yang ada pada tubuh seseorang melalui nama.",
  keywords: [
    "cek khodam",
    "khodam",
    "cek khodam ai",
    "cek khodam online",
    "website cek khodam",
    "cek khodam nama",
    "cek khodam tubuh",
    "cek khodam orang",
    "cek khodam orang lain",
    "cek khodam seseorang",
    "cek khodam orang lain online",
    "cek khodam orang lain gratis",
    "check khodam",
    "khodam check",
    "khodam check online",
    "check khodam online",
    "check khodam nama",
  ],
  authors: [
    {
      name: "Honjoo",
      url: "https://honjoo.my.id",
    },
  ],
  creator: "Coding with Afrizal",
  openGraph: {
    title: "Cek Khodam",
    description: "Cek khodam yang ada pada tubuh seseorang melalui nama.",
    url: `${process.env.HOST_APP_URL}`,
    siteName: "Cek Khodam",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Cek Khodam",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "Cek Khodam Online",
    title: "Cek Khodam Online",
    description: "Cek khodam yang ada pada tubuh seseorang melalui nama.",
    creator: "@",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        alt: "Cek Khodam Online",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-full flex items-center justify-center">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center flex-col py-3 gap-3">
              <ThemeSwitch />
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={siteConfig.links.github}
                title="GitHub"
              >
                <span className="text-default-600">Build With ❤️</span>
                <p className="text-primary">Honjoo</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
