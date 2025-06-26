"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PaintexSheeshaPutty = () => {
  const product = {
    id: 40, // Next sequential ID
    title: "Paintex Sheesha Putty",
    image: "/dulux/40.jfif", // Update with actual image path
    description: "ICI Paintex Sheesha Finish is a superior quality (water based) ready to use filler for all types of interior masonry surfaces such as plaster. It is brilliant white in colour, easy to apply, quick drying with excellent filling properties to give a smooth finish for application of topcoat. ICI Paintex Sheesha Finish is not recommended for exterior use.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-5 m2/kg",
      dryingTime: "2-3 Hours between coats",
      coats: "3"
    },
    features: [
      "Superior Quality",
      "Quick Drying"
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

export default PaintexSheeshaPutty;