import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // Import Script from next
import Navbar from './../components/Navbar';
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
      <head>
        {/* ✅ Google Analytics Scripts */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0D7GJ1FJLE"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0D7GJ1FJLE');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        
      <iframe
        src="https://custom-gpt-backend-sigma.vercel.app/api/chatbot/685d970d0171245b663f571d/6839dd2c1930b4d886aad753?domain=https%3A%2F%2Fwww.alwaqaspaint.com"
        style={{
                    width: '400px',
                    height: '600px',
                    border: 'none',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000,
                  }}
                  allowTransparency="true"
                  title="Chatbot"
      ></iframe>
    
        <Footer />
      </body>
    </html>
  );
}
