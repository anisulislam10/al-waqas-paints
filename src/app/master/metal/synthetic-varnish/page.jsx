"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Synthetic Varnish",
    image: "/master/42.webp", 
    description: "Our best synthetic varnish paint is an air-drying, solvent-based coating. It’s designed to protect and enhance wood and metal surfaces. Buy master synthetic varnish paint in Pakistan and get the high-gloss finish. First, it adds a sleek shine, then the varnish formula creates a hard, durable layer that resists abrasions. Our synthetic varnish also features heat-resistant properties. So, you can use our varnish for painting on surfaces exposed to heat like coasters and trays. By offering protection against UV rays and weather damage, it's ideal for both indoor and outdoor applications. It’s also compatible with synthetic enamels to further boost gloss levels. Buy synthetic varnish paint online and make your surfaces look fresh for years!",
   
    features: [
        "Abrasion resistant",
        "UV protection",
        "Fast drying",
      "Heat resistan",
      "Long-lasting gloss retention",
      "Interior & exterior use",

      "Strong adhesion",

    ],
 downloads: {
      ds: "/pdf/master/varnish.pdf", 
      sc: "", 
    }
  };


  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;