"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const VelvetTouchMetallicBronze = () => {
  const product = {
    id: 10,
    title: "Dulux Ambiance Velvet Touch Metallic Bronze",
    image: "/dulux/19.avif",
    description:
      "Dulux Velvet Touch Metallic Bronze is an acrylic based interior premium quality paint. It is a part of our special effects range, designed to deliver wide variety of wall impacts with a unique metallic finish. Velvet Touch Metallic Bronze is available in Molten Bronze colour. It is recommended for interior use only.",
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
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply two coats of Velvet Touch Metallic Bronze in Molten Bronze colour with roller or brush. Ensure four to five hours for drying between each coat. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_metallics_bronze.pdf",
      tds: "/pdf/dulux/tds_vt_metallic_bronze.pdf",
      warranty: "/pdf/dulux/warranty_velvet_touch_metallic_bronze.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default VelvetTouchMetallicBronze;