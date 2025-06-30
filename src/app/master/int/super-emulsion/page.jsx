"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterRoyalPearl = () => {
  const product = {
    id: 1, 
    title: "Super Emulsion (Distemper)",
    image: "/master/4.webp", 
    description: "Master Super Emulsion (Distemper), is the ideal solution for achieving pigmented and smooth walls with its fine texture! This top-rated super emulsion paint features a subtle, plain finish making it perfect for any room in your home or school. Its water-based formula ensures quick drying and low odor, offering a safer and more convenient distemper for interior spaces.Master Super Emulsion provides excellent coverage, allowing you to easily smoothen your walls with fewer coats. This super emulsion is durable and long-lasting, ensuring that the color remains bright and fresh over time for your interior. Plus, it’s easy to clean, keeping your walls looking great with minimal effort.Ready to upgrade your space with easy, affordable, and economical distemper paints? You can buy super emulsion paint online with ease and have it delivered right to your doorstep. Looking for quality and reliability? Buy Master Super Emulsion paint today and enjoy a long-lasting, beautiful finish that breathes life into your environment!",
   
    features: [
      "Lead Free",
      "Eco Friendly",
      "Smooth Finish",
      "Super Wash ability",
      "Extra Coverage",

    ],
    downloads: {
      ds: "/pdf/master/Super Emulsion_compressed.pdf", 
      sc: "/pdf/master/Super-Emulsion (1)_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterRoyalPearl;