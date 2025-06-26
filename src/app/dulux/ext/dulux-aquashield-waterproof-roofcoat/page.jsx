"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldWaterproofRoofcoat = () => {
  const product = {
    id: 13, // Next in sequence
    title: "Dulux Aquashield Waterproof Roofcoat",
    image: "/dulux/exterior/13.avif", // Assumed path based on template
    description: "Dulux Aquashield Waterproof Roofcoat is a super durable, easy to apply, elastomeric roof coating with Hydro Resist Technology. It is made with fine pigments and an extremely durable high bond polymer that provides ultimate water barrier membrane on roofs combined with good dirt pick up resistance and flexibility to keep the surface cool.",
    keyInformation: {
      finish: "Matt",
      coverage: "0.7-0.9 m²/L/3 coats",
      dryingTime: "5-6 hours",
      coats: "3"
    },
    features: [
      "8 Years Waterproofing Performance",
      "HydroResist",
      "Crack Bridging",
      "Multi-Surface Adhesion",
      "Foot Trafficable"
    ],
    applicationDescription: "Apply 3 coats of Dulux Aquashield Waterproof Roofcoat with 5-6 hours interval between coats.",
    downloads: {
      sds: "/pdf/dulux/exterior/roofcoat.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_aquashield_waterproof_coat_pk.pdf",
      warranty: "/pdf/dulux/exterior/aquashield_roofcoat_tc.pdf" // Assumed path based on content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldWaterproofRoofcoat;