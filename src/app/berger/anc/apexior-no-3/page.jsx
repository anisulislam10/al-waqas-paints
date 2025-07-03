"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "Apexior No. 3",
    image: "/berger/products/29.webp", 
    description: "Apexior No. 3 is an anti-corrosive coating for external surfaces of boilers, condensers, chimneys, etc.",
   
    application:"Normally, no separate primer is necessary. If, however, blast cleaning is carried out then holding primer of Epilux 66 Primer to 25 microns must be applied. For the finishing coat, apply 3 coats of Apexior No. 3, either with brush or roller. It is advisable to allow 24 hours between coats and a minimum of 24 hours after complete application to allow system to harden. Adequate ventilation must be provided at all times.",
    DryingTime:"3 to 4 hours",
    Coverage:"9 to 12 meter square per litre at 38 microns ",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;