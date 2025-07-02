"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Weathercoat Pure Seal",
    image: "/berger/products/22.webp", 
    description: "WEATHERCOAT PURE SEAL - Exterior Primer is a Water-based Acrylic Primer specially formulated to resist alkali and moisture present in the new plaster surfaces. It forms a tough and flexible film which prevents passage of moisture from the substrate through the paint film.",
   
    application:"Berger Exterior Putty can be applied after the application of Weathercoat Pure Seal - Exterior Primer.Remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush.",
    DryingTime:" 2 to 3 hours",
    Coverage:" 16-18 m2 per liter per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;