"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SPD Wall Putty",
    image: "/berger/products/12.webp", 
    description: "SPD Wall Putty is a ready-to-use high quality putty, which forms a smooth finish. Wall Putty should be used on interior walls only. It is designed for use on cement surfaces, chipboard, plywood, etc.",
   
    application:"SPD Wall Putty is a ready-to-use product which, after application. should be sand-papered to a smooth finish.",
    DryingTime:"  1 hour",
    Coverage:" B5 to 7 meter square per kg per coat.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;