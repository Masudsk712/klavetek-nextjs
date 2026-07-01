import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { metadata } from "@/config/metadata";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/layout/Navbar";

export { metadata };

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}