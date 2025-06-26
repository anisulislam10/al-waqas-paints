"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PaintexUlratexVinylEmulsion = () => {
  const product = {
    id: 36, // Next sequential ID
    title: "Paintex Ultratex Vinyl Emulsion",
    image: "/dulux/36.avif", // Update with actual image path
    description: "ICI Paintex Ultratex is an economical water based paint that has an excellent coverage. ICI Paintex Ultratex provides a smooth matt finish. It is suitable for all normal interior masonry surfaces including brickwork, plaster, cement etc.",
    keyInformation: {
      finish: "Matt",
      coverage: "10-12 m2/kg",
      dryingTime: "2-3 Hours between coats",
      coats: "4"
    },
    features: [
      "Excellent Coverage",
      "Smooth Matt Finish",
      "No Added Lead or Mercury"
    ],
    applicationDescription: "Apply 3-4 coats of Paintex Ultratex Vinyl Emulsion and leave for 2-3 hours between coats",
    downloads: {
      sds: "", // Update with actual path
      tds: "", // Update with actual path
      warranty: "" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default PaintexUlratexVinylEmulsion;