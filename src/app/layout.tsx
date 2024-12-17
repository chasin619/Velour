import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        <main className="mt-20">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
