"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Elegance Interior Putty",
    image: "/berger/products/11.webp", 
    description: "ELEGANCE INTERIOR ACRYLIC PUTTY is a high-quality acrylic based ready-to-use putty for interior use. It forms the ideal base to give a smooth finish for water-based paints.",
   
    application:"ELEGANCE INTERIOR ACRYLIC PUTTY is used after the application of ELEGANCE ULTRASEAL-INTERIOR PRIMER. A coat of Primer is advised after the application of Putty. Remove all defective or poorly adhering material by rubbing with a suitable abrasive paper or stiff brush.",
    DryingTime:" 2 Hours, Over coating with finishing paint after 16 hours",
    Coverage:" 5-7m2 Per Kg Per Coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;