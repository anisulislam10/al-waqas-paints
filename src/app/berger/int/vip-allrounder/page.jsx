"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "VIP Allrounder",
    image: "/berger/products/4.webp", 
    description: "Berger All-Rounder Matt Enamel is a high quality paint especially formulated and designed to give a smooth matt finish. It is ideal for walls, ceilings, old and new cement plasters, woodwork, metal, chipboards and hardboards.",
   
    application:"Berger All-Rounder Matt Enamel can be applied by brush, roller or spray. It may be thinned up to 10% by using good quality mineral turpentine (white spirit). Final coat may further be thinned slightly to get improved leveling and appearances.",
    DryingTime:" 2 to 3 hours",
    Coverage:"  13-15m² per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;