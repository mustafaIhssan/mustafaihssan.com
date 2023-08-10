import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/footer";

const font = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustafa Ihssan",
  description: "Doing Stuff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className={font.className}>
        <Header />
        <main className="flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
