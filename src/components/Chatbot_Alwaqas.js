'use client';
 
import Script from 'next/script';
import { useEffect, useRef } from 'react';
 
const Chatbot_Alwaqas = () => {
  const initAttempts = useRef(0);
  const maxAttempts = 5;
 
  useEffect(() => {
    // Set ChatbotConfig immediately
    window.ChatbotConfig = {
      flowId: "68658df2c4ca6e6adb909142",
      userId: "686588ceadec9f2263e6f753",
      websiteDomain: "https://www.alwaqaspaint.com",
      position: "bottom-right",
      theme: {
        primary: "#6366f1",
        secondary: "#f59e0b",
        background: "#ffffff",
        text: "#1f2937",
      },
    };
    console.log('[Chatbot] ChatbotConfig set:', window.ChatbotConfig);
 
    const handleLoad = () => {
      console.log('[Chatbot] Script.js loaded');
      if (window.initChatbot) {
        console.log('[Chatbot] Calling window.initChatbot');
        window.initChatbot();
        // Verify DOM elements after initialization
        setTimeout(() => {
          const container = document.getElementById('chatbot-container');
          const toggle = document.getElementById('chatbot-toggle');
          const wrapper = document.getElementById('chatbot-wrapper');
          console.log('[Chatbot] Post-init check:', {
            containerExists: !!container,
            toggleExists: !!toggle,
            wrapperExists: !!wrapper,
            toggleStyles: toggle ? window.getComputedStyle(toggle) : null,
            wrapperStyles: wrapper ? window.getComputedStyle(wrapper) : null,
            bodyChildren: Array.from(document.body.children).map(el => el.id || el.tagName),
          });
        }, 1500);
      } else if (initAttempts.current < maxAttempts) {
        console.warn('[Chatbot] window.initChatbot not found, retrying... Attempt:', initAttempts.current + 1);
        initAttempts.current += 1;
        setTimeout(handleLoad, 1000);
      } else {
        console.error('[Chatbot] Failed to load initChatbot after', maxAttempts, 'retries');
      }
    };
 
    // Check if script is already loaded
    const script = document.querySelector('script[src="https://back.techrecto.com/api/chatbot/script.js"]');
    if (script && window.initChatbot) {
      handleLoad();
    } else if (script) {
      script.addEventListener('load', handleLoad);
    }
 
    return () => {
      if (script) {
        script.removeEventListener('load', handleLoad);
      }
    };
  }, []);
 
  return (
    <Script
      src="https://back.techrecto.com/api/chatbot/script.js"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
};
 
export default Chatbot_Alwaqas;
