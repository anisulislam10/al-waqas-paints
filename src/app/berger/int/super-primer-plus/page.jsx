"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Super Primer Plus",
    image: "/berger/products/12.webp", 
    description: "Berger Super Primer is formulated to resist alkali and moisture present in the new plaster surfaces. It forms a tough and flexible film which prevents passage of moisture from the substrate through the paint film. Before the application of Berger Super Primer, it is essential that the surface to be painted should be dry and free from grease oil and dust. It is for interior use only.",
   
    application:"Berger Super Primer can be applied by thinning (1:1) with water by volume for brush application (depend on surface absorbency). For better results apply two coats of Berger Super Primer. For previously painted old surfaces, remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush. To smoothen the surface, Berger Wall Putty can be applied after the application of Berger Super Primer.",
    DryingTime:" 2-3 hours.",
    Coverage:" 12-14 m2 per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;