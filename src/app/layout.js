import { Inter } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dave's Portfolio",
  description: "Welcome To Dave's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/davesmile.png" />
      </head>
      <body className={inter.className}><AOSProvider>{children}</AOSProvider></body>
    </html>
  );
}
