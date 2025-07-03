"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Advance Polyurethane 2k Thinner",
    image: "/berger/products/41.webp", 
    description: "WOODPRO POLYURETHANE 2K THINNER is a unique formula formulated for wood related polyurethane products 2K paint application in all type of weather conditions and all seasons for interior and exterior.",
application:"•     Use protective equipment while application e.g. Apron, Gloves, Protective Glasses and Dust Mask. It is highly flammable material.    Ensure adequate ventilation during application. Avoid contact with eye and skin In case of Eye Splashes, consult medical advice. Avoid Swallow, In case of ingestion, immediately consult a physician.   Store the product below 40 °C and avoid   direct sunlight for a longer period.  ",
    DryingTime:" 1 - 3 hours",
    Coverage:" ",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;