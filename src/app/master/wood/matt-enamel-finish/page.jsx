"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Matt Enamel Finish",
    image: "/master/30.webp", 
    description: "If you're looking for long-lasting paint that protects your wood surfaces, master matt enamel finish paint is a great option. Buy master matt enamel finish paint online to get a smooth and elegant finish without shine. Its alkyd-based formula makes it resistant to moisture and stains. Cleaning the best matt enamel finish paint is easy! Perfect for wood, this paint adds a protective layer against water, scratches, and daily wear. Its Akali resistance makes it perfect for high-use areas like kitchens and bathrooms. Available in a variety of shades, it enhances both interior and exterior wood surfaces with excellent coverage. Contact us to find out the master matt enamel finish paint price in Pakistan.",
   
    features: [
      "Top-rated matt enamel finish",
      "Anti-fungal ",
      "Easy to clean",
      "Works well on wood, metal, and walls",
      "Suitable for high-use areas",
      "Provides a matte finish",

    ],
    downloads: {
      ds: "/pdf/master/Matt Enamel12_compressed.pdf", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;