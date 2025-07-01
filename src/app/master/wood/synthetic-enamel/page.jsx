"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Enamel",
    image: "/master/31.webp", 
    description: "Master Synthetic Enamel paint is a type of paint that can be used with any primer on wood, steel, and walls. It is a top-quality paint that provides a durable finish with any primer. The top-rated synthetic enamel metal paint gives a glossy appearance. Buy master synthetic enamel metal paint and pick from over 77 different colors online. Our best synthetic enamel metal paint is formulated with advanced technology that dries quickly through oxidation and polymerization. The result will be a tougher and smoother surface. Contact us for Synthetic enamel metal paint prices in Pakistan. Overall, it’ll be a budget-friendly move as it keeps the “painted” area resistant to rust, corrosion, and chemicals. ",
   
    features: [
      "Highly resistant",
      "Excellent color retention over time",
      "High gloss finish",
      "Non-toxic",
      "Easy to clean",
      "Lightfast pigments",

    ],
    downloads: {
      ds: "/pdf/master/Synthetic Enamel12_compressed.pdf", 
      sc: "/pdf/master/Synthetic-Enamel.pdf", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;