import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Eric Huang | Personal",
  authors: [
    { name: "Eric Huang", url: "https://github.com/erich2s" },
    { name: "黄士崧", url: "https://github.com/erich2s" },
  ],
  description: "Eric Huang's personal porfolio website, 黄士崧的个人网站",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
