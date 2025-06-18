// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponQ = () => {
  return (
    <BaseProductDetail
      productName="Nippon Q Seal Primer
"
      productImage="/Q-Seal-Solvent-Based-Primer-min.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">

            Nippon Q Seal is a solvent based primer specially formulated to provide excellent alkali resistance. It is a primer with good adhesion property. The sealer forms an excellent barrier coat against alkalinity for both new and already painted walls and gives a good surface for the painting of subsequent topcoat.
        </p>
          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">


   
   
 
  
</div>
        </div>}
      highlights={[
        
        // "Strong adhesion",
        // "Alkali resistance",
        // "Solvent based",

     
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
      technicalDataSheetUrl="/pdf/NPPK-Q-Seal-Solvent-Based-Primer.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponQ;