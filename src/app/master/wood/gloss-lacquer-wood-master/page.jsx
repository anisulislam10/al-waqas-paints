"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Gloss Lacquer Wood Master",
    image: "/master/25.webp", 
    description: "Gloss Lacquer Wood Master is a proud product from Master Paints, designed to give a glossy finish to your woodwork. This glossy lacquer gives a stand-out shine with a durable, protective layer, making it perfect for frequently used wooden objects like doors, cabinets, and furniture. Its quick-drying formula gives a smooth, mirror-like finish that enhances the natural beauty of your wood.Looking for the best gloss lacquer wood master paint for your project? Master Paints brings you a product that has gained the trust of professionals and DIYers over the years. With a reputation for durability and perfect performance, it is chosen as the top-rated gloss lacquer wood master paint.For busy people or contractors, you don’t need to visit the store as you can buy gloss lacquer wood master paint online. We offer nationwide delivery, so you can easily buy gloss lacquer wood master paint online in Pakistan and give your wood the perfect gloss it needs.",
   
    features: [
      "Glossy, mirror-like finish",
      "Durable protection for frequently used wooden surfaces",
      "Quick-drying formula for fast application",
      "Trusted by professionals and DIYers for reliability",
      "Available for easy online purchase with nationwide delivery",
    ],
 downloads: {
      ds: "/pdf/master/Gloss Lacquer Wood Master_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;