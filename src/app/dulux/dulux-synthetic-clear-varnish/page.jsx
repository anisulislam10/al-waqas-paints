"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxSyntheticClearVarnish = () => {
  const product = {
    id: 41, // Next sequential ID
    title: "Dulux Synthetic Clear Varnish",
    image: "/dulux/41.jpg", // Update with actual image path
    description: "Dulux Synthetic Clear Varnish from Dulux is a solvent-based varnish suitable for use on all type of new or previously treated wood and metal. Typical uses include panelling, cane or wood furniture, windows, door and partitions. Dulux Synthetic Clear Varnish has a high gloss finish and has excellent abrasion resistance and is fast drying.",
    keyInformation: {
      finish: "Gloss",
      coverage: "12-14 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "3"
    },
    features: [
      "High Gloss Finish",
      "Excellent Abrasion Resistance",
      "Fast Drying",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 2-3 coats of Dulux Varnish and leave for 16 hours between coats",
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_n2110004_0383107a2_english_gb_20221205_dulux_varnish.pdf", // From page content
      tds: "/pdf/dulux/tds_synthetic_clear_varnish_pk.pdf", // From page content
      warranty: "/pdf/dulux/pk_khatoa01_n2110004_0383107a2_english_gb_20221205_dulux_varnish.pdf" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxSyntheticClearVarnish;