// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponRed = () => {
  return (
    <BaseProductDetail
      productName="Nippon Quality Primer"
      productImage="/Q-Primer-Edited.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">

Nippon Quality Primer
Nippon Quality-Primer Wall Sealer is an acrylic water based wall sealer. It is specially formulated for interior walls to prime the surface and protect finishing coats against the effects of mild alkalinity and moisture from the substrate.
        </p>
          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">
 
   
 
  
</div>
        </div>}
      highlights={[
        
        // "Anti-corrosive",
        // "Strong adhesion",
        // "Alkyd-based",

     
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
      technicalDataSheetUrl="/pdf/QUALITY-PRIMER_compressed.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponRed;