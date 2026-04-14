import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "katex/dist/katex.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MathsApp | A-Level Maths Revision",
  description:
    "A-Level Maths and Further Maths revision for the OCR B (MEI) specification. Video lessons, question bank, and AI-powered assessment.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://tikzjax.com/v1/fonts.css"
        />
      </head>
      <body className={`${inter.className} bg-primary`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
