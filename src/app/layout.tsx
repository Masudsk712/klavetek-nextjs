import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import { metadata } from "@/config/metadata";
import { ThemeProvider, ThemeFlashPrevention } from "@/providers/theme-provider";
import PremiumNavbar from "@/components/layout/PremiumNavbar";

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
        className={`${inter.variable} ${poppins.variable} antialiased theme-transition bg-background text-text-primary`}
      >
        <ThemeProvider>
          <ThemeFlashPrevention />
          <PremiumNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
