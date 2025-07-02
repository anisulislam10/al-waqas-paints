"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU Emulsion",
    image: "/berger/products/9.webp", 
    description: "Berger NU Emulsion is a top quality distemper. It covers more wall area than other distempers and is therefore very economical.",
   
    application:"For thinning, mix equal volume of Berger NU Emulsion and water. For porous surfaces additional quantity of water may be necessary for the first coat in order to satisfy surface porosity. All equipment and brushes, etc. must always be cleaned with soap and water immediately after use.",
    DryingTime:"  1 hour",
    Coverage:" Berger NU Emulsion dries out in half an hour and can be recoated in 1 hour.",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;