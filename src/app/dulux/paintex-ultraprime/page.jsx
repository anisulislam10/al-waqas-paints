"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PaintexUltraprime = () => {
  const product = {
    id: 37, // Next sequential ID
    title: "Paintex Ultraprime",
    image: "/dulux/37.avif", // Update with actual image path
    description: "Paintex Ultraprime is a high quality solvent based sealer for masonry surfaces. It is ideal for use on all interior/exterior surfaces. It reduces damage from alkali and salts and seals powdery, porous surfaces. It provides excellent adhesion with the surface and top coats.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-12 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "2"
    },
    features: [
      "High Quality Solvent Based Sealer",
      "Reduces Damage From Alkali and Salts",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 1 coat of Paintex Ultraprime and dry overnight",
    downloads: {
      sds: "", // Update with actual path
      tds: "", // Update with actual path
      warranty: "" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexUltraprime;