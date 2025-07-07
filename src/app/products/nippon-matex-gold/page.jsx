// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Matex Gold Emulsion
"
      productImage="/matex-gold-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Higher opacity and durability for interior walls.

Nippon Matex Gold is specially formulated to provide a smooth matt finish for interior walls.
        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Better hiding power and coverage",
        "Higher firm build",
        "Lead and mercury free",
        "Long-lasting",
        "Matt finish"

     
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
      technicalDataSheetUrl="/pdf/NIPPON-MATEX-GOLD_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (5).pdf"
      
    />
  );
};

export default NipponHiBondWall;