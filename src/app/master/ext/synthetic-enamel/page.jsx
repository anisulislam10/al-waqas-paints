"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Enamel",
    image: "/master/14.webp", 
    description: "Master Paints' Synthetic Enamel is a perfect top coat choice that provides you a durable and glossy finish for both interior and exterior surfaces. This high-performance paint is a great option for those who need  the best Synthetic Enamel paint in Pakistan within affordable prices. If you want to enhance your projects with a tough, glossy, oil based paints for a long-lasting coat, use Synthetic Enamel! You can conveniently buy Synthetic Enamel paint online, making it easy to access premium quality glossy finish. Master Synthetic Enamel paint is also competitively priced, ensuring you get top-rated performance without breaking the bank. Ready to beautify your spaces? Buy online Master Synthetic Enamel paint today and enjoy lasting beauty and protection",
   
    features: [
      "Glossy finish",
      "Durable ",
      "Easy to Apply",
      "Instant Dry",
      "Weather resistant",
    
    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel1_compressed.pdf", 
      sc: "/pdf/master/Synthetic-Enamel1_compressed.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;