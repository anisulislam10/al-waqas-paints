"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxPrimeOn = () => {
  const product = {
    id: 21, // Next sequential ID
    title: "Dulux Prime-On",
    image: "/dulux/31.avif", // Update with actual image path
    description: "Dulux Prime-On is a solvent based sealer for interior and exterior masonry surface both new and previously decorated, such as brickwork, plaster and cement.",
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m2/L",
      dryingTime: "2-4 Hours (Dependant on temperature and humidity)\nRecoat after 16 hours",
      coats: "1"
    },
    features: [
      "Reinforces Adhesion and Durability of the End Coat",
      "Excellent Sealing Properties"
    ],
    applicationDescription: "Apply one coat of Dulux Prime On and leave for 16 hours to dry.",
    downloads: {
      sds: "/pdf/dulux/tds_dulux_prime_on_pk.pdf", // Update with actual path
      tds: "/pdf/dulux/tds_dulux_prime_on_pk.pdf", // From the page content
      warranty: "/pdf/dulux/tds_dulux_prime_on_pk.pdf" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPrimeOn;