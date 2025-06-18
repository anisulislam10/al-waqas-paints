// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nipponweatherbondadvance = () => {
  return (
    <BaseProductDetail
      productName="Nippon Weatherbond Advance"
      productImage="/wheathr-bond-advance.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
          Twice the toughness and durability against harsh weather.

Nippon Weatherbond Advance is an acrylic emulsion paint for exterior walls.

Formulated with twice the toughness and durability, it provides supreme protection against harsh weather.
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
   <div className="w-10 h-16">
      <Image 
        src="/low_voc.png" 
        alt="Low VOC icon"
        width={72}
        height={6}
        className="rounded-lg  object-contain w-full h-full"
      />
         </div>
         <div className="w-10 h-16"> {/* Icon container size */}
             <Image 
               src="/green_choice.png" 
               alt="Formaldehyde absorption process"
               width={64}
               height={64}
               className="rounded-lg  object-contain w-full h-full"
             />
           </div>
 
  
</div>
        </div>}
      highlights={[
        
        "Tough resistance against dirt, fungus, algae, flaking and alkali",
        "2X UV protection for longer-lasting colours",
        "Easy to apply with excellent coverage",
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
      technicalDataSheetUrl="/pdf/WB-Advance_compressed-1.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (2).pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default Nipponweatherbondadvance;