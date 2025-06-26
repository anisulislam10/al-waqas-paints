"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Matt Enamel",
    image: "/dulux/7.avif",
    description:
      "Dulux Matt enamel is a high quality solvent-based super matt finish, suitable for use on all type of interior wood, metal and masonry surfaces. Dulux Matt Enamel has excellent resistance to steam and moisture, which makes it ideal for use in kitchens and bathrooms.",
      
    keyInformation: {
      finish: "High Matt",
      coverage: "13-15 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "3",
    },
    features: [
      "3 Years Performance Warranty",
      "Excellent Resistance To Steam and Moisture",
      "Ideal For Use in Kitchens and Bathrooms",
      "Anti-Viral",
      "Easy To Clean & Washable",
      "Anti-Bacterial",
      "Peel Guard",
      "No Added Lead or Mercury"
    ],
    applicationDescription:
      "Apply 2-3 coats of Dulux Matt Enamel with 16 hours interval between coats",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_matt_finish_enamel__f335.pdf",
      tds: "/pdf/dulux/tds_matt_enamel_pk.pdf",
      warranty: "/pdf/dulux/matt_enamel_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;