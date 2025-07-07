// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Momento – Pearl Frost

"
      productImage="/Momento-Special-Effect-sparkle-pearl.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Momento – Pearl Frost
Momento Sparkle let’s you recreate intricate works of Italian craftsmanship in your home with its distinctive special effects that turn ordinary walls into extraordinary masterpieces. Momento Sparkle is formulated with low VOC, contains no lead or mercury and formaldehyde-free. 
        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Adds a dash of glitz to walls for a finish that sparkles like a gem",
        "Hides unevenness of the wall surface",
        "Low odour, environmental friendly",

     
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
      technicalDataSheetUrl="/pdf/NPPK-TDS-Momento-1.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (8).pdf"
      
    />
  );
};

export default NipponHiBondWall;