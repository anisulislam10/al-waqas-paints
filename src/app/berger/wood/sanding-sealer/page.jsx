"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Sanding Sealer",
    image: "/berger/products/31.webp", 
    description: "Wood Pro Sanding Sealer is a semi-gloss transparent type high-build sealer that seals small fine wood pores. It is designed for use on production for furniture industry.",
   
    application:"Thin 1:1 by volume with Thinner. Thin multi-coats are recommended instead of one thick coat. It can be over-coated with Wood Lacquer, Acid Catalysed Matt Lacquer or Polyurethane Lacquer.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10-12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;