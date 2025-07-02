"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "MAXPRO",
    image: "/berger/products/6.webp", 
    description: "MaxPro is a top quality paint, ideal for interior surfaces. It dries out to a smooth surface and flat finish which is durable and easily washable.",
   
    application:"All surfaces should be clean, free from dust, dirt and loose paint, and should be dried before applying the paint. New surfaces should be sand papered and brushed off using a bristle brush. It should then be coated with 2 coats of Berger Plastron Wall Primer Sealer or Berger Water Based Primer.",
    DryingTime:" 2-3 hours",
    Coverage:" 13 to 15 m2 per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;