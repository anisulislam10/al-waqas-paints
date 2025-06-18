// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Hi-Bond Wall Primer
"
      productImage="/Hi-bond.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Hi-Bond Wall Primer
Nippon Hi-Bond Wall Primer is a solvent-based primer that is specially formulated to provide excellent alkali resistance. It forms an excellent barrier coat against alkalinity for both new and already painted walls and provides a good smooth surface for the painting of a subsequent topcoat.

        </p>
          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">
  <div className="w-10 h-16"> {/* Icon container size */}
    <Image 
      src="/good_alkaline_effloresence_resistance.png" 
      alt="good_alkaline_effloresence_resistance"
      width={64}
      height={64}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>

   <div className="w-10 h-16"> {/* Icon container size */}
    <Image 
      src="/excellent_adhesion.png" 
      alt="excellent_adhesion.png"
      width={64}
      height={64}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>
   
 
  
</div>
        </div>}
      highlights={[
        
        "Strong adhesion",
        "Alkali resistance",
        "Solvent based",

     
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
      technicalDataSheetUrl="/pdf/HI-BOND-WALL-PRIMER_compressed.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponHiBondWall;