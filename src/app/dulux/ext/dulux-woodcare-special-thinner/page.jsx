"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const PaintexStarSyntheticEnamel = () => {
  const product = {
    id: 10, // Next in sequence
    title: "Dulux Woodcare Special Thinner",
    image: "/dulux/exterior/18.jpg", // Assumed path based on template
    description: "Dulux Woodcare Special Thinner has the quality and strength to make all Woodcare products to be soluble to their maximum.",
    keyInformation: {
      finish: "Gloss",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "4"
    },
    features: [
      "No Added Lead or Mercury",
    ],
    applicationDescription: "ADulux Woodcare Special Thinner has the quality and strength to make all Woodcare products to be soluble to their maximum.",
    downloads: {
      sds: '/pdf/dulux/exterior/pk_khatoa01_t2190041_0383326a2_english_gb_20221205_dulux_wc_thinner.pdf',
      tds: '/pdf/dulux/exterior/tds_woodcare_special_thinner_pk.pdf',
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexStarSyntheticEnamel;