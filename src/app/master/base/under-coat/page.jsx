"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Under Coat",
    image: "/master/18.webp", 
    description: "Start all of your painting projects with our top-rated base preparation paints. These high-quality paints give your surfaces the perfect foundation for a long-lasting and flawless topcoat. By improving stickiness, they create a strong foundation for your topcoat. Buy the best base preparation paints in Pakistan and never see porous areas or imperfections like cracks or bumps! Lay down a smooth foundation for the interior and exterior areas.Our best base preparation paints online are perfect for walls, furniture, and more. With superior durability and quick-drying properties, you can apply topcoat and end projects quickly. Buy Master Paint’s base preparation paints to prep your painting area!  ",
   
    features: [
      "Helps the topcoat stick better ",
      "Long-lasting",
      "Smoother finishing",
      "Dries quickly",
      "Versatile for wood, drywall, and metal",
    ],
    downloads: {
      ds: "", 
      sc: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;