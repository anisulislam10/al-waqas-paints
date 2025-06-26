"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldFlexibleWaterproofBasecoat = () => {
  const product = {
    id: 12, // Same as previous since it's the same product
    title: "Dulux Aquashield Flexible Waterproof Basecoat",
    image: "/dulux/exterior/12.avif", // Assumed path based on template
    description: "Aquashield Flexible Waterproof Basecoat is a high quality premium basecoat that provides waterproof protection to exterior walls. Its revolutionary Hydroshield technology bridges cracks and covers the wall surface with a flexible film, preventing water seepage. It also protects the surface against alkali, algae, and fungus attacks.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/litre",
      dryingTime: "4-6 Hours",
      coats: "3"
    },
    features: [
      "Hydroshield Technology",
      "Water Repellant",
      "Algae and Fungus Resistant",
      "Alkali Guard",
      "Extended Durability",
      "Crack Bridging"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Aquashield Flexible Waterproof Basecoat with 4-6 hours interval between coats.",
    downloads: {
      sds: null, // Not provided in the content
      tds: null, // Not provided in the content
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldFlexibleWaterproofBasecoat;