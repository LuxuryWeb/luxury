import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Providers } from "./providers";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "Luxury Gold",
  description: "Capacitación en shopify, facebook, dropi y releasit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <Providers>
        <body className="max-w-[1200px] grid grid-cols-1 grid-rows-[auto,auto,1fr,auto] min-h-screen mx-auto px-4">
          <Header />
          <Breadcrumbs />
          <main className="pt-8">{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
