"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Top Super Emulsion",
    image: "/berger/products/8.webp", 
    description: "Berger Top Super Emulsion is a top quality distemper. It covers more wall area than any other distempers and is therefore, very economical. ",
   
    application:"For thinning, mix equal volumes of Berger Top Super Emulsion and water. For porous surfaces, additional quantity of water may be necessary for the first coat in order to satisfy surface porosity. All equipment and brushes, etc. must always be cleaned with soap and water immediately after use. ",
    DryingTime:" 1 hours",
    Coverage:" 12 - 16 m2 per litre per coat.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;