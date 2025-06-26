"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const WoodcareMattLacquer = () => {
  const product = {
    id: 20, // Incremented ID to differentiate from the previous product
    title: "Dulux Woodcare Matt Lacquer",
    image: "/dulux/27.jpg", // Placeholder; update with actual image path
    description:
      "Dulux Woodcare Matt Lacquer is used as top coat on a sealed wood surface to provide protection and smooth finish.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-11 m2/L",
      dryingTime: "3-4 Hours between coats",
      coats: "3",
    },
    features: [
      "Provides Protection and Smooth Finish",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Woodcare Matt Lacquer and leave for 3-4 hours between coats",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2300014_0383106a2_english_gb_20221205_dulux_woodcare_matt_lacquer.pdf",
      tds: "/pdf/dulux/pk_khatoa01_n2300014_0383106a2_english_gb_20221205_dulux_woodcare_matt_lacquer.pdf", // Placeholder; update with actual TDS if available
      warranty: "/pdf/dulux/pk_khatoa01_n2300014_0383106a2_english_gb_20221205_dulux_woodcare_matt_lacquer.pdf", // Placeholder; update with actual warranty if available
    },
  };

  return <BaseDetailPage product={product} />;
};

export default WoodcareMattLacquer;