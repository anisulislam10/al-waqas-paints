// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Q-Lac Gloss Enamel"
      productImage="/Q-lac.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Q-Lac Gloss Enamel
Gloss finish for wood and metal surfaces.

Nippon Q-Lac is specially formulated to give a high gloss finish.

It is suitable for both interior and exterior painting of wood and metal surfaces.
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
        
        "Easy to apply",
        "Forms a smooth, tough paint film",
        "Excellent gloss and durability",
        "Fungus resistant"
     
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
      technicalDataSheetUrl="/pdf/NPPK-Q-LAC-ENAMEL-TDS_compressed.pdf"
      shadeCardsUrl="/pdf/Q-Enamel-Shade-Card_compressed.pdf"
    />
  );
};

export default Nippontilelac;