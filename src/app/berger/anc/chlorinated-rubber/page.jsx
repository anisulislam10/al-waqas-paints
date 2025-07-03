"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Chlorinated Rubber Base Paint",
    image: "/berger/products/30.webp", 
    description: "Chlorinated Rubber Base Paint is compounded from plasticised, chlorinated rubber and specially selected pigments. It is far more impermeable to water and water vapours than any oil or varnish-based paint. Therefore, it makes metal surfaces corrosion resistant.",
   
    application:"Chlorinated Rubber Base Paint is a one-pack product, which is suitable for application throughout the year. Pre-treatment of surfaces prior to painting is necessary. It dries by evaporation and can be applied at low temperatures (35˚ to 40˚F) without damage to the film, provided the surface is dry at the time of painting.",
    DryingTime:" an hour and is recoatabale after 16 hours.",
    Coverage:"8 to 10 meter square per litre per coat.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;