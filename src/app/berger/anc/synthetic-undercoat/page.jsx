"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Synthetic Undercoat",
    image: "/berger/products/25.webp", 
    description: "Synthetic Undercoat is a solvent based undercoating for interiors and exteriors (wood surfaces).",
   
    application:"Apply with brush or spray. It is ready for use for brush application. If required, mineral or genuine turpentine may be added for thinning.",
    DryingTime:" 1 - 3 hours",
    Coverage:"10 to 12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;