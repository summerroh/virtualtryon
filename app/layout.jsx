"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { DM_Sans as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <link href="/scss/tailwind.css" rel="stylesheet" />
        <title>Virtual Try On</title>
        <meta
          name="Virtual Try On"
          content="Create professional model shots instantly."
        />
      </head>
      <body>
        {/* <div className="main-page-wrapper"> */}
        <div
          className={cn(
            "main-page-wrapper min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
