// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Platone High Gloss Enamel"
      productImage="/platone-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Platone High Gloss Enamel
Nippon Platone High Gloss is a superior quality alkyd-based enamel paint, suitable for metal and wood surfaces (interior or exterior).

          </p>
          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">
  <div className="w-10 h-16"> {/* Icon container size */}
    <Image 
      src="/fungus_resistant.png" 
      alt="fungus_resistant"
      width={64}
      height={64}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>
 
  
</div>
        </div>}
      highlights={[
        
        "Long lasting and vibrant colors",
        "Very good resistance against harsh weather",
        "Very good resistance against corrosion on metals",
        "Anti-fungal"
     
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
      technicalDataSheetUrl="/pdf/NPPK-Platone-High-Gloss-Enamel-TDS-00000002_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (9).pdf"
    />
  );
};

export default Nippontilelac;