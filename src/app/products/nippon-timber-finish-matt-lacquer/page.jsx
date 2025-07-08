// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Timber Finish Matt Lacquer"
      productImage="/Matt-Lacquer.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Timber Finish Matt Lacquer
Nippon Timber Finish Matt Lacquer is a premium quality topcoat NC Matt Lacquer for sealed wood surfaces which provides hard, scratchproof and matt Finish. Good flexibility gives long life performance without cracking. Also Provides excellent resistance to water, tea and beverage stains.


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
        
        "Excellent durability",
        "Exceptional resistance to fungus and alkali",
     
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
      technicalDataSheetUrl="/pdf/NIPPON-PAINT-TIMBER-FINISH-MATT-LACQUER_compressed.pdf"
      shadeCardsUrl=""
    />
  );
};

export default Nippontilelac;