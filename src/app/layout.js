import { Geist, Geist_Mono } from "next/font/google";
import Navbar from './../components/Navbar'
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Al Waqas Paint",
  description: "Al Waqas Paint",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
        {children}

        <Footer/>
      </body>
    </html>
  );
}
