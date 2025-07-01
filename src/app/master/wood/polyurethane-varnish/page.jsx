"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Polyurethane Varnish",
    image: "/master/34.webp", 
    description: "Oil-based wood finish paints like Polyurethane varnish are always the best way to protect wooden surfaces. Master Polyurethane Varnish paint is designed for both interior and exterior use. It offers a strong shield against scratches, stains, water, and other damaging elements. Buy Polyurethane Varnish in Pakistan online and bring out the natural grain. It maintains the warm, amber tone of wood over time. Check master Polyurethane Varnish paint online. The varnish’s formula is easy to apply so it’s ideal for floors, furniture, doors, and more.  ",
   
    features: [
      "Shields wood from water and scratches",
      "Enhances wood grain",
      "Suitable for indoors/outdoors",
      "Multiple finishes for a custom sheen",
      "UV and heat-resistant",
      "Durable for wood ",

    ],
    downloads: {
      ds: "", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;