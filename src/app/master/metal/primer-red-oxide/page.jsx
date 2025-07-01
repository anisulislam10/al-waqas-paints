"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Primer Red Oxide",
    image: "/master/40.webp", 
    description: "Master Red Oxide Primer metal paint is a solvent-based coating formulated to protect iron and steel surfaces from rust.  Our top-rated primer red oxide metal paint has anti-corrosive properties for long-lasting protection. Its alkyd resin base provides strong protection which makes it ideal for gates, railings, and outdoor equipment. Buy primer red oxide metal paint online and apply it directly onto rusty surfaces. Primer red oxide metal paint price in Pakistan provides a stable base for topcoats once dry. Designed for exterior use, it holds up well against sunlight and harsh weather. Use the best primer red oxide metal paint on ferrous metals both indoors and outdoors. ",
   
    features: [
        "Heat reflective",
        "Weather resistant",
        "Long-lasting",
        "Anti-corrosive",
      "Ideal for exteriors",
      "Full coverage",
      "Easy application",



    ],
 downloads: {
      ds: "",  
      sc: "/pdf/master/Master Primer Red oxide3_compressed.pdf", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;