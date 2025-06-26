"use client";

import BaseDetailPage from "../../../../components/dulux/BaseDetailPage";

const DuluxPromiseExteriorEmulsion = () => {
  const product = {
    id: 3,
    title: "Dulux Promise Exterior Emulsion",
    image: "/dulux/exterior/3.avif",
    description: "Dulux Promise Exterior Acrylic Emulsion is a highly durable, water-based emulsion paint. Its unique Anti-Peel formulation ensure that the paint film remains intact, and its extra Coverage Formula covers a longer area in the same quantity of paint. Chroma Brite UV Fight keeps exterior wall colour looking fresh for longer. Easy to apply, this emulsion also protects against fungal and algal growth giving your home a beautiful look that lasts longer.",
    keyInformation: {
      finish: "Matt",
      coverage: "13-15 m2/l/coat",
      dryingTime: "2-3 Hours between coats",
      coats: "4"
    },
    features: [
      "3 Years Performance Warranty",
      "Chromabrite Technology - Miraculously Brighter Longer",
      "Algae and Fungus Resistant",
      "High Opacity",
      "High Coverage",
      "Durabond Latex - Water Resistance and No Peeling",
      "Smooth Finish"
    ],
    applicationDescription: "Apply 3-4 coats of Dulux Promise Exterior Emulsion with 2-3 hrs of interval in between coats. Thinning ratio must be followed as per application procedure.",
    downloads: {
      sds: "/pdf/dulux/exterior/tds_promise_exterior_pk.pdf",
      tds: "/pdf/dulux/exterior/tds_promise_exterior_pk.pdf",
      warranty: "/pdf/dulux/exteriorpromise_exterior_tc.pdf"
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxPromiseExteriorEmulsion;