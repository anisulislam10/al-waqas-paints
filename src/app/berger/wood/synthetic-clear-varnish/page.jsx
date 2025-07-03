"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SYNTHETIC CLEAR VARNISH",
    image: "/berger/products/35.webp", 
    description: "Wood pro Synthetic Clear Varnish is a top-quality Alkyd varnish. It has maximum spread and is excellent for making putty.",
   
    application:"Wood pro Synthetic Clear Varnish can be applied ready for use with brush. For spray, it can be thinned as necessary with mineral or genuine turpentine. Apply the varnish in good drying conditions as free from dust as possible. Synthetic Clear Varnish may be applied coat on coat. However, before the second coat is applied, the first coat should be allowed to dry thoroughly. When re-varnishing, clean and rub down previous varnish coats. Old perished varnish should be stripped with paint stripper.",
    DryingTime:"3 to 6 hours",
    Coverage:"  13 to 16 meter square per litre per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;