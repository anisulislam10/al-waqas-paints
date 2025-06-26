"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Gloss Enamel",
    image: "/dulux/8.avif",
    description:
      "Dulux Gloss enamel is a high quality solvent-based super gloss finish, suitable for use on all types of interior and exterior wood and metal surfaces. Dulux Gloss Enamel gives a non yellowing, smooth mirror like finish and has excellent durability. It also provides better flow and better coverage",
      
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "3",
    },
    features: [
      "3 Years Performance Warranty",
      "Non Yellowing",
      "High Coverage",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Gloss Enamel with 16 hours interval between coats",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_gloss_enamel_white__f33201014383228.pdf",
      tds: "/pdf/dulux/tds_gloss_enamel_pk.pdf",
      warranty: "/pdf/dulux/gloss_enamel_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;