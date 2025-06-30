"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterPlastic = () => {
  const product = {
    id: 1, 
    title: "Royal Exterior Silk Emulsion",
    image: "/master/8.webp", 
    description: "Master Paints offers the quality mid sheen emulsion paints known as Royal Silk Emulsions. You can give your exteriors a glossy finish with Royal Exterior Silk Emulsion. This top-rated exterior paint delivers a smooth, silk-like texture that resists harsh weather conditions, keeping your walls looking fresh and elegant with a shiny finish. Looking for an easy place to buy Royal Exterior Silk Emulsion? We help you buy Master Royal Exterior Silk Emulsion online today! With competitive prices in Pakistan, this premium paint gives you exceptional coverage and durability. Choose Royal Exterior Silk Emulsion for a quality, long-lasting finish that stands out. Purchase yours now and enhance the beauty of your home’s exterior.",
   
    features: [
      "Long Lasting",
      "Full Coverage",
      "Glossy Look",
      "Shiny Finish",
      "Weather Resistant",
    ],
    downloads: {
      ds: "", 
      sc: "",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterPlastic;