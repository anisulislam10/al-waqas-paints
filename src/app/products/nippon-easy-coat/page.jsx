// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Matex Pro Emulsion - White Bucket
"
      productImage="/easy-coat-1.png"
      category=""
      productDescription={
        <div className="Nippon Easy Coat Emulsion">
          <p className="mb-4">
Nippon Easy Coat Emulsion
Nippon Easy Coat Emulsion is an economy emulsion with excellent brushing and levelling properties. It offers a wide range of cool and vibrant colour combinations. Nippon Easy Coat stands out as the best cost-effective choice.
        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Wide range of colours",
        "Economical",
        "Free of lead, mercury, chromium and cadmium compounds",

     
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
      technicalDataSheetUrl="/pdf/NIPPON-EASY-COAT-EMULSION_compressed.pdf"
      shadeCardsUrl="/pdf/Nippon-Quality-Emulsion_compressed (1).pdf"
      
    />
  );
};

export default NipponHiBondWall;