// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponHiBondWall = () => {
  return (
    <BaseProductDetail
      productName="Nippon Matex Pro Emulsion - White Bucket
"
      productImage="/Matex-Pro-1-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Matex Pro Emulsion – White Bucket
A Styrene acrylic-based emulsion designed for interior concrete surfaces including walls and ceilings. It gives a dense surface coverage and is specially designed for surfaces with less demand for smoothness and scrubbing. Nippon Matex Pro is best for decorating and protecting interior walls, ceilings, plaster, brickwork and wall boards.

        </p>
          
          
           
               
          

   
  

        </div>}
      highlights={[
        
        "Good levelling",
        "Highly durable",
        "Better hiding power and coverage",
        "Free of lead, mercury, chromium and cadmium compounds"

     
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
      technicalDataSheetUrl="/pdf/Matex-Pro_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (3).pdf"
      
    />
  );
};

export default NipponHiBondWall;