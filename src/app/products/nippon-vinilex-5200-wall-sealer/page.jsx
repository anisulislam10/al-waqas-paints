// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponVinilexfive = () => {
  return (
    <BaseProductDetail
      productName="Nippon Vinilex 5100 Wall Sealer"
      productImage="/Vnilex-5100.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Vinilex 5200 Wall Sealer
5200 Wall Sealer is a styrene acrylic water-based wall sealer. It is specially formulated for interior walls to protect the finishing coats against the effects of mild alkalinity and moisture from the substrate.
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
   
 
  
</div>
        </div>}
      highlights={[
        
        // "Good efflorescence resistance",
        // "Good for new walls and repainting",
        // "For exterior use",

     
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
      technicalDataSheetUrl="/pdf/NPPK-Vinilex-5200-Wall-Sealer_compressed.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponVinilexfive;