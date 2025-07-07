// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Brilliance Matt Enamel
"
      productImage="/Brilliance-Matt-Enamel-1.png"
      category=""
      productDescription={
        <div className="Nippon Easy Coat Emulsion">
          <p className="mb-4">
Nippon Brilliance Matt Enamel
Nippon Brilliance Matt Enamel is a premium quality anti-fungal enamel and is recommended for interior walls, wood and metal.

It forms a luxurious smooth matt finish that is highly washable.

With its stain-resisting properties it is extremely suitable for kitchens, bathrooms, corridors and staircases.        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Durable against harsh weather",
        "Excellent dirt resistance",
        "Anti-fungal and anti-algal",
        "Alkali-resistant"

     
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
      technicalDataSheetUrl="/pdf/NPPK-Brilliance-Matt-Enamel-TDS_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (8).pdf"
      
    />
  );
};

export default NipponHiBondWall;