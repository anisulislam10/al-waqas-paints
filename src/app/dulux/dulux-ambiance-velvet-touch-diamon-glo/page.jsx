"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Ambiance Velvet Touch Diamond Glo",
    image: "/dulux/Dulux Ambiance.webp",
    description:
      "Dulux Ambiance Velvet Touch Diamond Glo is acrylic based premium quality paint. It is an ultra-luxurious water-based interior emulsion with the smooth touch of velvet. Recommended for interior masonry surfaces only.",
    keyInformation: {
      finish: "High sheen",
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
      "Apply using a brush, roller, or spray on clean, dry interior masonry surfaces. Ensure proper surface preparation by cleaning and priming if necessary. Apply 4 coats for optimal finish, allowing 3-4 hours drying time between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_diamond_glo.pdf",
      tds: "/pdf/dulux/tds_ambiance_diamond_glo_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;