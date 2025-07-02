"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Weathercoat Glow 365",
    image: "/berger/products/18.webp", 
    description: "Weathercoat Glow 365 is one of the best exterior paint in Pakistan. it is an anti-fungal premium quality exterior emulsion specially formulated on Silane base pure acrylic resin. It comes with a rich sheen finish which enhances beauty of your home for longer period than normal.",
   
    application:"Weathercoat Glow 365 gives a highly durable exterior sheen finish to all types of masonry surfaces including Pebble dash. It is resistant to all kinds of adverse climatic and weather conditions hence providing long lasting protection for years.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;