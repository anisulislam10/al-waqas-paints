"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Master Texture Finish",
    image: "/master/5.webp", 
    description: "Introducing Master Texture Finish, the perfect choice for adding depth and style to your walls with a soft and velvet texture. This premium sensory paint creates a unique, textured look that instantly enhances any room. Whether you want to create a soft accent wall or add a subtle pattern to your living space, Master Texture Finish delivers flawless results with a soft velvet texture for a royal touch.Designed for durability, this texture paint is resistant to wear and tear, making it perfect for high-traffic areas like hallways, living rooms, and offices. Its easy application ensures smooth, professional-looking results that last.You can buy Master Texture Finish paint online and give your walls the artistic flair they deserve. Looking for quality and convenience? Buy Master Texture Paint online today and texturize your space with style and elegance!",
   
    features: [
      "Durable",
      "Smooth Finish",
      "Best For Masonary Surface ",
      "Envoinmental Friendly",
    ],
    downloads: {
      ds: "/pdf/master/MASTER TEXTURE FINISH_compressed.pdf", 
      sc: "/pdf/master/Texture-Finish_compressed_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;