"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxWeathershieldPowerflexx = () => {
  const product = {
    id: 1, // Next sequential ID
    title: "Dulux Weathershield Powerflexx",
    image: "/dulux/exterior/1.avif", // Update with actual image path
    description: "Dulux Weathershield Powerflexx is a top quality elastomeric exterior wall paint with highly advanced Triple Defence Technology that stretches more to cover 10X* wider cracks, providing water repellence and protection against extreme weather conditions.",
    keyInformation: {
      finish: "Slight sheen",
      coverage: "13-15 m2/L",
      dryingTime: "2-3 hours",
      coats: "3"
    },
    features: [
      "12 Year Performance Warranty",
      "Powerflexx Technology",
      "KeepCool Technology",
      "UV Protect Technology",
      "Alkali Guard",
      "Dirt Guard – Stay Clean Technology",
      "Peel Guard",
      "Algae-Fungus Guard"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Weathershield Powerflexx with 2-3 hrs of interval in between coats. Thinning ratio must be followed as per application procedure.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_weatheshield_powerflexx.pdf", // From page content
      tds: "/pdf/dulux/exterior/tds_weathershield_powerflexx_pk.pdf", // From page content
      warranty: "/pdf/dulux/exterior/dulux_weathershield_powerflexx_warranty_tc.pdf" // From page content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWeathershieldPowerflexx;