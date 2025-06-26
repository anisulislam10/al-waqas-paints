"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxWeathershieldWaterRepellent = () => {
  const product = {
    id: 6,
    title: "Dulux Weathershield Water Repellent",
    image: "/dulux/exterior/6.avif",
    description: "Dulux Water Repellent is an excellent protective barrier against moisture for unpainted surfaces. Provides durable protection while allowing comfortable application.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-6 m2/L",
      dryingTime: "30 minutes (Recoat after 16 hours)\nNote: Rain within 24hrs reduces efficiency - allow surface to dry and apply extra coat",
      coats: "2"
    },
    features: [
      "Excellent moisture protection",
      "Comfortable Application",
      "Protects unpainted surfaces"
    ],
    applicationDescription: "Apply 2 coats of Dulux Water Repellent and leave for 16 hours between coats. For optimal results, avoid rain within 24 hours of application.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_water_repellentf28522964383109.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_ws_water_repellent_pk.pdf",
            warranty: "/pdf/dulux/exterior/tds_dulux_ws_water_repellent_pk.pdf" // From page content

    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWeathershieldWaterRepellent;