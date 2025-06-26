"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxPromiseInteriorPutty = () => {
  const product = {
    id: 20,
    title: "Dulux Promise Interior Putty",
    image: "/dulux/29.jfif",
    description: "Dulux Promise Putty (water based) is ready to use filler that has an excellent whiteness, coverage and application properties. Its high quality filling properties has made it ideal for use on all types of interior masonry surfaces. It provides a smooth base for top coat application of all Decorative products. Dulux Promise Putty is not recommended for exterior use.",
    keyInformation: {
      finish: "Matt",
      coverage: "4-6m2/kg/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "2"
    },
    features: [
      "High Coverage",
      "Comfortable Application"
    ],
    applicationDescription: "Apply 2 coats of Putty and leave for 2-3 hours between coats",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_diamond_glo.pdf", 
      tds: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_diamond_glo.pdf", 
      warranty: "/pdf/dulux/xx_pk_en_dulux_ambiance_velvet_touch_diamond_glo.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseInteriorPutty;