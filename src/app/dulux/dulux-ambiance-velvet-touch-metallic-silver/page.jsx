"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const VelvetTouchMetallicSilver = () => {
  const product = {
    id: 9,
    title: "Dulux Ambiance Velvet Touch Metallic Silver",
    image: "/dulux/18.avif",
    description:
      "Dulux Velvet Touch Metallic Silver is an acrylic based interior premium quality paint. It is a part of our special effects range, designed to deliver wide variety of wall impacts with a unique metallic finish. Velvet Touch Metallic Silver can be tinted in selected Dulux colours. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "8-9 m2/L per coat",
      dryingTime: "4-5 Hours",
      coats: "2",
    },
    features: [
      "Pure Metallic Finish",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply two coats of Velvet Touch Metallic Silver in required colour with roller or brush. Ensure four to five hours for drying between each coat. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_metallics_silver.pdf",
      tds: "/pdf/dulux/tds_vt_metallic_silver.pdf",
      warranty: "/pdf/dulux/warranty_velvet_touch_metallic_silver.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default VelvetTouchMetallicSilver;