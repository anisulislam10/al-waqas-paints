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
        flowId: '68658df2c4ca6e6adb909142',
        userId: '686588ceadec9f2263e6f753',
        websiteDomain: 'https://www.alwaqaspaint.com',
        position: 'bottom-right',
        theme: {
          primary: '#6366f1',
          secondary: '#f59e0b',
          background: '#ffffff',
          text: '#1f2937'
        }
      };
 
      // Wait a bit to make sure DOM is ready
      setTimeout(() => {
        if (window.initChatbot) {
          console.log('[ChatbotLoader] Calling initChatbot');
          window.initChatbot();
        } else {
          console.error('initChatbot is not available');
        }
      }, 300); // try increasing to 500 if needed
    };
 
    script.onerror = () => {
      console.error('Failed to load chatbot script');
    };
 
    document.body.appendChild(script);
  }, []);
 
  return null;
}