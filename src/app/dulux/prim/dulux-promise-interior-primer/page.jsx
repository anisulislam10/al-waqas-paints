"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxPromiseInteriorPrimer = () => {
  const product = {
    id: 16, // Next in sequence
    title: "Dulux Promise Interior Primer",
    image: "/dulux/primer/1.avif", // Updated path to primer
    description: "Dulux Promise Primer is a high quality, water based primer for internal surfaces. Its unique anti-peel formulation ensures superior adhesion for the paint film, thereby resisting peeling or flaking of the topcoat.",
    keyInformation: {
      finish: "Matt",
      coverage: "15-18 m²/L/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "1"
    },
    features: [
      "Excellent Adhesion",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury",
      "Certified by Singapore Green Label Council"
    ],
    applicationDescription: "Apply one coat of Dulux Promise Primer and allow to dry for 2-3 hours.",
    downloads: {
      sds: "/pdf/dulux/primer/xx_pk_en__dulux_promise_primer_f9129595.pdf",
      tds: "/pdf/dulux/primer/tds_promise_primer_pk.pdf",
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseInteriorPrimer;