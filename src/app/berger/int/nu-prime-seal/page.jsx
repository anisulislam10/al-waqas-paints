"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU Prime Seal",
    image: "/berger/products/16.webp", 
    description: "Berger NU Prime Seal is formulated to resist alkali and moisture present in the new plaster surfaces. It forms a tough and flexible film which prevents passage of moisture from the substrate through the paint film. Before the application of Berger NU Prime Seal, it is essential that the surface to be painted should by dry and free from grease and dust. It is for interior use only.",
   
    application:"NU Prime Seal can be applied by thinning (1:1) with water by volume for brush application (depend on surface absorbency). For better result apply two coats of NU Prime Seal. For previously painted old surfaces, remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush. To smoothen the surface, Berger wall Putty can be applied after the application.",
    DryingTime:" 2-3 hours.",
    Coverage:"12-14m2 per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;