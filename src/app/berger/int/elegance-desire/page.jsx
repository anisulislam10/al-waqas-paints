"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Elegance Desire",
    image: "/berger/products/3.webp", 
    description: "Elegance Desire is a high-quality stain-resistant interior emulsion specially formulated to give a smooth elegant silk finish. Its unique antifungal properties protect the walls from fungus and algae. It is highly washable and has excellent dirt streak resistance to protect your walls.",
   
    application:"Elegance Desire can be applied with brush, roller or spray. It is applied by thinning water. For roller application 25% of water has to be used and for brush application 55-80% water has to be used. Before application, a coat of Berger interior water based primer is recommended. Clean all equipment and brushes with water soon after use.",
    DryingTime:" 1 - 3 hours",
    Coverage:" 13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;