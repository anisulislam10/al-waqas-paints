"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Matt Lacquer Wood Master",
    image: "/master/26.webp", 
    description: "Matt Lacquer Wood Master from Master Paints offers a hard and scratch-proof surface, with a smooth and transparent matt finish. The formula is nitrocellulose-based lacquer which gives a smooth, non-reflective matte finish while improving the natural texture of your wood and delivering excellent protection. You can use it for furniture, doors, and interior woodwork, to give your wood a modern, and subtle appearance.Get the top-rated Matt Lacquer Wood Master paint either online, or visit the store for a scratch-resistant and long-lasting finish that resists wear and tear. Whether you're upgrading home decor or completing a professional project, Matt Lacquer Wood Master paint is the ideal choice for a flawless finish. Get in touch to know matt lacquer wood master paint prices in Pakistan. ",
   
    features: [
      "Smooth, non-reflective matte finish",
      "Scratch-proof and durable protection",
      "Enhances natural wood texture",
      "Suitable for furniture, doors, and interior woodwork",
      "Available for online or in-store purchase",
    ],
    downloads: {
      ds: "/pdf/master/Wood Master Matt_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;