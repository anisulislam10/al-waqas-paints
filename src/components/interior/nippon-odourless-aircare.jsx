// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './BaseProductDetail';
import Image from 'next/image';

const NipponOdourlessAircare = () => {
  return (
    <BaseProductDetail
      productName="Nippon Odour~Less AirCare"
      productImage="/Odourless-Air-Care.png"
      category="Water Based Matt Emulsion"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            Nippon Odour~less AirCare is one of the most advanced technological innovations to date that helps 
            improve indoor air quality by absorbing formaldehyde, an indoor air pollutant.
          </p>
          
          
           
                This breakthrough product has Anti-Formaldehyde with Active Carbon Technology that will 
                continuously absorb harmful formaldehyde from the air and convert them into water vapour, 
                therefore, creating a safer environment for everyone.
           
           
          
         
            The advanced formula also includes odor-neutralizing compounds that eliminate unpleasant smells 
            while maintaining excellent air quality.
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
        
        "Air-refreshing Formaldehyde absorbent",
        "Near zero VOC and odour",
        "Anti-bacterial formulation",
        "Superior washability and scrub resistance",
        "Eggshell finish",
        "Safer indoor air"
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

export default NipponOdourlessAircare;