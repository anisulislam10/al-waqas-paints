"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Exterior Primer",
    image: "/master/21.webp", 
    description: "When you're changing the color of your exterior walls, using an exterior primer can make a durability difference. Master Exterior Primer Paint is a reliable solution for preparing exterior walls before painting. It ensures that the paint sticks properly to various surfaces like brick, plaster, and cement. Our water-based acrylic exterior primer seals and protects against damage from alkali and salts outdoors. It prevents moisture from damaging your walls. If you're looking to buy Master exterior primer paint online, this product is among the best exterior primer paints to consider for a perfect finish and long-term protection. The high-quality exterior primer paint price in Pakistan can be too much, so we offer affordable rates.  ",
   
    features: [
      "Improves paint adhesion",
      "Protects against moisture",
      "Prevents fungus and algae",
      "Seals and prep surfaces",
      "Extends topcoat life",
    ],
    downloads: {
        ds: "/pdf/master/Master Wall Primer ( water based )-_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;