"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Pentalite Emulsion",
    image: "/dulux/6.avif",
    description:
      "Dulux Pentalite Special Plastic Emulsion (Acrylic Based) is a premium quality emulsion with a smooth matt finish.",
      
    keyInformation: {
      finish: "Matt",
      coverage: "14-16 m2/L",
      dryingTime: "2-3 Hours",
      coats: "3",
    },
    features: [
      "High Coverage",
      "Durable",
      "Anti-Mould & Anti-Fungus",
      "Anti-Viral",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "Peel Guard",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 3-4 coats of Dulux Pentalite Emulsion and leave for 3 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_pentalite_classic_brilliant_white.pdf",
      tds: "/pdf/dulux/tds_pentaliteclassic_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;