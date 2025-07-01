"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "N.C Duco Metallic",
    image: "/master/39.webp", 
    description: "N.C Duco Master is a top-quality gloss paint designed for both wood and metal surfaces. It’s similar to N.C. Duco Master but this one provides a sleek and shiny finish. You can buy NC Duco metallic paint online in 11 shiny metallic colors, such as Bright Gold, Black Metallic, and more! It’s known for its fast-drying properties. Additionally, it features self-leveling technology for a smooth application. Master N.C Duco Metallic paint in Pakistan has a high solid content. So, the coating has enhanced durability and water resistance. Whether you're working on furniture or metal fixtures, this versatile paint is a top choice for achieving a striking finish.  ",
   
    features: [
        "Efficient re-finishing",
        "Wood and metal surface application",
        "Multi-surface use",
        "deal for furniture projects",
      "Water-resistant properties",
      "Self-leveling",


    ],
 downloads: {
      ds: "",  
      sc: "/pdf/master/Duco-Metallic (1).pdf", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;