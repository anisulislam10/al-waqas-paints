"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const PaintexUltraprime = () => {
  const product = {
    id: 19, // Next in sequence
    title: "Paintex Ultraprime",
    image: "/dulux/primer/5.avif", // Updated path to primer
    description: "Paintex Ultraprime is a high quality solvent based sealer for masonry surfaces. It is ideal for use on all interior/exterior surfaces. It reduces damage from alkali and salts and seals powdery, porous surfaces. It provides excellent adhesion with the surface and top coats.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-12 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "2"
    },
    features: [
      "High Quality Solvent Based Sealer",
      "Reduces Damage From Alkali and Salts",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 1 coat of Paintex Ultraprime and dry overnight.",
    downloads: {
      sds: null, // Not provided in the content
      tds: null, // Not provided in the content
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexUltraprime;