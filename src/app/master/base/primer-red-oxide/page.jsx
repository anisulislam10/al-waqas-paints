"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Primer Red Oxide",
    image: "/master/20.webp", 
    description: "Master Red Oxide Primer is a high-quality metal primer designed to protect iron and steel surfaces from rust and corrosion. For ideal use, you can apply it on gates, railings, and outdoor equipment. This is the best Red Oxide primer and creates a strong, protective layer that ensures long-lasting durability. Whether you’re looking to protect new or pre-treated metal surfaces, this primer works well in both interior and exterior environments. Buy primer red oxide paint online at a reasonable price and increase the life span of your metal projects. We provide the best primer red oxide paint in Pakistan at a competitive price that doesn't fade quickly.  ",
   
    features: [
      "Great rust protection",
      "Effective on new and rusty metal",
      "Strong adhesion",
      "Resists wear in industrial settings",
      "Durable and long-lasting",
    ],
    downloads: {
        ds: "/pdf/master/Master Primer Red oxide_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;