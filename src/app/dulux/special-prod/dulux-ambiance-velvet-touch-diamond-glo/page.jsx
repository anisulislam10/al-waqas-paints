"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxAquashieldPreTreatment = () => {
  const product = {
    id: 1,
    title: "Dulux Aquashield Pre Treatment Coat",
    image: "/water-pro/1.avif",
    description: "Dulux Aquashield Pre Treatment Coat is a high performance surface preparation product with FungiClean Technology that provides protection against fungal attacks. Its unique Anti Microbial pack helps to destroy fungal and algal infection from the root to prevent growth on the surface.",
    keyInformation: {
      finish: "Matt",
      coverage: "110-112 m²/L",
      dryingTime: "4-6 hours",
      coats: "1"
    },
    features: [
      "FungiClean Technology",
      "AntiMicrobial Pack",
      "Surface Prep Wash",
    ],
    applicationDescription: `1. Preparing the Surfaces:
Remove any fungal, algal lichen or moss growth by scrapping with wire brush. Clean the surface thoroughly for any powdery loose particles by brushing and water jetting. Allow the surface to dry completely.

2. Cleaning:
Clean all equipment with water immediately after use

3. Storing:
Store paint in dry conditions and protect from extreme temperatures.`,
    downloads: {
      sds: "/pdf/pre_treatment_coat.pdf",
      tds: "/pdf/tds_dulux_aquashield_pretreatment_coast_pk.pdf",
      datasheet: "/pdf/pre_treatment_coat.pdf"
    },
    
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAquashieldPreTreatment;