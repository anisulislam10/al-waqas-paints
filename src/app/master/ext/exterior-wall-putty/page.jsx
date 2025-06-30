"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Exterior Wall Putty",
    image: "/master/12.webp", 
    description: "Master Paints Exterior Wall Putties are the best medium for filling up the cracks, leveling uneven surfaces, and covering any surface flaws. You can achieve a smooth and flawless finish with Master Paints' Exterior Wall Putty. Designed to prepare your walls for painting, this high-quality putty fills cracks and imperfections, providing a perfect surface for your exterior paint. If you're looking to buy Exterior Wall Putty paint, Master Paints offers a superior product at a competitive price. Our waterproof formula ensures long-lasting durability, protecting your walls from moisture and weather damage. Buy Master Exterior Wall Putty paint today and enjoy a professional-grade finish that stands the test of time. Get the best exterior wall putty price in Pakistan and protect your home’s exterior.",
   
    features: [
      "Improved Paint Adhesion",
      "Waterproof Protection",
      "Highest Durability",
      "Easy to Apply",
      "Weather Resistant",

    ],
    downloads: {
      ds: "/pdf/master/Master Exterior Wall Putty TDS 2020_compressed.pdf", 
      sc: "", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;