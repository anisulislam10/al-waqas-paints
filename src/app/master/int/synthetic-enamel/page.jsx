"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterRoyalPearl = () => {
  const product = {
    id: 1, 
    title: "Synthetic Enamel",
    image: "/master/6.webp", 
    description: "Master Synthetic Enamel is a top-of-the-line paint for glossy and shiny surfaces. it gives a strong and shiny finish to all the dull, boring surfaces to bring them to new life! Synthetic Enamel is the best synthetic enamel paint that provides you with a tough, long-lasting coat that resists chipping, fading, and peeling. You can use it for a variety of surfaces such as wood, metal, and masonry, for a smooth and beautiful look for all your personal and professional projects.One of the greatest benefits of using synthetic enamel is its durability with gloss and shine. You can use it for the most in-use areas, like doors and furniture, ensuring your surfaces stay looking great over time. Plus, it dries quickly, allowing you to finish your painting faster without waiting around. It is based on a low VOC formula, and it’s also a safer option for your home, making it better for you and the environment. You can easily buy synthetic enamel paint online. Simply Buy Master Synthetic Enamel Paint Online today and enjoy a professional finish that will last for years to come!",
   
    features: [
      "Smooth Flow",
      "Improved Coverage",
      "Stain Resistant",
      "Glossy Finish",
      "Non Yellow",

    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel_compressed.pdf", 
      sc: "/pdf/master/Synthetic-Enamel_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterRoyalPearl;