"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxWeathershield = () => {
  const product = {
    id: 2, 
    title: "Dulux Weathershield",
    image: "/dulux/exterior/2.avif", 
    description: "Dulux Weathershield 2G is a high quality, premium exterior paint that protects your home from damaging effects of all types of weather. It is powered with Smart Release Technology which gives advanced protection against algae and fungus that is caused by the sun and rain. Backed by a 6Y weather protection warranty, Dulux Weathershield also comes with Keep Cool Technology that reduces the surface temperature and keeps your homes cooler by 5 degrees.",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 m2/L",
      dryingTime: "2-3 Hours",
      coats: "3"
    },
    features: [
      "7 Year Performance Warranty",
      "Smart Release Technology- 2X Protection Against Algae & Fungus",
      "KeepCool Technology",
      "Peel Guard",
      "Alkali Guard",
      "Stay Clean Technology",
      "UV Protect Technology"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Weathershield with 2-3 hrs of interval in between coats. Thinning ratio must be followed as per application procedure.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_weathershield_white_f9231951.pdf", 
      tds: "/pdf/dulux/exterior/tds_weathershield_pk.pdf", 
      warranty: "/pdf/dulux/exterior/weathershield_tc.pdf" 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWeathershield;