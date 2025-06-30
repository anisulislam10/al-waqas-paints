"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterRoyalMatt = () => {
  const product = {
    id: 1, 
    title: "Royal Matt Emulsion",
    image: "/master/2.webp", 
    description: "Royal Matt Emulsion is a high-quality water-based paint that provides you with a smooth, non-reflective finish for interior walls and ceilings. Its rich, matte appearance adds a touch of decency, creating a refined backdrop for any space. We recommend it as an Ideal choice for various surfaces like plaster, brickwork, and wallboards.Royal Matt Emulsion offers excellent coverage and durability, ensuring long-lasting beauty. With its low VOC and odorless formula, it's perfect for homes, offices, or commercial environments where air quality is essential.To check, the Royal Matt Emulsion paint price in Pakistan, you can either inquire online or call us for the most suitable products you need. Buy royal matt emulsion paint today and beautify your homes, offices, or industrial spaces. ",
   
    features: [
      "Rich matt finish",
      "Roller Application",
      "Rich Matt Finish",
      "Exceptional Coverage",
      "Close to Zero VOC",
      "Long Lasting Film",
      "Environment Friendly",
    ],
    downloads: {
      ds: "/pdf/master/Royal Matt Emulsion_compressed.pdf", 
      sc: "/pdf/master/Royal-Matt-Emulsion_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterRoyalMatt;