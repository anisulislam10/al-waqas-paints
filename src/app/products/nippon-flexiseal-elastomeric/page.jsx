import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponFlexiseal = () => {
  return (
    <BaseProductDetail
      productName="Nippon FlexiSeal Elastomeric Membrane"
      productImage="/Flexiseal-1.png"
      category="Special Surfaces"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Flexiseal is a high build with better hiding properties elastomeric styrene acrylic based membrane developed for exterior use.

It is specially formulated with 2 in 1 sealer and filler property and is highly flexible to cover hairline cracks.

Nippon Flexiseal has excellent water resistance with good adhesion that seals the pores of concrete to prevent water penetration to the substrate. It does not contain lead and mercury.
        </p>

          
          
           
               
          <div className="flex flex-row gap-4 justify-center items-center my-4">
 
   
 
  
</div>
        </div>}
      highlights={[
        
        "Covers hairline cracks",
        "Water-resistant",
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
      technicalDataSheetUrl="/pdf/Flexiseal-TDS_compressed-1.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponFlexiseal;