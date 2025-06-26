"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AluminiumPaintDualPack = () => {
  const product = {
    id: 4,
    title: "Dulux Aluminium Paint Dual Pack",
    image: "/dulux/13.avif",
    description:
      "Dulux Aluminium Paint Dual Pack is a silver paint with a high metallic luster, which protects the surface from corrosion, discoloration and the effects of heat.",
    keyInformation: {
      finish: "Gloss",
      coverage: "14-16 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "1",
    },
    features: [
      "Anti-Rust",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply two coats of Dulux Aluminium and leave for 16 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_aluminium_paint_dual_packf33809804383299.pdf",
      tds: "/pdf/dulux/tds_aluminium_paint_dual_pack.pdf",
      warranty: "/pdf/dulux/warranty_aluminium_paint_dual_pack.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default AluminiumPaintDualPack;