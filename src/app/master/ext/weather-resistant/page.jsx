"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Weather Resistant",
    image: "/master/9.webp", 
    description: "If you need an ultimate protection of your homes or commercial buildings, get Master Paints Wether Resistant today. You can protect your home with Master Paints' Weather Resistant paint, specially formulated to withstand harsh environmental conditions. This high-quality paint offers the highest durability, making it the best choice for maintaining your home’s exterior. Looking to buy Master Weather Resistant paint, get your favorite products online.  The weather resistant long-lasting protection against rain, sun, and extreme temperatures. With its advanced formula, this is the best exterior weather resistant paint available in Pakistan, ensuring your surfaces remain perfectly pigmented and intact for years. Don’t compromise on quality—buy weather resistant paint in Pakistan today and experience peace of mind with every stroke! Keep your home safe and beautiful regardless of the weather.",
   
    features: [
      "UV protection",
      "Weather Resistance",
      "Temperature Control",
      "Easy Maintenance",
      "Vibrant finish",
      "Robust texture",
      "Versatile Application"
    ],
    downloads: {
      ds: "/pdf/master/Master Weather Resistant_compressed.pdf", 
      sc: "/pdf/master/Weather-Resistant_compressed.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;