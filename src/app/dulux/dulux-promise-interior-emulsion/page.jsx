"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const PromiseInteriorEmulsion = () => {
  const product = {
    id: 2,
    title: "Dulux Promise Interior Emulsion",
    image: "/dulux/11.avif",
    description:
      "Dulux Promise Interior has ChromaBrite Technology that keeps your home looking fresh and new for longer. The Washable and Easy Wipe formulation makes wiping away common household stains easier. Dulux Promise Interior also has Antibacterial and Anti-Fungus properties inhibiting the growth of bacterial and developing mould and fungus on the wall. Apply Dulux Promise Interior for miraculously brighter, safer and cleaner walls that last longer",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 m2/L/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "4",
    },
    features: [
      "3 Years Performance Warranty",
      "Anti-Bacterial",
      "Chromabrite Technology",
      "Easy Wipe & Washable",
      "Anti-Mould & Anti-Fungus",
      "High Opacity & Coverage",
    ],
    applicationDescription:
      "Apply 3-4 coats of Dulux Promise Interior Emulsion with 2-3 hours interval between coats",
    downloads: {
      sds: "/pdf/dulux/ds_pk_en_dulux_promise_interior_emulsion.pdf",
      tds: "/pdf/dulux/dulux-promise-interior-emulsion.pdf",
      warranty: "/pdf/dulux/promise_interior_tc.pdf",
    },
  };

  return <BaseDetailPage product={product} />;
};

export default PromiseInteriorEmulsion;