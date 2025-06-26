"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 17,
    title: "Paintex Star Semi-Plastic Emulsion",
    image: "/dulux/26.jfif",
    description:
      "ICI Paintex Star Emulsion is an economical emulsion with improved hiding power and a smooth matt finish. It is suitable for all normal interior masonry surfaces including brick work, plaster & cement etc.",
    keyInformation: {
      finish: "Matt",
      coverage: "12-14 m2/L",
      dryingTime: "2-3 Hours between coats",
      coats: "4",
    },
    features: [
      "Improved Hiding Power",
      "Smooth Matt Finish",
      "No Added Lead or Mercury",

    ],
    applicationDescription:
      "Apply 3-4 coats of Paintex Star Emulsion and leave for 2-3 hours between coats",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_color_motion.pdf.pdf",
      tds: "/pdf/dulux/msds_dvt_color_motion.pdf.pdf",
      warranty: "/pdf/dulux/warranty_woodcare_sealer.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;