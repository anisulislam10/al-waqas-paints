// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './BaseProductDetail';
import Image from 'next/image';

const MattEmulsion = () => {
  return (
    <BaseProductDetail
      productName="Nippon Spot-Less Matt Emulsion"
      productImage="/spot-less-2.png"
      category="Water Based Matt Emulsion"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
           Spot-less is a specifically designed ultra-low VOC interior premium paint with very high resistance to household stains such as tea, wine, coffee, inks, hand marks, lipstick, juice and etc. It has excellent hydrophilic stain repellence combined with good hydrophobic stain removal making it an excellent choice for high quality interior stain resistant paint.
          </p>
        
          <div className="flex flex-row gap-4 justify-center items-center my-4">
  <div className="w-10 h-16"> {/* Icon container size */}
    <Image 
      src="/green_choice.png" 
      alt="Formaldehyde absorption process"
      width={64}
      height={64}
      className="rounded-lg  object-contain w-full h-full"
    />
  </div>
  <div className="w-10 h-16">
    <Image 
      src="/anti_bacterial.png" 
      alt="Anti-bacterial icon"
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
</div>
        </div>}
      highlights={[
        
        "Excellent stain washability",
        "Excellent water resistance",
        "Low odour during application and drying",
        "Non-toxic, does not contain lead, mercury and heavy metals",
        "Anti-fungus property",
        "Long lasting colours",

        "Resists fading and chalking",
        "Easy application",
        "Less splattering",
        "Easy touch-up",
        "Excellent coverage and hiding power",
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
      technicalDataSheetUrl="/pdf/NIPPON-ODOUR-LESS-AirCare-_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default MattEmulsion;