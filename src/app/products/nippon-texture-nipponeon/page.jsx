// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Texture Nippon’eon

"
      productImage="/Nippon-texture-nippeon.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Texture Nippon’eon is a unique water-based texture finish which gives tremendous texture motifs with special textured rollers and scrapers. Numerous beautiful patterns can be created as a base and can be top-coated with various shades of water and solvent based products.

       </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Environment-friendly",
        "Long lasting and durable",
        "Low absorbency"

     
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
      technicalDataSheetUrl="/pdf/NPPK-Texture-Nipponeon_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (4).pdf"
      
    />
  );
};

export default NipponHiBondWall;