"use client";

import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const DuluxWoodcareSpecialThinner = () => {
  const product = {
    id: 39, // Next sequential ID
    title: "Dulux Woodcare Special Thinner",
    image: "/dulux/39.jpg", // Update with actual image path
    description: "Dulux Woodcare Special Thinner has the quality and strength to make all Woodcare products to be soluble to their maximum.",
    keyInformation: {
      finish: "Matt"
    },
    features: [
      "No Added Lead or Mercury"
    ],
    downloads: {
      sds: "/pdf/dulux/pk_khatoa01_t2190041_0383326a2_english_gb_20221205_dulux_wc_thinner.pdf", // From page content
      tds: "/pdf/dulux/tds_woodcare_special_thinner_pk.pdf", // From page content
      warranty: "/pdf/dulux/pk_khatoa01_t2190041_0383326a2_english_gb_20221205_dulux_wc_thinner.pdf" // Update with actual path
    }
  };

  return <BaseDetailPage product={product} />;
};

export default DuluxWoodcareSpecialThinner;