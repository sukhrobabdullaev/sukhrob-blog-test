import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import NextTransitionBar from "next-transition-bar";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukhrob's blog",
  description: "A software engineer, computer science enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTransitionBar
            color="#03fcdf"
            height={2}
            speed={200}
            easing="ease"
            shadow="0 0 10px #29d, 0 0 5px #29d"
            showSpinner={false}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GoogleAnalytics gaId="G-WYH1S1FFC5" />
        </ThemeProvider>
      </body>
    </html>
  );
}
