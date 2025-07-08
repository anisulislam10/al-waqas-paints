// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon 9000 Gloss Finish Enamel"
      productImage="/900-Gloss-Finish-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">


Nippon 9000 Gloss Finish Enamel
A touch of brilliant gloss finish for all wood and metal surfaces.

Nippon 9000 Gloss Finish is an oil-modified alkyd enamel paint.

It is easy to apply and forms a smooth, tough paint film which has excellent gloss, fungus resistance and high durability.          </p>
          
          
           
               
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
        
        "Anti-fungal",
        "Long lasting",
        "Washable",
        "Easy to apply"
     
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
      technicalDataSheetUrl="/pdf/NPPK-9000-Gloss-Finish-TDS_compressed.pdf"
      shadeCardsUrl="/pdf/NPPK-COL-V6-SC-2021_compressed.pdf"
    />
  );
};

export default Nippontilelac;