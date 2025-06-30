"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Roof Master",
    image: "/master/10.webp", 
    description: "Roof Master is a protective coat paint product of Master paints that protects and cools masonry work from any wind, leakages and seepages, while reflecting back the heat. It is specially formulated to reflect heat and shield your roof from the elements, Roof Master ensures your home stays cooler during hot months. Looking for the best roof paint price in Pakistan, get in touch with us.  Roof Master offers exceptional value, combining durability with advanced heat-reflective technology. Whether you're comparing roof coating paint prices or searching for affordable roof cooling solutions, Roof Master is your go-to choice. Buy Roof Master paint in Pakistan today and enjoy premium protection at a competitive price. Keep your roof strong and your home cool with Roof Master.",
   
    features: [
      "Heat Reflective Properties",
      "Weather Resistant",
      "Energy Saving",
      "Durable",
      "Full Coverage",
      "Easy Application",

    ],
    downloads: {
      ds: "/pdf/master/Roof Master_compressed.pdf", 
      sc: "", 
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;