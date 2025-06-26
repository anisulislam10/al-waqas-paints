"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Ambiance Velvet Touch Pearl Glo",
    image: "/dulux/3.jpg",
    description:
      "Dulux Velvet Touch is a 100% acrylic-based premium quality paint. It is an ultra luxurious water based interior emulsion with the smooth touch of velvet.Recommended for interior surfaces only",
      
    keyInformation: {
      finish: "Matt",
      coverage: "16-18 m² per liter per coat",
      dryingTime: "3-4 Hours",
      coats: "4",
    },
    features: [
      "6 Year Performance Warranty",
      "Luxurious Finish",
      "Anti-Mould & Anti-Fungus",
      "Peel Guard",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "High Opacity & Coverage",
      "High Durability",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "After surface preparation, apply 3-4 coats of Dulux Velvet Touch. Ensure 3-4 hours for drying between successive coats. Use of any other paint apart from the specially formulated Dulux Velvet Touch may deviate the desire finish of Dulux Velvet Touch and make it hard to recondition. STIR THOROUGHLY BEFORE USE. Contains no added lead or mercury.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_rich_matt_white.pdf",
      tds: "/pdf/dulux/tds_ambiance_rich_matt_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;