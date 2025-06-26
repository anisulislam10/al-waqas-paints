"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AquashieldPreTreatmentCoat = () => {
  const product = {
    id: 15,
    title: "Dulux Aquashield Pre Treatment Coat",
    image: "/dulux/24.avif",
    description:
      "Dulux Aquashield Pre Treatment Coat is a high-performance, water-based primer designed to provide ultimate water defense for exterior and interior surfaces. It features FungiClean Technology and an AntiMicrobial Pack to protect against fungi and microbial growth, ensuring a clean and durable surface for subsequent coatings. Ideal for preparing masonry, concrete, and plaster surfaces before applying topcoats.",
    keyInformation: {
      finish: "Matt",
      coverage: "110-112 m2/L",
      dryingTime: "4-6 Hours",
      coats: "1",
    },
    features: [
      "FungiClean Technology",
      "AntiMicrobial Pack",
      "Surface Prep Wash",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply one coat of Dulux Aquashield Pre Treatment Coat using a brush, roller, or spray after thorough surface preparation. Ensure surfaces are clean, dry, and free from dirt, grease, and loose material. Allow 4-6 hours for drying before applying the topcoat. For optimal results, refer to the product brochure or visit our website for detailed application instructions.",
    downloads: {
      sds: "/pdf/dulux/pre_treatment_coat.pdf",
      tds: "/pdf/dulux/tds_dulux_aquashield_pretreatment_coast_pk.pdf",
      warranty: "/pdf/duluxpre_treatment_coat.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default AquashieldPreTreatmentCoat;