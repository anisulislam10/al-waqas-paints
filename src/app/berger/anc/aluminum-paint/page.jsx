"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Aluminum Paint",
    image: "/berger/products/27.webp", 
    description: "Aluminum Paint can be directly applied from the can after mixing the paste and the medium. If needed, it can be thinned down with mineral turpentine.",
   
    application:"Surface should be clean, dry and free from loose and flaking material. If required, it should be properly primed.",
    DryingTime:"4-6 hours",
    Coverage:" 2 to 4 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;