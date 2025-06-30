"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Aluminium Silver",
    image: "/master/16.webp", 
    description: "Introducing Master Paints' Aluminium Silver, a premium paint designed to deliver a sleek and modern finish with glossy look. Aluminum Silver is perfect for both interior and exterior applications, this high-quality paint provides a striking metallic sheen that enhances the look of any surface. You can buy Master Aluminium Silver paint online, offering you exceptional durability and coverage. With competitive aluminum silver paint prices in Pakistan, achieving a stunning finish is easy, quick and perfect. Don't miss out—buy Master Aluminium paint online in Pakistan today and give a metallic glossy touch to your surroundings. ",
   
    features: [
      "Sleek Metallic Finish",
      "Protection",
      "Durability",
      "Inexpensive",
      "Easy Application",
    ],
    downloads: {
      ds: "/pdf/master/mixing Silver_compressed.pdf", 
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;