"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldPreTreatment = () => {
  const product = {
    id: 4, // Starting ID
    title: "Dulux Aquashield Waterproof Roofcoat",
    image: "/water-pro/4.avif", // Updated path to match your structure
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
      "Foot Trafficable",


    ],
    applicationDescription: "Apply 1 coat of Dulux Aquashield Pre Treatment Coat and allow 4-6 hours drying time.",
    downloads: {
      sds: "/pdf/roofcoat.pdf", // Not provided in the content
      tds: "/pdf/tds_dulux_aquashield_waterproof_coat_pk.pdf", // Not provided in the content
      warranty: "/pdf/aquashield_roofcoat_tc.pdf" // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldPreTreatment;