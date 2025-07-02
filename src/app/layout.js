import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "./../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Link from "next/link";

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
    icon: "/favicon.ico",
  },
};

// WhatsApp SVG Icon Component
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="#fff"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.719-.911-.99-.241-.272-.482-.247-.669-.247-.188 0-.422.074-.645.223-.222.149-1.594.896-1.594 2.087 0 1.19.892 2.332 1.015 2.48.123.148 1.732 2.669 4.2 3.74.594.257 1.058.413 1.419.465.346.049.614.049.805-.074.193-.124.793-.719.911-.842.119-.124.223-.074.347.05.123.124.793.892.892 1.189.099.297.05.645-.124.794-.173.149-.992.645-1.742.645z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.253.623 4.362 1.708 6.171L0 24l5.829-1.708C7.638 23.377 9.747 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.11 0-4.11-.658-5.805-1.902l-.411-.258-3.462 1.015 1.015-3.462-.258-.411C1.658 16.11 1 14.11 1 12c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11z" />
  </svg>
);

export default function RootLayout({ children }) {
  const whatsappNumber = "+923335093223";
  const whatsappMessage = "Hello, I have a query about Al Waqas Paint!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
    
        {/* WhatsApp Icon */}
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              left: "20px", 
              zIndex: 1000,
              backgroundColor: "#25D366", 
              borderRadius: "50%",
              padding: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <WhatsAppIcon />
          </div>
        </Link>

        {children}
   <iframe
      src="https://back.techrecto.com/api/chatbot/68658df2c4ca6e6adb909142/686588ceadec9f2263e6f753?domain=https%3A%2F%2Falwaqaspaint.com"
      style={{
        width: "400px",
        height: "600px",
        border: "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
      }}
      title="Al Waqas Paint Chatbot"
    />
 
        <Footer />
      </body>
    </html>
  );
}