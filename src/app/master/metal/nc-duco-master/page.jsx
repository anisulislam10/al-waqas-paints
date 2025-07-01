"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "N.C Duco Master",
    image: "/master/38.webp", 
    description: "N.C. Duco Master is an excellent choice for quick and effective refinishing, especially for automobiles. The Top-rated N.C. Duco master metal paint, also known as automotive paint, Duco is a Nitrocellulose (NC) Lacquer that is waterproof. Aside from vehicle refining, this paint can breathe new life into wooden furniture and other surfaces, providing a high-quality finish. Buy master NC Duco metal paint in Pakistan and get polished appearances on cabinets, vehicles, and more! N.C. Duco Master dries quickly, retains its color well, and has self-leveling properties. Its premium finish can be glossy or matte, depending on youtube taste. See the NC Duco master metal paint price list after picking out a color. ",
   
    features: [
      "Quick-drying ",
        "Water-resistant",
        "Multi-surface use",
      "Available in many colors ",
      "Long-lasting color",

    ],
 downloads: {
      ds: "/pdf/master/n.c duco master1_compressed.pdf",  
      sc: "/pdf/master/Duco-Master_compressed.pdf", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;