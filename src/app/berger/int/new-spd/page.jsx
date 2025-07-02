"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "New SPD",
    image: "/berger/products/7.webp", 
    description: "SPD is a top quality smooth emulsion. It can be used on walls, ceilings, old and new cement, concrete, plasters, chipboard and hardboard.",
   
    application:"Mix equal or more volume of water for thinning. Final coat should be thinned more for a smoother finish.",
    DryingTime:" 2-3 hours",
    Coverage:" 11 to 15 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;