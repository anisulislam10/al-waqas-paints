"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Weather Pro",
    image: "/berger/products/20.webp", 
    description: "Berger Weatherpro Acrylic Exterior Finish is a smooth, high quality exterior finish, especially formulated for the protection of all types of exterior plaster, asbestos, stone and brickwork..",
   
    application:"Berger Weatherpro Acrylic Exterior Finish is a smooth, high quality exterior finish, especially formulated for the protection of all types of exterior plaster, asbestos, stone and brickwork.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;