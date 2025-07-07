// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Satin Glo Matt Enamel
"
      productImage="/satin-glo-web-image.jpg"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Satin Glo Matt Enamel
Nippon Satin Glo creates a satin-smooth sheen in the interior of your home. It is highly washable with good scrub resistance, so you don’t have to worry about damaging the paint.        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Long-lasting",
        "Washable",
        "Fungus resistant",
        "Good scrub resistance"

     
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
      technicalDataSheetUrl="/pdf/NIPPON-SATIN-GLO-MATT-ENAMEL_compressed (1).pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (7).pdf"
      
    />
  );
};

export default NipponHiBondWall;