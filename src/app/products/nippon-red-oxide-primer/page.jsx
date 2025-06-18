// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponRed = () => {
  return (
    <BaseProductDetail
      productName="Nippon Red Oxide Primer"
      productImage="/Red-oxide-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">

Nippon Red Oxide Primer
Nippon Red Oxide Primer is an alkyd based primer used as an economical protective coating for iron and steel surfaces under non-immersion condition. It has anti-corrosive properties and gives a good adhesion to the top coat.
        </p>
          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">
 
   
 
  
</div>
        </div>}
      highlights={[
        
        "Anti-corrosive",
        "Strong adhesion",
        "Alkyd-based",

     
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
      technicalDataSheetUrl="/pdf/NIPPON-RED-OXIDE-PRIMER_compressed.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponRed;