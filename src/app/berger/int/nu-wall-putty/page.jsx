"use client";

import BaseDetailPage from "../../../../components/berger/BaseDetailsPage";

const BergerSilkEmu = () => {
  const product = {
    id: 1, 
    title: "NU Wall Putty",
    image: "/berger/products/13.webp", 
    description: "Berger NU Putty is a ready-to-use high quality putty for interior use only. It forms an ideal base to give a smooth finish for water based paints. It should not be used on exterior surfaces.",
   
    application:"Ready-to-use Berger NU Putty is highly recommended where smooth performance is required. Berger NU Putty is designed for use on cement surfaces, concrete, chipboard, plywood, etc.NOTE: It is recommended that Berger NU Putty should be coated with a thin coat of Berger Plastron Primer if the subsequent finish to be applied is VIP Super Gloss Robbialac Enamel or All-Rounder Matt Finish Enamel",
    DryingTime:"  2 hours ",
    Coverage:" 5-7 meter square per kg per coat",
  };

  return <BaseDetailPage product={product} />;
};

export default BergerSilkEmu;