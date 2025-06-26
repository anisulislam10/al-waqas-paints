"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Promise Interior Primer",
    image: "/dulux/9.avif",
    description:
      "Dulux Promise Primer is a high quality, water based primer for internal surfaces. Its unique anti-peel formulation ensures superior adhesion for the paint film, thereby resisting peeling or flaking of the topcoat.",
      
    keyInformation: {
      finish: "Matt",
      coverage: "15-18 m2/l/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "1",
    },
    features: [
      "Excellent Adhesion",
      "Low Odour",
      "Low VOC",
      "Certified by Singapore Green Label Council",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply one coat of Dulux Promise primer and allow to dry for 2-3 hours",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en__dulux_promise_primer_f9129595.pdf",
      tds: "/pdf/dulux/tds_promise_primer_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;