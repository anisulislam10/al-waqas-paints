// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponSlate = () => {
  return (
    <BaseProductDetail
      productName="Nippon Slate Finish – Satin (Cementitious Surfaces)/Stones"
      productImage="/slate-finish-1.png"
      category="Special Surfaces"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">

Nippon Slate Finish – Satin (Cementitious Surfaces)/Stones
It is a solvent based acrylic coating which is specially formulated with UV additive to protect surface from staining, efflorescence and scratching.
        </p>

       <p className='text-xl text-black underline'> Recommended Uses:</p>

It is best used on interior and exterior slates, bricks, concrete, quarry or porous tiles, natural stones, artificial stones and cementations substrate.
          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">
 
   
 
  
</div>
        </div>}
      highlights={[
        
        "Enhances the color of material giving the surface fine lustrous/glossy finish",
        "Anti-scratching and efflorescence",
        "Good UV resistance",
        "Anti-fungus",

        "Consistent wet look",

        "Transparent in color",


     
      ]}
    //   features={[
    //     "Formaldehyde absorption technology",
    //     "Low odor formulation",
    //     "Excellent coverage and durability",
    //     "Easy application and smooth finish"
    //   ]}
    //   specifications={[
    //     { name: "Coverage", value: "12-14 sqm/litre" },
    //     { name: "Drying Time", value: "1-2 hours" },
    //     { name: "Recoat Time", value: "4-6 hours" },
    //     { name: "Finish", value: "Eggshell" }
    //   ]}
      technicalDataSheetUrl="/pdf/NPPK-Slate-Finish-Gloss_compressed.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponSlate;