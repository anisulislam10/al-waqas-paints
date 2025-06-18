// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Tilelac (Textured)"
      productImage="/tilelac-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
  It is an acrylic emulsion based coat that gives a multi-coat textured finish. Available in 3 texture patterns: fine mountainous, heavy mountainous and head-cut. The TileLac can be applied on concrete (including prefabricated concrete), mortar and asbestos.
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
      technicalDataSheetUrl="/pdf/TileLac-EMA-Base_compressed-1.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (1).pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default Nippontilelac;