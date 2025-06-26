"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldInteriorBasecoat = () => {
  const product = {
    id: 3, // Next in sequence
    title: "Dulux Aquashield Interior Waterproof Basecoat",
    image: "/water-pro/3.avif",
    description: "Dulux Aquashield Interior Waterproof Basecoat is a high quality premium basecoat that provides waterproof protection to interior walls. Its revolutionary DampProtect Technology guards interior walls against dampness, enhances top coat life and prevents alkali salt deposits.",
    keyInformation: {
      finish: "Matt",
      coverage: "7-9 m²/L",
      dryingTime: "3-4 hours",
      coats: "1",
      
    },
    features: [
      "Alkali Guard",
      "Crack Bridging",
      "Enhances Topcoat Opacity",
      "DampProtect Technology"
    ],
    applicationDescription: "Apply 1 coat of Dulux Aquashield Interior Waterproof Basecoat with 3-4 hours drying time.",
    downloads: {
      sds: "/pdf/interior_basecoat (1).pdf", // Not provided in content
      tds: "/pdf/tds_dulux_aquashield_interior_waterproof_basecoat.pdf",
      warranty: null // Not provided in content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldInteriorBasecoat;