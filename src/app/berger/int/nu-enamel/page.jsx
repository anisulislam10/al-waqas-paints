"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU ENAMEL",
    image: "/berger/products/10.webp", 
    description: "Berger NU Enamel is a good quality enamel for interior and exterior use. It provides protection and decoration to the surface under all conditions. It is a high gloss, highly durable enamel with ease of application.",
   
    application:"Berger NU Enamel is suitable for both interior and exterior surfaces. It can be applied on prepared, primed surfaces such as wood, metal, cement plaster, asbestos, hardboard, etc.",
    DryingTime:"  1 hour",
    Coverage:" Berger NU Emulsion dries out in half an hour and can be recoated in 1 hour.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;