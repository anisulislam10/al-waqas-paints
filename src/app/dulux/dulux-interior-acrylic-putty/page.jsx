"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxInteriorAcrylicPutty = () => {
  const product = {
    id: 42, // Next sequential ID
    title: "Dulux Interior Acrylic Putty",
    image: "/dulux/42.png", // Update with actual image path
    description: "Dulux Interior Acrylic Putty (water based) is a ready to use filler that has an excellent whiteness, coverage and application properties.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-6 m2/Kg",
      dryingTime: "Dependent on temperature and humidity.\nRecoat after 2-3 Hours.",
      coats: "1"
    },
    features: [
      "High Coverage",
      "Comfortable Application"
    ],
    applicationDescription: "Apply 1-2 coats of Dulux Wall Smoothening Putty (water based) and leave for 2-3 hours between coats.",
    downloads: {
      sds: "", // Update with actual path
      tds: "", // Update with actual path
      warranty: "" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxInteriorAcrylicPutty;