"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "MATT LACQUE",
    image: "/berger/products/33.webp", 
    description: "Wood Pro Matt Lacquer is available for a high gloss finish with good build for tough and lasting film. It is designed for use on production for furniture industry",
   
    application:"Thin 1:1 by volume with Thinner. It can also be sprayed and applied with cloth pad over wood or wooden surfaces. Thin multi coats are recommended instead of one thick coat.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10-12 meter square per litre per coat.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;