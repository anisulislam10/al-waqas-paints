"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10, // Next in sequence
    title: "Paintex Ultraprime",
    image: "/dulux/exterior/16.avif", // Assumed path based on template
    description: "Paintex Ultraprime is a high quality solvent based sealer for masonry surfaces. It is ideal for use on all interior/exterior surfaces. It reduces damage from alkali and salts and seals powdery, porous surfaces. It provides excellent adhesion with the surface and top coats.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-12 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "2"
    },
    features: [
      "High Quality Solvent Based Sealer",
      "No Added Lead or Mercury",
      "Reduces Damage From Alkali and Salts"
    ],
    applicationDescription: "Apply 1 coats of Paintex Ultraprime and dry overnight",
    downloads: {
      sds: null, // Not provided in the content
      tds: null, // Not provided in the content
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;