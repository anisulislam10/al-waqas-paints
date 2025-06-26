"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10, // Next in sequence
    title: "Paintex Star Synthetic Enamel",
    image: "/dulux/exterior/10.avif", // Assumed path based on template
    description: "Paintex Star Synthetic Enamel is a superior quality, solvent-based gloss enamel recommended for use on all types of interior and exterior wood and metal surfaces. It gives a smooth finish with long lasting shine and has improved drying time.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "12 Hours",
      coats: "3"
    },
    features: [
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Paintex Star Synthetic Enamel and leave for 12 hours between coats.",
    downloads: {
      sds: null, // Not provided in the content
      tds: null, // Not provided in the content
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;