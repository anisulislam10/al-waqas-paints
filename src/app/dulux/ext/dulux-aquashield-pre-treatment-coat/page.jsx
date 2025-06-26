"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldPreTreatmentCoat = () => {
  const product = {
    id: 11, // Next in sequence
    title: "Dulux Aquashield Pre Treatment Coat",
    image: "/dulux/exterior/11.avif", // Assumed path based on template
    description: "Dulux Aquashield Pre Treatment Coat is a high performance surface preparation product with FungiClean Technology that provides protection against fungal attacks. Its unique Anti Microbial pack helps to destroy the fungal and algal infection from the root to prevent fungal and algal growth developing on the surface.",
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
    applicationDescription: "Apply 1 coat of Dulux Aquashield Pre Treatment Coat and leave for 4-6 hours.",
    downloads: {
      sds:"/pdf/dulux/exterior/pre_treatment_coat.pdf", // Not provided in the content
      tds: "/pdf/dulux/exterior/tds_dulux_aquashield_pretreatment_coast_pk.pdf",
      warranty: "/pdf/dulux/exterior/pre_treatment_coat.pdf",// Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldPreTreatmentCoat;