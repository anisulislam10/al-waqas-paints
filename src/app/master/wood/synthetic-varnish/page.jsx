"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Varnish",
    image: "/master/29.webp", 
    description: "Beautify and protect your wooden surfaces with a glossy, durable finish using Synthetic Varnish from Master Paints. The synthetic varnish gives a high-quality protective layer to your paintings, wooden components or decoration pieces. This premium varnish creates a protective layer that guards against moisture, stains, and scratches, increasing the life span of your furniture, doors, and woodwork. Its quick-drying formula provides a beautiful, high-gloss finish that enhances the natural grain of the wood, making it look fresh and polished for years to come.Whether you're refinishing old wooden projects or adding the final touch to a new wooden work, buy Synthetic Varnish online and enjoy superior quality and lasting protection for your wood. ",
   
    features: [
      "High-gloss finish ",
      "Protects against moisture, stains, and scratches",
      "Quick-drying formula ",
      "Increases the lifespan of wooden objects",
      "Long-lasting wood protection",
    ],
    downloads: {
      ds: "/pdf/master/varnish_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;