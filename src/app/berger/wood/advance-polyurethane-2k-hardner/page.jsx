"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Hardner",
    image: "/berger/products/38.webp", 
    description: "WOODPRO POLYURETHANE 2K HARDENER is a high quality Isocyanate based Hardener for curing of 2 Pack PU based, PU Topcoats and 2-Pack PU Clear coats which provides an excellent wet look appearance.",
   
    application:"WOODPRO POLYURETHANE 2K HARDENER is a high quality Isocyanate based Hardener for curing of 2 Pack PU based, PU Topcoats and 2-Pack PU Clear coats which provides an excellent wet look appearance. It gives a very high quality smooth, glossy, hard and durable finish when used with 2-Pack.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10-12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;