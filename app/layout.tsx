import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "katex/dist/katex.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// Rounded, friendly display font for headings + UI (Brilliant-style feel).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Wisest Maths | A-Level Maths Revision",
  description:
    "A-Level Maths and Further Maths revision. Video lessons, question bank, and AI-powered assessment.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="theme-dark">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://tikzjax.com/v1/fonts.css"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} ${inter.className} bg-background`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
