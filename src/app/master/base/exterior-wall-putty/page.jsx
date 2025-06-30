"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Exterior Wall Putty",
    image: "/master/22.webp", 
    description: "To make your wall paint stay intact for a few more years, try Master Exterior Wall Putty. It is a high-performance, 100% acrylic-based filler designed for all types of masonry surfaces. It helps fill cracks, pores, and other imperfections easily. No need to prepare it, open and apply it for smooth results. Buy the best exterior wall putty in Pakistan that has a waterproof formula that protects walls from moisture and damage. Use top-rated exterior wall putty paint on plaster, concrete, and wooden surfaces. Regardless of the surface, this putty offers excellent filling properties and fast drying times. The exterior wall putty paint price in Pakistan is affordable, get in touch with us for the best value. ",
   
    features: [
      "Offers full coverage",
      "Best prep for paint application",
      "For indoor and outdoor use",
      "Water-resistant",
      "Quick-drying",
    ],
    downloads: {
        ds: "", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;