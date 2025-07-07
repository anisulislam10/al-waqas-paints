// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Perfect Emulsion
"
      productImage="/Perfect-Emulsion.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
A premium quality acrylic-based emulsion specially designed to give a smooth luxurious finish to interior masonry surfaces, brickworks and wallboards. It is highly washable, has a smooth finish and its long lasting colours make it an ideal choice for interiors.


        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Anti-fungal",
        "High scrub resistance",
        "Luxurious smooth finish",
        "Fresh lemon fragrance"

     
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
      technicalDataSheetUrl="/pdf/NIPPON-PERFECT-EMULSION.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (6).pdf"
      
    />
  );
};

export default NipponHiBondWall;