"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const VelvetTouchSilkSilver = () => {
  const product = {
    id: 13,
    title: "Dulux Ambiance Velvet Touch Velvet Silver",
    image: "/dulux/22.avif",
    description:
      "Dulux Velvet Touch Silk Silver is an acrylic based interior premium quality paint which is a part of our special effects range. It is inspired by the smoothest fabrics of Persia & delivers a luxurious fabric finish to your walls for a timeless touch. Velvet Touch Silk is available in selected tintable Dulux colours and offers a range of trendy shades. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "5-6 m2/L per coat",
      dryingTime: "4-6 Hours",
      coats: "2",
    },
    features: [
      "Delivers a Touch of Luxurious Fabrics",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply the first coat of Velvet Touch Silk Silver in required colour with roller and then use trowel to smoothen out the paint. Ensure four to six hours for drying between each coat. For the second coat, apply a thin layer of paint in waves by trowel. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_silk.pdf",
      tds: "/pdf/dulux/tds_vt_silk.pdf",
      warranty: "/pdf/dulux/warranty_velvet_touch_silk_silver.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default VelvetTouchSilkSilver;