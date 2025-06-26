"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AquashieldInteriorWaterproofBasecoat = () => {
  const product = {
    id: 16,
    title: "Dulux Aquashield Interior Waterproof Basecoat",
    image: "/dulux/25.avif",
    description:
      "Dulux Aquashield Interior Waterproof Basecoat is a high quality premium basecoat that provides waterproof protection to interior walls. Its revolutionary DampProtect Technology guards interior walls against dampness, enhances top coat life and prevents alkali salt deposits.",
    keyInformation: {
      finish: "Matt",
      coverage: "7-9 m2/L",
      dryingTime: "3-4 Hours",
      coats: "1",
    },
    features: [
      "Alkali Guard",
      "Crack Bridging",
      "Enhances Topcoat Opacity",
      "DampProtect Technology",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply one coat of Dulux Aquashield Interior Waterproof Basecoat using a brush, roller, or spray after thorough surface preparation. Ensure surfaces are clean, dry, and free from dirt, grease, and loose material. Allow 3-4 hours for drying before applying the topcoat. For optimal results, refer to the product brochure or visit our website for detailed application instructions.",
    downloads: {
      sds: "/pdf/dulux/interior_basecoat.pdf",
      tds: "/pdf/dulux/tds_dulux_aquashield_interior_waterproof_basecoat.pdf",
      warranty: "/pdf/dulux/interior_basecoat.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default AquashieldInteriorWaterproofBasecoat;