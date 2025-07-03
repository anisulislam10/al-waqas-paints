"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SPECIAL THINER",
    image: "/berger/products/36.webp", 
    description: "Wood Pro Special Thinner is a semi-gloss transparent type high-build sealer that seals small fine wood pores. It is designed for use on production for furniture industry.",
   
    application:".",
    DryingTime:"3 to 6 hours",
    Coverage:"  13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;