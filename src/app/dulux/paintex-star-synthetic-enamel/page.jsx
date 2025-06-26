"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 14,
    title: "Paintex Star Synthetic Enamel",
    image: "/dulux/23.avif",
    description:
      "Paintex Star Synthetic Enamel is a superior quality, solvent-based gloss enamel recommended for use on all types of interior and exterior wood and metal surfaces. It delivers a smooth finish with long-lasting shine and improved drying time, making it ideal for both aesthetic appeal and durability.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "12 Hours",
      coats: "3",
    },
    features: [
      "Smooth Finish with Long-Lasting Shine",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of Paintex Star Synthetic Enamel and leave for 12 hours between coats. Ensure surfaces are clean, dry, and free from dirt, grease, and wax. For new or bare surfaces, prime with an appropriate primer and dry overnight. For previously painted surfaces, rub down with abrasive paper and dust off before applying the enamel.",
    downloads: {
      sds: "/pdf/dulux/sds_paintex_star_synthetic_enamel.pdf",
      tds: "/pdf/dulux/tds_paintex_star_synthetic_enamel.pdf",
      warranty: "/pdf/dulux/warranty_paintex_star_synthetic_enamel.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;