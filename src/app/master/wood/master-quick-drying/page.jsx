"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Master Quick Drying",
    image: "/master/35.webp", 
    description: "Master Quick Drying is designed for quick and efficient projects. Its advanced formula uses special alkyd resins and selected pigments, allowing it to dry faster than regular paints. Buy master quick-drying paint online and complete your paint projects quickly. The high-gloss finish makes surfaces shine, giving a smooth and polished look. Master quick-drying paint offers flexibility to match any decor. This paint is more expensive due to its quick-drying technology but provides excellent value. The best part is that it dries in just 15 minutes and can be recoated in 2 hours. This feature makes it perfect for walls, ceilings, and furniture. Get an all-in-one solution for your painting needs with Master Quick Drying Paint in Pakistan.",
   
    features: [
      "Saves time",
      "Appealing finish",
      "Versatile for different wood types",
      "High productivity for fast projects",
      "Strong coverage with fewer applications",
      "Advanced resin for a smooth texture"
    ],
 downloads: {
      ds: "/pdf/master/Quick Drying Data Sheet_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;