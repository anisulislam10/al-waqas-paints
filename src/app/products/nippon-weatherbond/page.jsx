// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponWeatherbod = () => {
  return (
    <BaseProductDetail
      productName="Nippon Weatherbond"
      productImage="/weather-bond.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
           For tougher protection against harsh weather.

Nippon Weatherbond is a highly durable paint that adheres well to all types of exterior wall surfaces.

It is formulated to provide the ultimate performance – to protect your home against harsh weather conditions, dirt and fungus.
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
        
        "Durable against harsh weather",
        "Tougher resistance against dirt, fungus, algae, flaking and efflorescence",
        "Peel, flake, fade & chalk resistance",
        "UV protection for longer-lasting colours",
        "No added lead or mercury",
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
      technicalDataSheetUrl="/pdf/Weatherbond-Exterior_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (1).pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponWeatherbod;