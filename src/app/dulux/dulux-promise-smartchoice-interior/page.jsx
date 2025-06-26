"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxPromiseInteriorPutty = () => {
  const product = {
    id: 43,
    title: "Dulux Promise SmartChoice Interior",
    image: "/dulux/43.avif",
    description: "Dulux Promise Smart Choice Interior is an acrylic-based emulsion paint formulated with finest pigments that offer a superior hiding and smooth finish than normal paints.Its extra coverage formula covers a wider area in the same quantity of paint while providing your interior a beautiful long-lasting finish",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 Sq.M/L",
      dryingTime: "2-3 Hours between coats",
      coats: "4"
    },
    features: [
      "High Coverage",
      "Smooth Finish",
      "Low Odour",
      "Low VOC",
      "No Added Lead or Mercury",


    ],
    applicationDescription: "Apply 2 coats of Putty and leave for 2-3 hours between coats",
    downloads: {
      sds: "/pdf/dulux/sds_smartchoice_interior.pdf", 
      tds: "/pdf/dulux/smart_choice_tds_interior_1.pdf", 
      warranty: "/pdf/dulux/sds_smartchoice_interior.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseInteriorPutty;