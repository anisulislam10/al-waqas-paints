"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Knifing Filler",
    image: "/master/41.webp", 
    description: "Use top-rated knifing filler paint on items made of mild steel or cast iron to have an aesthetic finish. Master Knifing Filler Paste is a high-performance oil-based filler that is perfect for filling dents, scratches, and minor imperfections. It’s designed for both interior and exterior use. Buy knifing filler paint online in Pakistan to create a smooth base for top paint. This filler comes in ready-to-use form, providing a butter-like consistency for easy application. Check out Knifing filler paint prices in Pakistan on our site. It dries within 15-20 minutes, so you can finish motor vehicles, metal, and wood furniture projects quickly. Buy master knifing filler paint online and see its adhesion properties in real time!  ",
   
    features: [
        "Fast Drying",
        "Strong Adhesion",
        "Smooth Finish",
      "Easy Application ",
      "Indoor/Outdoor Use",
      "No Dilution Needed",
      "Reliable Durability",



    ],
 downloads: {
      ds: "/pdf/master/knifing filler_compressed.pdf",  
      sc: "", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;