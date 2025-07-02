"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "VIP Weathercoat",
    image: "/berger/products/19.webp", 
    description: "Weathercoat is a smooth water based masonry exterior paint. It contains tough flexible resin pigmented with titanium dioxide and light fast pigments. Its smooth finish has the highest degree of durability and is resistant to all types of weather conditions.",
   
    application:"Apply with brush, roller or spray. It can be thinned down with equal volume of water for application. Do not over-thin.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 12 to 14 meter square per litre per coat,",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;