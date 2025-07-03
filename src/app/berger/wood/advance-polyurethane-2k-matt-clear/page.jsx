"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Matt Clear",
    image: "/berger/products/39.webp", 
    description: "Woodpro polyurethane 2k Matt clear is a matt transparent wood finish designed for use on all kinds of wood surfaces.",
   
    application:"Woodpro polyurethane 2k Matt clear is a matt transparent wood finish designed for use on all kinds of wood surfaces. After curing, polyurethane  clear wood matt finish seals the surface and makes it impervious for moisture and other foreign intrusions that may absorb in the wood surface and harm or distort it.  it gives high gloss and it is suitable for protection and decor of exterior and interior wooden surfaces.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10-12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;