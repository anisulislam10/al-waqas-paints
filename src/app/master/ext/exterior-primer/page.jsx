"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Exterior Primer",
    image: "/master/11.webp", 
    description: "Exterior primer is a wonderful; coating that prepares your masonry surfaces for better adhesion. Prepare your surfaces with Master Paints' Exterior Primer, the ideal foundation for a flawless finish. This top-rated primer paint in Pakistan provides better adhesion of your exterior paint, enhancing durability and longevity. If you're searching for the best wall primer price in Pakistan, Master Paints exclusively presents  exceptional value. With our Exterior Primer, you can have perfect , smooth and even topcoat. Master Paints offers a competitive price of this exterior primer, essential for achieving professional-quality results. Get your Exterior Primer Paint today and start your project with the best foundation possible.",
   
    features: [
      "Weather protection",
      "Helps levelling up the masonry surfaces",
      "Crack resistant",
      "Mildew and Mold Resistant",
      "Durable",
    ],
    downloads: {
      ds: "/pdf/master/Master Wall Primer ( water based )_compressed.pdf", 
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;