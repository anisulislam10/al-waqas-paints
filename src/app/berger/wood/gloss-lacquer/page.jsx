"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "GLOSS LACQUER",
    image: "/berger/products/32.webp", 
    description: "Color Varnish is the state of the art wood coating system based on Polyurethane Resin for use as color top coat. It eliminates conventional wood stain application and gives brilliant top coat finish.",
   
    application:"",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10-12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;