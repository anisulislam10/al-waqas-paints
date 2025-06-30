"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Roof Master",
    image: "/master/24.webp", 
    description: "Roof Master Paint is a durable solution designed to coat roofs and masonry surfaces. Our best roof coating paint offers impressive protection against harsh weather. This high-build, water-based paint ensures your roof is safe from wind, rain, and extreme temperatures. Buy roof master paint online in Pakistan for long-lasting results. With proper application, it can create a waterproof layer that helps keep the inside cooler in the summer and warmer during winter. The roof master paint provides a smooth matte finish for different surfaces like concrete, plaster, and wooden roof tiles. If you're looking for a reliable option to protect your roof, check out the roof master paint price in Pakistan.  ",
   
    features: [
      "Weather-resistant",
      "Lowers indoor heat",
      "Multi-surface use",
      "Long-lasting waterproof",
      "Fast drying with low VOCs",
    ],
    downloads: {
        ds: "/pdf/master/Roof Master1_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;