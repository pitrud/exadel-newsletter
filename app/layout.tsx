import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newsletter platform",
  description: "Newsletter platform by Exadel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gray-light dark:bg-gray-dark ${dm_sans.className}`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
