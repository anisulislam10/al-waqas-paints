"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxExteriorCrackbridgingPrimer = () => {
  const product = {
    id: 20, // Next in sequence
    title: "Dulux Exterior Crackbridging Primer",
    image: "/dulux/primer/6.avif", // Updated path to primer
    description: "Dulux Exterior Crackbridging Primer is a high quality exterior acrylic primer that is equipped with crack bridging technology which prevents top coat from hairline cracks. This high quality exterior primer also prevents top coat from peeling, alkali attacks and also provides excellent adhesion between coats.",
    keyInformation: {
      finish: "Matt",
      coverage: "16-18 m²/L",
      dryingTime: "2-3 Hours (Depending on temperature and humidity)",
      coats: "1"
    },
    features: [
      "Alkali Resistant",
      "Reinforces Adhesion and Durability of the End Coat"
    ],
    applicationDescription: "Apply 1 coat of Dulux Exterior Crackbridging Primer and leave for 2-3 hours.",
    downloads: {
      sds: null, // Not provided in the content
      tds: "/pdf/dulux/primer/tds_dulux_exterior_crack_bridging_primer_pk.pdf",
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxExteriorCrackbridgingPrimer;