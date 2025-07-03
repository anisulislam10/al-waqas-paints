"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Sanding Sealer",
    image: "/berger/products/40.webp", 
    description: "Woodpro polyurethane 2k sanding sealer is a semi-gloss transparent type wood sealer designed for use on all kinds of wood surfaces to seal the mild scratches and pores of the surface.",
   
    application:"Woodpro polyurethane 2k sanding sealer is a semi-gloss transparent type wood sealer designed for use on all kinds of wood surfaces to seal the mild scratches and pores of the surface. After curing, polyurethane sanding sealer seals the surface and makes it impervious for moisture and other foreign intrusions that may absorb in the wood surface and harm or distort it. it is applied after filling and stains application on the surface. polyurethane sanding sealer must be over-coated with polyurethane gloss /matt polyurethane  wood finish.",
    DryingTime:" 1 - 3 hours",
    Coverage:" ",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;