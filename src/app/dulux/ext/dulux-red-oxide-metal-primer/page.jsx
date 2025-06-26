"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxRedOxideMetalPrimer = () => {
  const product = {
    id: 15, // Next in sequence
    title: "Dulux Red Oxide Metal Primer",
    image: "/dulux/exterior/15.avif", // Assumed path based on template
    description: "Dulux Red Oxide Anti-Corrosion Metal Primer is a solvent-based sealer, anti-corrosive protective primer for interior and exterior ferrous and non-ferrous metal work including new and pre-treated zinc and galvanized iron after using pre-treatment primer.",
    keyInformation: {
      finish: "Matt",
      coverage: "11-13 m²/L",
      dryingTime: "16 Hours between coats",
      coats: "1"
    },
    features: [
      "Anti Corrosive",
      "Improves Adhesion with Top Coat",
      "Makes the Finish Long Lasting",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply one coat of Dulux Red Oxide Primer and leave for 16 hours.",
    downloads: {
      sds: null, // Not provided in the content
      tds: "/pdf/dulux/exterior/tds_dulux_red_oxide_primer_pk.pdf",
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxRedOxideMetalPrimer;