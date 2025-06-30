"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Matt Enamel Finish",
    image: "/master/13.webp", 
    description: "Master Matt Enamel Finish is a high-quality synthetic enamel that has no comparison because of its long-lasting matte finish and durability. You can improve your interior and exterior projects with Master Paints' Matt Enamel Finish. This premium paint offers a strong matte appearance that adds elegance to any surface while providing exceptional durability. If you're looking to buy Matt Enamel Finish paint, Master Paints delivers a top-quality solution that resists stains and is easy to clean. With its smooth application and beautiful finish, it’s the best Matt Enamel Finish paint in Pakistan. Ready to transform your spaces? Buy Master Matt Enamel Finish paint today and enjoy a flawless, modern look that stands the test of time, enhancing the beauty of your home.",
   
    features: [
      "Long Lasting Finish",
      "Easy to clean",
      "Elegant Aesthetics",
      "Instant Drying",
      "Smooth Application",

    ],
    downloads: {
      ds: "/pdf/master/Matt Enamel-_compressed.pdf", 
      sc: "/pdf/master/Matt Enamel - _compressed.pdf", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;