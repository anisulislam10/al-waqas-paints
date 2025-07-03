"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "PLASTRON WALL PRIMER",
    image: "/berger/products/23.webp", 
    description: "Plastron Wall Primer Sealer holds back alkali and moisture in new plaster. It is ready for use; however, if required, mineral turpentine may be mixed with it but should not exceed 1 litre (1000 c.c.) per 4 litres.",
   
    application:"Apply two coats on plaster or rough cement render under 3 months old. Apply second coat without thinning.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10 to 12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;