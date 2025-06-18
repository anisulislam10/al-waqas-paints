// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './BaseProductDetail';
import Image from 'next/image';

const EasyWash = () => {
  return (
    <BaseProductDetail
      productName="Nippon Easywash"
      productImage="/easy-wash.png"
      category="Water Based Matt Emulsion"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
EasyWash is a modified acrylic emulsion paint with non-added lead and mercury which gives a very smooth classical matt finishing for internal walls.  It is specially formulated with Low VOC and Alkyd Phenol Ethoxylate free for interior walls. This affordable medium premium range paint has good stain washability, good hiding power, easy application and durable functions.          </p>
        
          <div className="flex flex-row gap-4 justify-center items-center my-4">
  <div className="w-10 h-16"> {/* Icon container size */}
    <Image 
      src="/good_washibility.png" 
      alt="good_washibility"
      width={64}
      height={64}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>
  <div className="w-10 h-16">
    <Image 
      src="/low_odour.png" 
      alt="low_odour icon"
      width={64}
      height={64}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>
  <div className="w-10 h-16">
    <Image 
      src="/low_voc.png" 
      alt="Low VOC icon"
      width={72}
      height={6}good_leveling_coverage
      className="rounded-lg  object-contain w-full h-full"
    />
       </div>

    <div className="w-10 h-16">
    <Image 
      src="/good_leveling_coverage.png" 
      alt="good_leveling_coverage"
      width={72}
      height={6}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>
</div>
        </div>}
      highlights={[
        
        "Good levelling",
        "Good coverage",
        "Good washability",
        "Excellent hiding",
        "Low odour & low VOC",
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
      technicalDataSheetUrl="/pdf/NIPPON-ODOUR-LESS-AirCare-_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default EasyWash;