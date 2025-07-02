"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Elegance Ultra Seal",
    image: "/berger/products/14.webp", 
    description: "Berger Elegance Ultraseal Water Based Primer is formulated to resist alkali and moisture present in the new plaster surfaces. It is formulated to fill the pores, strengthen the surface and to increase the coverage of subsequent coats. It forms a tough and flexible paint film. It is for interior use only.",
   
    application:"Berger Elegance Ultraseal Water Based Primer can be applied by thinning (1:1) with water by volume for brush application (depending upon surface absorbency). For better results apply two coats of Berger Elegance Ultraseal Water Based Primer.For previously painted old surfaces, remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush. To smoothen the surface, Berger Wall Putty can be applied after the application of Berger Elegance Ultraseal Water Based Primer.",
    DryingTime:" 2-3 hours.",
    Coverage:"12-14m2 per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;