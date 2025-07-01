"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Metallic",
    image: "/master/36.webp", 
    description: "Synthetic Metallic paints are tougher, thicker, and often shine more than other types. Try Master Synthetic Metallic for a long-lasting finish on all wooden and metal surfaces. Our top-rated synthetic metallic metal finish paint's formula is perfect for indoors and outdoors. It features a unique alkyd resin blend with strong pigments that look shiny while protecting the surface against rust, moisture, and mild chemicals. Buy online metallic metal finish paint, and see synthetic metallic metal finish paint prices in Pakistan based on colors. It’s a good investment as this type of paint is resistant to fading. Master synthetic metallic metal finish paint is available in various colors like Golden Dust, Sparkling Silver, and Ocean Blue. ",
   
    features: [
      "High opacity",
      "Lead-free formulation",
      "High Gloss Finish",
      "Resistance to Mild Chemical Fumes",
      "Abrasion Resistance",
    ],
 downloads: {
      ds: "", 
      sc: "/pdf/master/Synthetic Metallic (2).pdf", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;