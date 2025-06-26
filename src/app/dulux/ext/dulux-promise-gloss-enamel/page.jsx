"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxPromiseGlossEnamel = () => {
  const product = {
    id: 14, // Next in sequence
    title: "Dulux Promise Gloss Enamel",
    image: "/dulux/exterior/14.avif", // Assumed path based on template
    description: "Dulux Promise Gloss Enamel is a high quality enamel paint recommended for Wood, Metal and Trim Surfaces. It is specially formulated with Chromabrite technology to give a smooth finish with excellent colours. This enamel paint has excellent drying and gives the surface a beautiful glossy finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m²/L/coat",
      dryingTime: "12 Hours between coats",
      coats: "3"
    },
    features: [
      "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
      "High Gloss Gloss Retention",
      "Cracking Drying Improved Drying",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Promise Enamel and leave for 12 hours between coats.",
    downloads: {
      sds: null, // Not provided in the content
      tds: null, // Not provided in the content
      warranty: "/pdf/dulux/exterior/promise_gloss_enamel_tc.pdf" // Assumed path based on content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseGlossEnamel;