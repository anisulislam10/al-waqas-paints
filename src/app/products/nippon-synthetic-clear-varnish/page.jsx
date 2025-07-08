// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Synthetic Clear Varnish"
      productImage="/Synthetic-Clear-Varnish-3L.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon Synthetic Clear Varnish
Nippon Synthetic Clear Varnish is a superior quality alkyd varnish specially formulated for wood and metal surfaces. Not only does it decorate, but it also protects these surfaces.

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
        
        "High build (with better hiding properties)",
        "Superior gloss",
        "Durable finish"
     
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
      technicalDataSheetUrl="/pdf/NPPK-Wood-Range-NPPK-Synthetic-Clear-Varnish_compressed.pdf"
      shadeCardsUrl=""
    />
  );
};

export default Nippontilelac;