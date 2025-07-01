"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Thinner Wood Master",
    image: "/master/28.webp", 
    description: "Master Paints offers Thinner Wood Master to help you achieve professional-level results. It is specially formulated to thin lacquers and sealers, this high-quality thinner for the thing the paints, removing the polishes or unwanted coatings from the wood. It helps improve the flow and consistency of paint, making it easier to apply for a flawless finish. You can ideally use it with Master Paints wood lacquers and sealers. Thinner Wood Master is a must-have for both DIY enthusiasts and professionals looking for precision and quality for smooth paint application.Buy Thinner Wood Master online or check the prices and visit the stores for more details.   ",
   
    features: [
      "Improves flow and consistency",
      "Ideal for thinning paints",
      "Removes unwanted coatings",
      "Helps smooth and flawless paint application",
      "Suitable for both DIY projects and professional use",
    ],
    downloads: {
      ds: "/pdf/master/Wood Master NC Thinner.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;