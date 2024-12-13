import { Poppins } from "next/font/google";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

import "./globals.css";

const poppins = Poppins({
  weight: ["200", "400", "500", "600"],
  display: "swap",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
