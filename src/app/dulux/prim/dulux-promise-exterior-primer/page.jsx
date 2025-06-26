"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxPromiseExteriorPrimer = () => {
  const product = {
    id: 21, // Next in sequence
    title: "Dulux Promise Exterior Primer",
    image: "/dulux/primer/7.jfif", // Updated path to primer
    description: "Dulux Promise Exterior Primer is a high quality, water-based primer for exterior surfaces. Its Alkali-Resistant formulation increases topcoat durability. Easy to apply, Promise Exterior Primer ensures superior adhesion of the paint film.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L/coat",
      dryingTime: "2-3 Hours",
      coats: "1"
    },
    features: [
      "Alkali Resistant",
      "Excellent Adhesion",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply one coat of Dulux Promise Exterior Primer and allow to dry for 2-3 hours.", // Assumed based on similar products
    downloads: {
      sds: null, 
      tds: null, 
      warranty: null
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseExteriorPrimer;