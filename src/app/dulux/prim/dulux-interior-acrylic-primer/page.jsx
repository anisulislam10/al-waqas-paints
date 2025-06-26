"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxInteriorAcrylicPrimer = () => {
  const product = {
    id: 2, // Next in sequence
    title: "Dulux Interior Acrylic Primer",
    image: "/dulux/primer/2.avif", // Updated path to primer
    description: "Dulux Interior Acrylic Primer is premium quality, acrylic based primer suitable for all types of interior masonry surfaces such as brickwork, plaster, & cement rendering. The primer provides excellent alkali resistance, improves adhesion of topcoats, and binds powdery residue, resulting in uniform surface for putty and topcoat application.",
    keyInformation: {
      finish: "Matt",
      coverage: "16-18 m²/L",
      dryingTime: "2-3 Hours (Dependant on temperature and humidity)",
      coats: "1"
    },
    features: [
      "Superior Adhesion",
      "Enhances Topcoat Opacity",
      "Alkali Resistant",
      "Reinforces Adhesion and Durability of the End Coat",
      "Quick Drying"
    ],
    applicationDescription: "Apply one coat of Dulux Interior Acrylic Primer and dry for 2-3 hours.",
    downloads: {
      sds: null, // Not provided in the content
      tds: "/pdf/dulux/primer/tds_dulux_interior_acrylic_primer_pk.pdf",
      warranty: null // Not provided in the content
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxInteriorAcrylicPrimer;