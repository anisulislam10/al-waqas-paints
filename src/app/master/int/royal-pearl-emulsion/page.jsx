"use client";

import BaseDetailPage from "../../../../components/master/BaseDetails";

const MasterRoyalPearl = () => {
  const product = {
    id: 1, 
    title: "Royal Pearl Emulsion",
    image: "/master/1.webp", 
    description: "Master Royal Pearl Emulsion, is a premium, water-based solution that offers a decent pearl finish for your interior surfaces. Designed for versatility, this exclusive paint is ideal for a range of interior masonry applications, including brickwork, plaster, cement rendering, and wall boards. Royal Pearl Emulsion stands out for its odorless formula, making it a perfect choice for residential, commercial, and office spaces where air quality is a priority. Additionally, its low VOC (volatile organic compound) content promises an environmentally friendly alternative, without compromising on quality and performance. The elegant, soft pearl finish helps you have a refined touch of luxury in any room. Royal Pearl Emulsion improves the aesthetics of your space and adds luxury to your walls. For those wishing to have a high-quality, versatile, and stylish interior solution, the Master Royal Pearl Emulsion is your go-to option. Decorate and protect your interiors with elegance and precision – experience the difference today.",
   
    features: [
      "Anti-bacterial",
      "Stain resistant",
      "Easy application",
      "Peal effect",
      "Luxury feel and texture",

    ],
    downloads: {
      ds: "/pdf/master/royal pearl emulsion_compressed.pdf", 
      sc: "/pdf/master/Royal-Pearl-Card_compressed.pdf",
    }
  };

  return <BaseDetailPage product={product} />;
};

export default MasterRoyalPearl;