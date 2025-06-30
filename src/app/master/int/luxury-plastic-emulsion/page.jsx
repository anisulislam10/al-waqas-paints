"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Luxury Plastic Emulsion",
    image: "/master/3.webp", 
    description: "Master Luxury Plastic Emulsion, is the best plastic emulsion paint in Pakistan for interior walls and ceilings helping you get a resin-based look for waterproof coverage. This top-rated luxury plastic emulsion paint offers a smooth, luxurious finish that amplifies the aesthetics of any room, making it perfect for both homes and offices. Its formula offers superior coverage and durability, providing long-lasting protection while maintaining its rich, vibrant color over time. The Master Luxury Plastic Emulsion is a perfect choice for its low-odor and low-VOC formulation, making it an eco-friendly choice for those who need healthy air quality without any bad smell. The paint is capable to refresh your living spaces or give your workspace a modern touch. Want to buy the best plastic emulsion paint in Pakistan? Choose the top-rated luxury plastic emulsion paint from Master Paints. It combines premium quality with lasting performance, ensuring your walls look perfect for years to come. Experience the difference with Master Luxury Plastic Emulsion—your ultimate choice for interior paints. ",
   
    features: [
      "Anti Fungal",
      "Envoinmetally safe",
      "High Scratch Resistance",
      "Improved Flow And Levelling",
      "Durable",
      "Smooth luxurious finish",
    ],
    downloads: {
      ds: "/pdf/master/Plastic Emulsion_compressed.pdf", 
      sc: "/pdf/master/Luxury-Plastic_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;