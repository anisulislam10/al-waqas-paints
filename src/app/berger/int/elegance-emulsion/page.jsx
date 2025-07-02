"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Elegance Emulsion",
    image: "/berger/products/2.webp", 
    description: "Elegance Matt Emulsion is top quality acrylic-based emulsion paint, ideal for interior surfaces. It dries out to a smooth finish which is durable and easily washable. It is one of the best matt emulsion paint.",
   
    application:"Elegance Matt Emulsion can be applied with brush, roller or spray. Add 3 to 4 litres of water to one gallon of paint before use. For final coat, some extra water may be added to improve flow. Clean all equipment and brushes with water soon after use.",
    DryingTime:" 1 - 3 hours",
    Coverage:" covers 14 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;