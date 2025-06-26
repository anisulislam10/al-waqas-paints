"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxPromiseGlossEnamel = () => {
  const product = {
    id: 33, // Next sequential ID
    title: "Dulux Promise Gloss Enamel",
    image: "/dulux/33.avif", // Update with actual image path
    description: "Dulux Promise Gloss Enamel is a high quality enamel paint recommended for Wood, Metal and Trim Surfaces. It is specially formulated with Chromabrite technology to give a smooth finish with excellent colours. This enamel paint has excellent drying and gives the surface a beautiful glossy finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L/coat",
      dryingTime: "12 Hours between coats",
      coats: "3"
    },
    features: [
      "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
      "High Gloss Retention",
      "Improved Drying",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Promise Enamel and leave for 12 hours between coats",
    downloads: {
      sds: "/pdf/dulux/promise_gloss_enamel_tc.pdf", // Update with actual path
      tds: "/pdf/dulux/promise_gloss_enamel_tc.pdf", // Update with actual path
      warranty: "/pdf/dulux/promise_gloss_enamel_tc.pdf" // From page content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseGlossEnamel;