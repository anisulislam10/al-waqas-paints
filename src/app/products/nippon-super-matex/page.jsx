// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Super Matex Emulsion
"
      productImage="/super-matex-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
A cost-effective one-for-all solution!

Nippon Super Matex is recommended for interior walls, ceilings, plaster, brickwork, hard and soft boards, and asbestos.        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Anti-fungal",
        "Smooth matt finish",

     
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
      technicalDataSheetUrl="/pdf/SUPER-MATEX_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (4).pdf"
      
    />
  );
};

export default NipponHiBondWall;