"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Red Oxide Primer",
    image: "/berger/products/24.webp", 
    description: "Red Oxide Primer is an anti-corrosive primer for prepared surfaces. Surface must be clean from scales, rust, oil and grease.",
   
    application:"Apply with brush directly from the can. If necessary, mineral turpentine may be added for thinning. At Berger Paints, we understand that preparing your surface properly is crucial for a flawless result. Our red oxide paint is easy to apply with a brush, straight from the can, offering professional-grade protection with minimal effort. In cases where thinning is needed, mineral turpentine can be added to achieve the desired consistency. Designed for a smooth, non-absorbent surface, one liter of our primer covers approximately 10 to 12 square meters per coat, ensuring cost-effective application without compromising on quality.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 10 to 12 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;