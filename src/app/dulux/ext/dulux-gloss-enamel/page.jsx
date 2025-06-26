"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxGlossEnamel = () => {
  const product = {
    id: 5,
    title: "Dulux Gloss Enamel",
    image: "/dulux/exterior/5.avif",
    description: "Dulux Gloss enamel is a high quality solvent-based super gloss finish, suitable for use on all types of interior and exterior wood and metal surfaces. Dulux Gloss Enamel gives a non-yellowing, smooth mirror-like finish with excellent durability, better flow, and superior coverage.",
    keyInformation: {
      finish: "Gloss",
      coverage: "13-15 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "3"
    },
    features: [
      "3 Years Performance Warranty",
      "Non Yellowing",
      "High Coverage",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Gloss Enamel with 16 hours interval between coats",
    downloads: {
      sds: "/pdf/dulux/enamel/xx_pk_en_dulux_gloss_enamel_white__f33201014383228.pdf",
      tds: "/pdf/dulux/enamel/tds_gloss_enamel_pk.pdf",
      warranty: "/pdf/dulux/enamel/gloss_enamel_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxGlossEnamel;