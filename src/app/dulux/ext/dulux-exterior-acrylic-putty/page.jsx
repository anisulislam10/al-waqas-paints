"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxExteriorAcrylicPutty = () => {
  const product = {
    id: 8, // Next in exterior sequence
    title: "Dulux Exterior Acrylic Putty",
    image: "/dulux/exterior/8.avif",
    description: "Dulux Exterior Acrylic Putty is a high quality exterior acrylic putty for masonry surfaces and brickwork. This putty is quick drying and easy to apply which leaves the walls with a smooth finish.",
    keyInformation: {
      finish: "Matt",
      coverage: "3-4 m2/Kg",
      dryingTime: "2-3 Hours (Depending on temperature and humidity)",
      coats: "2"
    },
    features: [
      "Reinforces Adhesion and Durability of the End Coat",
      "High Durability"
    ],
    applicationDescription: "Apply 1 coat of Dulux Exterior Acrylic Putty and leave for 2-3 hours.",
    downloads: {
      sds: "/pdf/dulux/exterior/xx_pk_en_dulux_acrylic_putty.pdf",
      tds: "/pdf/dulux/exterior/tds_dulux_interior_acrylic_putty_pk.pdf", // Note: filename says "interior" but using as provided
      warranty: "/pdf/dulux/exterior/xx_pk_en_dulux_acrylic_putty.pdf" // Update if available
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxExteriorAcrylicPutty;