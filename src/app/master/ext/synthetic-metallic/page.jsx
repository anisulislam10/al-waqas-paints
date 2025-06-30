"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Metallic",
    image: "/master/15.webp", 
    description: "Master Paints' Synthetic Metallic, is the best synthetic metallic paint offering you a shiny, glossy rich lustrous texture.  This high-quality paint features a unique formula that provides a stunning metallic finish, perfect for adding a touch of luxury to any surface. As a top-rated synthetic metallic paint, it offers exceptional coverage and durability, ensuring your walls shine with a radiant glow. If you're looking to buy Master Synthetic Metallic paint, you can easily make a purchase online in Pakistan. Synthetic metallic paint prices in Pakistan are quite reasonable, helping you achieve a glamorous look for your interiors and exteriors has never been easier. Buy online today and beautify your spaces with a luxury look. ",
   
    features: [
      "Durable Formula",
      "Metallic Finish ",
      "Glossy Texture",
      "Instant Drying",
      "Easy to Maintain",
      "Versatile Application",

    
    ],
    downloads: {
      ds: "", 
      sc: "/pdf/master/Synthetic Metallic (1).pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;