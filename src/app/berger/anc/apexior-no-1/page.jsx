"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Apexior No. 1",
    image: "/berger/products/28.webp", 
    description: "Apexior No. 1 is an anti-corrosive coating for internal surfaces of boiler drums, tubes, water walls, economisers, steam accumulators, etc.",
   
    application:"No separate primer is necessary. One coat of Apexior No. 1 should be applied with brush directly to clean steel. Work well into the surface and ensure all corners, edges, welded nuts/bolts are covered. Allow approximately 6 to 8 hours at 20˚C before overcoating. Apply further 2 coats of Apexior No. 1 with brush or roller, allowing 6 to 8 hours between coats. After applying the last coat, allow 12 to 16 hours for drying to permit solvent evaporation from the system. At this point, the coating will be dry but not cured or water-resistant. It is essential for coating performance that tank or boiler should be filled with water, and water temperature raised to above 100˚C (212˚F) for a minimum 5 hours period. This has the effect of baking the Apexior, thus producing an inert, insoluble and impermeable film.",
    DryingTime:"6 to 8 hours",
    Coverage:"8 to 10 meter square per litre at 38 microns ",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;