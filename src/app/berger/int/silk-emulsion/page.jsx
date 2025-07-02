"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Silk Emulsion",
    image: "/berger/products/1.webp", 
    description: "Berger Silk Emulsion is a high quality acrylic emulsion. It has hiding power and color retention properties. It is a low odor emulsion with high stain resistance, outstanding water resistance, anti-fungal properties, excellent coverage and outstanding washability. It is a premium quality decorative paint which gives an attractive silk luster.Freshly painted room with Berger Silk Emulsion can be reoccupy in 2-3 hours after painting. It has low maintenance coating and stain beading effect formulation. It is an environment friendly paint.",
   
    application:"Berger Silk Emulsion is used on interior surfaces, such as plaster, concrete, gypsum, brick work, asbestos, chip board and hard board etc. Stir well before use It is recommended to apply Berger Silk Emulsion by roller or spray only. For roller application dilute 20 ~ 30% with clean tap water by volume. For spray application dilute 30 ~ 40% with clean tap water by volume. Diluted paint must be mixed well before use. Do not leave the diluted paint for more than one day.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 12-16 meter square per liter per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;