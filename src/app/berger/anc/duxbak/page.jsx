"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Duxbak",
    image: "/berger/products/26.webp", 
    description: "Duxbak Water Repellent is a clear repellent for unpainted masonry surfaces. It penetrates deeply but permits the surface to breathe. Do not apply over glossy finish. It is impervious to moisture penetration.",
   
    application:"Apply DUXBAK in dry weather as approximately 16 hours are required for curing. If the surface becomes wet during this period, effectiveness of the treatment may be impaired. Apply by flooding the surface using a wide brush to cause run down of about 12 inches. This will ensure good impregnation. Duxbak may also be applied by conventional spray at lowest possible pressure.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 2 to 4 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;