"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldPreTreatment = () => {
  const product = {
    id: 1, // Starting ID
    title: "Dulux Aquashield Pre Treatment Coat",
    image: "/water-pro/1.avif", // Updated path to match your structure
    description: "Dulux Aquashield Pre Treatment Coat is a high performance surface preparation product with FungiClean Technology that provides protection against fungal attacks.",
    keyInformation: {
      finish: "Matt",
      coverage: "110-112 m²/L",
      dryingTime: "4-6 hours",
      coats: "1"
    },
    features: [
      "FungiClean Technology",
      "AntiMicrobial Pack",
      "Surface Prep Wash"
    ],
    applicationDescription: "Apply 1 coat of Dulux Aquashield Pre Treatment Coat and allow 4-6 hours drying time.",
    downloads: {
      sds: "/pdf/pre_treatment_coat (1).pdf", // Not provided in the content
      tds: "/pdf/tds_dulux_aquashield_pretreatment_coast_pk (3).pdf", // Not provided in the content
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldPreTreatment;