"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAluminiumPaintDualPack = () => {
  const product = {
    id: 9, // Assuming next in sequence
    title: "Dulux Aluminium Paint Dual Pack",
    image: "/dulux/exterior/9.avif", // Adjust based on actual image path
    description: "Dulux Aluminium Paint Dual Pack is a silver paint with a high metallic luster, which protects the surface from corrosion, discoloration and the effects of heat.",
    keyInformation: {
      finish: "Gloss",
      coverage: "14-16 m2/litre",
      dryingTime: "16 Hours between coats",
      coats: "1"
    },
    features: [
      "Anti-Rust"
    ],
    applicationDescription: "Apply two coats of Dulux Aluminium and leave for 16 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_aluminium_paint_dual_packf33809804383299.pdf",
      tds: "", // Not provided in the content
      warranty: "", // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAluminiumPaintDualPack;