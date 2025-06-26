"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const VelvetTouchColourMotion = () => {
  const product = {
    id: 12,
    title: "Dulux Ambiance Velvet Touch Colour Motion",
    image: "/dulux/21.webp",
    description:
      "Dulux Velvet Touch Colour Motion is an acrylic based interior premium quality paint. It is a part of our special effects range, inspired by the luminous brilliance of colours, giving your walls a unique look every time from every angle. It is available in White colour. It is recommended for interior use only.",
    keyInformation: {
      finish: "Featured Finishes",
      coverage: "6.5-7.5 m2/L per coat",
      dryingTime: "4-6 Hours",
      coats: "1",
    },
    features: [
      "Provides Luminous Brilliance of Colours, Giving a Unique Look Everytime from Every Angle",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "After surface preparation apply 2-3 coats of Dulux Velvet Touch base coat in the recommended colour. Ensure 3-4 hours for drying between successive coats. Then apply one coat of Velvet Touch Colour Motion with brush in a random criss cross pattern. Leave the paint to dry for four to six hours to see the final effect. Please refer to the product brochure or visit our website for the detail application procedure instructions or the demo video for the best results. It is advisable to carry out small scale trials before application over large surface area. Ensure a slight overlap of sections while working to avoid demarcations of the finish.",
    downloads: {
      sds: "/pdf/dulux/msds_dvt_color_motion.pdf",
      tds: "/pdf/dulux/tds_vt_colourmotion.pdf",
      warranty: "/pdf/dulux/warranty_velvet_touch_colour_motion.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default VelvetTouchColourMotion;