"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxWoodcarePULacquer = () => {
  const product = {
    id: 38, // Next sequential ID
    title: "Dulux Woodcare PU Lacquer",
    image: "/dulux/38.jpg", // Update with actual image path
    description: "Dulux PU (Polyurethane) Lacquer is an easy to use, one pack solvent based gloss lacquer with high quality and excellent durability.",
    keyInformation: {
      finish: "Gloss",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "4"
    },
    features: [
      "High Quality and Excellent Durability",
      "Provides Protection from UV Light",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Woodcare PU Lacquer and leave for 16 hours between coats",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2110007_0383108a2_english_gb_20221205_dulux_pu_lacquer.pdf", // From page content
      tds: "/pdf/dulux/tds_pu_lacquer_pk.pdf", // From page content
      warranty: "/pdf/dulux/pk_khatoa01_n2110007_0383108a2_english_gb_20221205_dulux_pu_lacquer.pdf" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWoodcarePULacquer;