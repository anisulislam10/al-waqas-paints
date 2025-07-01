"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Aluminium Silver",
    image: "/master/43.webp", 
    description: "Master high-performance aluminium metal silver paint provides a sleek, chrome-like finish while offering excellent protection. With advanced leafing aluminium pigment, this single-component paint is ideal for metal surfaces such as grills, gates, roofs, and pipes. Buy aluminium metal silver paint online to effectively guard against corrosion, discolouration, and mild heat damage. Master aluminium silver paint in Pakistan is perfect for both industrial and domestic uses. There’s no primer needed, and it’s resistant to mild chemicals and temperatures up to 95°F. The best aluminium silver metal paint in Pakistan ensures long-lasting durability. This paint is suitable for both interior and exterior applications. Use it and get a smooth, hard finish with a pearly sheen.  ",
   
    features: [
        "Heat resistant",
        "Full coverage",
        "Easy to apply",
      "Durable finish ",
      "Chemical resistant",
      "Strong adhesion",



    ],
 downloads: {
      ds: "/pdf/master/mixing Silver2_compressed.pdf",  
      sc: "", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;