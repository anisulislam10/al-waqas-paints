// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Crystal Matt Enamel
"
      productImage="/Crystal-Matt-Packshot-2-min-1.png"
      category=""
      productDescription={
        <div className="Nippon Easy Coat Emulsion">
          <p className="mb-4">
Nippon Crystal Matt Enamel
Nippon Crystal Matt Enamel is an anti-fungal enamel of premium quality. It is recommended for interior walls, wood and metal. This paint forms a luxurious smooth matt finish that is highly washable with excellent stain resisting properties.

     </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Long-lasting",
        "Washable",
        "Fungus resistant",
        "Good scrub resistance",
        "Mid sheen finish"

     
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
      technicalDataSheetUrl="/pdf/NPPK-Crystal-Matt-Enamel-TDS.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (8).pdf"
      
    />
  );
};

export default NipponHiBondWall;