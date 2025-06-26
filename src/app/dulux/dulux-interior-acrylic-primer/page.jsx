"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const InteriorAcrylicPrimer = () => {
  const product = {
    id: 5,
    title: "Dulux Interior Acrylic Primer",
    image: "/dulux/14.avif",
    description:
      "Dulux Interior Acrylic Primer is premium quality, acrylic based primer suitable for all types of interior masonry surfaces such as brickwork, plaster, & cement rendering. The primer provides excellent alkali resistence, improves adhesion of topcoats, and binds powdery residue, resulting in uniform surface for putty and topcoat application",
    keyInformation: {
      finish: "Matt",
      coverage: "16-18 m2/L",
      dryingTime: "2-3 Hours (Dependant on temperature and humidity)",
      coats: "1",
    },
    features: [
      "Superior Adhesion",
      "Enhances Topcoat Opacity",
      "Alkali Resistant",
      "Reinforces Adhesion and Durability of the End Coat",
      "Quick Drying",
    ],
    applicationDescription:
      "Apply one coat of Aqua Prime and dry for 2-3 hours.",
    downloads: {
      sds: "/pdf/dulux/sds_dulux_interior_acrylic_primer.pdf",
      tds: "/pdf/dulux/tds_dulux_interior_acrylic_primer_pk.pdf",
      warranty: "/pdf/dulux/warranty_interior_acrylic_primer.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default InteriorAcrylicPrimer;