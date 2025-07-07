// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Quality Emulsion
"
      productImage="/Group-12966.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Quality Emulsion
Nippon Quality Emulsion is a styrene acrylic based emulsion with smooth flat finish designed for interior concrete surfaces including walls and ceilings. It gives good hiding and covering with a wide range of long lasting colours.
        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Good levelling",
        "Highly durable",
        "Better hiding power and coverage",
        "Free of lead, mercury, chromium and cadmium compounds"

     
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
      technicalDataSheetUrl="/pdf/Nippon-Quality-Emulsion_compressed.pdf"
      shadeCardsUrl="/pdf/Q-Interior-Emulsion-SC-2021.pdf"
      
    />
  );
};

export default NipponHiBondWall;