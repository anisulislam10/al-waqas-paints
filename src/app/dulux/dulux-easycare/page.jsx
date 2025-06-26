"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux EasyCare",
    image: "/dulux/4.avif",
    description:
      "Dulux EasyCare is an acrylic water based paint for all interior walls. Kidproof+ Technology provides tough stain resistance making walls easy to clean without damaging the paint layer. With Anti-bacterial properties Dulux EasyCare also inhibits the growth of bacteria on your interior walls. Now with the new Silver Ion Technology, it comes with an added benefit of anti-viral property that helps to effectively works against cetain virus. (^) Dulux EasyCare provides protection for your walls not only from stains but also certain bacteria & virus. (^^) (^) Under test condition (^^) Virus and bacteria can also spread through other external / internal surfaces.",
      
    keyInformation: {
      finish: "Matt",
      coverage: "13-15m2 /litre /coat.",
      dryingTime: "2-3 Hours",
      coats: "3",
    },
    features: [
      "5 Year Performance Warranty",
      "Stain Resistant",
      "Anti-Mould & Anti-Fungus",
      "Anti-Viral",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "Peel Guard",
      "High Durability",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 3-4 coats of Dulux EasyCare and leave for 2-3 hours between coats.",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_easycare_antiviral.pdf",
      tds: "/pdf/dulux/tds_easycare_pk.pdf",
      warranty: "/pdf/dulux/ambiance_vt_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;