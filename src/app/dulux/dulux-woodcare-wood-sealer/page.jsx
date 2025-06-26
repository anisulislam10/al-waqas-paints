"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const WoodcareSealer = () => {
  const product = {
    id: 3,
    title: "Dulux Woodcare Wood Sealer",
    image: "/dulux/12.png",
    description:
      "An excellent sealer which penetrates the pores of wood and prevents sinkage of topcoat to allow good hold out.",
    keyInformation: {
      finish: "Slight sheen",
      coverage: "11-13 m2/L",
      dryingTime: "2-3 Hours between coats",
      coats: "3",
    },
    features: [
      "Prevents Sinkage of Top Coat",
      "Allows Good Hold Out",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Woodcare Sealer and leave for 2-3 hours between coats",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2170010_0383104a2_english_gb_20221205_dulux_wc_sealer.pdf",
      tds: "/pdf/dulux/tds_woodcare_sealer_pk.pdf",
      warranty: "/pdf/dulux/warranty_woodcare_sealer.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default WoodcareSealer;