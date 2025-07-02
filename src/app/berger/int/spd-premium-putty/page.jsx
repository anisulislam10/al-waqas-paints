"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "SPD Premium Putty - White Cement Based",
    image: "/berger/products/17.webp", 
    description: "For the best results, new surfaces should be clean, dry, and free from oil, grease, dust and dirt. For previously painted surfaces remove all old paint which is loose and flaky and clean any oil or grease. Wet the surface before applying Berger SPD – White Cement Based Premium Putty.",
   
    application:"Add 1:2 ratio of water in a bucket and add Berger SPD – White Cement Based Premium Putty and mix properly. For instance, add 2 liters of water to make 4 kg & add 10 liters of water to make 20 kg and mix accordingly.Apply first coat of Berger SPD – White Cement Based Premium Putty with a putty blade directing from downside to upside. For second coat, first use a sand paper or scraper to clean the first coat, then apply the putty from right side to left side. Let it dry for 24 hours & apply paint the next day.",
    DryingTime:"  within 4 hours in summers & 8 hours in winters.  ",
    Coverage:" 5-7 meter square per kg per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;