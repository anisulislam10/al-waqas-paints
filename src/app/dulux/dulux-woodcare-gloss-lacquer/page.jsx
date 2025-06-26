"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const WoodcareGlossLacquer = () => {
  const product = {
    id: 21,
    title: "Dulux Woodcare Gloss Lacquer",
    image: "/dulux/28.jpg",
    description:
      "Dulux Woodcare Gloss Lacquer is used as top coat on a sealed wood surface to provide protection and smooth finish.",
    keyInformation: {
      finish: "Gloss",
      coverage: "10-11 m2/L",
      dryingTime: "3-4 Hours between coats",
      coats: "3",
    },
    features: [
      "Provides Protection and Smooth Finish",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Woodcare Gloss Lacquer and leave for 3-4 hours between coats",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2300013_0383105a2_english_gb_20221205_dulux_wc_gloss_lacquer.pdf",
      tds: "/pdf/dulux/pk_khatoa01_n2300013_0383105a2_english_gb_20221205_dulux_wc_gloss_lacquer.pdf",
      warranty: "/pdf/dulux/pk_khatoa01_n2300013_0383105a2_english_gb_20221205_dulux_wc_gloss_lacquer.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default WoodcareGlossLacquer;