"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Wall Putty",
    image: "/master/19.webp", 
    description: "Master Wall Putty is an acrylic wall putty paint designed to give walls a smooth, crack-free finish. It effectively fills pores and imperfections, providing an ideal surface for paint application. This putty also adds a protective layer that enhances the durability of your paint. It's easy to apply, quick to dry, and ensures the paint finish is flawless. Just know it maintains a professional look indoors only. You can buy the best wall putty online in Pakistan for the best results. We keep our wall putty paint price in Pakistan affordable without compromising on quality. Make a smart choice to beautify your walls and buy Master wall putty online in Pakistan.  ",
   
    features: [
      "Extends paint life ",
      "Protects from moisture",
      "Easy and fast-drying",
      "Affordable for indoors",
      "Maintains a neat look",
    ],
    downloads: {
        ds: "/pdf/master/Master Wall Putty_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;