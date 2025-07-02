"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Weathercoat Exterior Putty",
    image: "/berger/products/21.webp", 
    description: "Weathercoat is a smooth water based masonry exterior paint. It contains tough flexible resin pigmented with titanium dioxide and light fast pigments. Its smooth finish has the highest degree of durability and is resistant to all types of weather conditions.",
   
    application:"Weathercoat is a smooth water based masonry exterior paint. It contains tough flexible resin pigmented with titanium dioxide and light fast pigments. Its smooth finish has the highest degree of durability and is resistant to all types of weather conditions.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 12 to 14 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;