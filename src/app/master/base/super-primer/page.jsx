"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "uper Primer",
    image: "/master/23.webp", 
    description: "Master Super Primer is a high-performance acrylic primer that works on multiple surfaces. It creates a strong barrier that protects against water damage and seepage, ensuring a longer life for your paint job. Our top-rated super primer paint provides excellent sealing and adhesion on cement, brick, and plaster surfaces. Its PVA-based formula strengthens interior surfaces while resisting alkali and moisture, especially on new plaster. Finish your projects within a day as it dries quickly, allowing you to recoat in just a few hours. Buy the best super primer paint in Pakistan online for a new project or to refresh an old surface. Check out the super primer paint price in Pakistan.  ",
   
    features: [
      "Waterproof seal",
      "Works on various surfaces (like cement and plaster)",
      "Dries quickly (in 2-3 hours)",
      "Improves paint strength",
      "For indoor and outdoor use",
    ],
    downloads: {
        ds: "/pdf/master/super primer_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;