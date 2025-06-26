"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PaintexPutty = () => {
  const product = {
    id: 30, // Next sequential ID
    title: "Paintex Putty",
    image: "/dulux/32.jfif", // Update with actual image path
    description: "ICI Paintex Wall Putty (water based) is a high quality ready to use filler for all types of interior masonry surfaces such as plaster. It is easy to apply and quick drying. Its good filling properties give a smooth finish for application of topcoat. ICI Paintex Wall Putty is not recommended for exterior use.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-5 m2/kg",
      dryingTime: "2-3 Hours between coats",
      coats: "3"
    },
    features: [
      "Quick Drying",
      "Easy To Apply",
      "Smooth Matt Finish"
    ],
    applicationDescription: "Apply 2-3 coats of Paintex Putty and leave for 2-3 hours between coats",
    downloads: {
      sds: "", // Update with actual path
      tds: "", // Update with actual path
      warranty: "" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexPutty;