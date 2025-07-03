"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "PU LACQUER",
    image: "/berger/products/34.webp", 
    description: "Wood Pro Pu Lacquer is a single pack product. It gives a high gloss and is suitable for protection and decor on exterior and interior wooden doors, windows and allied items.",
   
    application:"Can either be sprayed or applied with pad over wood or wooden surface. For the first coat, dilute up to 25% with Timbercoat Thinner for good penetration. For a good glossy finish apply 2-3 coats.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10-12 meter square per litre per coat.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;