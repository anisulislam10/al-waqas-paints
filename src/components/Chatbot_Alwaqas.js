'use client';
import { useEffect } from 'react';

export default function ChatbotLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://back.techrecto.com/api/chatbot/script.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      window.ChatbotConfig = {
        flowId: "6867b66630bf09c5634e9e5e",
        userId: "686547c645cf8b6b8a7d157d",
        websiteDomain: "https://www.alwaqaspaint.com",
        position: "bottom-right",
        theme: {
          primary: "#00A63E",
          secondary: "#00A63E",
          background: "#FFFFFF",
          text: "#1F2937",
          buttonText: "#00A63E"
        }
      };
      setTimeout(() => {
        if (window.initChatbot) {
          window.initChatbot();
        }
      }, 300);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}