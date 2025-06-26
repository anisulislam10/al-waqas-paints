"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxAmbianceVelvetTouchLinen = () => {
  const product = {
    id: 34, // Next sequential ID
    title: "Dulux Ambiance Velvet Touch Linen",
    image: "/dulux/34.avif", // Update with actual image path
    description: "Dulux Velvet Touch Linen is a premium special effects paint designed to deliver a wide variety of wall patterns with unique textured fabric effects on your walls. Velvet Touch Linen can be tinted in selected Dulux colours. Recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "6-7 m2 per liter per coat",
      dryingTime: "4-5 Hours",
      coats: "1"
    },
    features: [
      "Delivers a Weave of Textured Fabrics"
    ],
    applicationDescription: "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply one coat of Velvet Touch Linen in the required colour by roller. Finally, use the Dulux Velvet Touch Texture Brush in horizontal and/or vertical direction to create the desired Linen effect when the paint film is still wet.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_linen.pdf", // From page content
      tds: "/pdf/dulux/tds_vt_linen.pdf", // From page content
      warranty: "/pdf/dulux/msds_dvt_linen.pdf" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxAmbianceVelvetTouchLinen;