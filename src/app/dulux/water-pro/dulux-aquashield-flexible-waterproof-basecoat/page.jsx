"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldFlexibleBasecoat = () => {
  const product = {
    id: 2,
    title: "Dulux Aquashield Flexible Waterproof Basecoat",
    image: "/water-pro/2.avif",
    description: "Dulux Aquashield Flexible Waterproof Basecoat provides ultimate water defense with advanced Hydroshield Technology. This flexible coating forms a protective barrier that resists water penetration while allowing surface movement.",
    
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m² per litre",
      dryingTime: "4-6 hours between coats",
      coats: "3 coats recommended",
    },
    
    features: [
      "Hydroshield Technology",
      "Water Repellant",
      "Algae and Fungus Resistant",
      "Alkali Guard",
      "Extended Durability",
      "Crack Bridging"
    ],
    
    applicationDescription: "Apply 2-3 coats of Dulux Aquashield Flexible Waterproof Basecoat with 4-6 hours interval between coats",
    
    downloads: {
      tds: "",
      datasheet: "",
      guide: ""
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldFlexibleBasecoat;