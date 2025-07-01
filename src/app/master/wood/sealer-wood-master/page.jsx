"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Sealer Wood Master",
    image: "/master/27.webp", 
    description: "Want to increase the durability of your wood surfaces and make it moisture-free?  Get Sealer Wood Master from Master Paints right now. This high-performance sealer penetrates deeply into the wood, providing a protective barrier that resists moisture, stains, and daily wear. Sealer Wood is perfect for furniture, doors, and other woodwork, increasing the wood’s natural beauty while giving a smooth, flawless finish. Whether you’re preparing for a topcoat or simply sealing the wood for extra protection, Sealer Wood Master is a must-have for long-lasting results. Buy Sealer Wood Master online today for trusted protection and professional-grade quality. You can buy the Sealer wood master online, or visit the store to get more details.  ",
   
    features: [
      "Deep-penetrating formula",
      "Strong resistance",
      "Smooth, flawless finish",
      "Ideal for preparing surfaces for topcoats",
      "Long-lasting protection",
    ],
    downloads: {
      ds: "/pdf/master/Master Wood Sealer_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;