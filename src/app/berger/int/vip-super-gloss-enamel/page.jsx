"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "VIP SUPER GLOSS ENAMEL",
    image: "/berger/products/5.webp", 
    description: "VIP Super Gloss Enamel is a top quality synthetic enamel coating for interior and exterior use. It may be applied on prepared primed surfaces such as wood, metal, cement plaster, asbestos, cement sheets and hard board, etc.",
   
    application:"Apply with brush, roller or spray. For application, thin with approximately 10% mineral turpentine per gallon.",
    DryingTime:" 1 to 3 hours",
    Coverage:"  13 to 15 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;