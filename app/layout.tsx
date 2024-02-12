import { Nunito } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/registerModal";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
