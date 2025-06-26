"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Synthetic Undercoat Wood and Metal Primer",
    image: "/dulux/10.avif",
    description:
      "Dulux Synthetic Undercoat is a high quality solvent based primer for all kinds of interior & exterior wood & metal surfaces. It protects the metal surface from rust & gives uniform appearance to topcoat; act as a sealant for wood surfaces to provide uniform appearance & adhesion with topcoat.",
      
    keyInformation: {
      finish: "Matt",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "1",
    },
    features: [
      "Seals Wood",
      "Improves Adhesion with Top Coat",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of dulux Synthetic Undercoat and leave for 16 hours between coats",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_synthetic_undercoatf54286404383324.pdf",
      tds: "/pdf/dulux/tds_dulux_synthetic_undercoat_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default AmbianceDiamondGlo;