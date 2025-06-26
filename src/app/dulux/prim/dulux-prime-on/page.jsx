"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxPrimeOn = () => {
  const product = {
    id: 18, // Next in sequence
    title: "Dulux Prime-On",
    image: "/dulux/primer/3.avif", // Updated path to primer
    description: "Dulux Prime-On is a solvent based sealer for interior and exterior masonry surface both new and previously decorated, such as brickwork, plaster and cement.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m²/L",
      dryingTime: "2-4 Hours (Dependant on temperature and humidity)",
      coats: "1"
    },
    features: [
      "Reinforces Adhesion and Durability of the End Coat",
      "Excellent Sealing Properties"
    ],
    applicationDescription: "Apply one coat of Dulux Prime-On and leave for 16 hours to dry.",
    downloads: {
      sds: null, // Not provided in the content
      tds: "/pdf/dulux/primer/tds_dulux_prime_on_pk.pdf",
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPrimeOn;