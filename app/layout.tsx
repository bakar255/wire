import "./globals.css";
import Header from "./components/header";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
