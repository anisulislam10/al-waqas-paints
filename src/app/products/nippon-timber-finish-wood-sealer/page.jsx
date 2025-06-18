// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponTimeer = () => {
  return (
    <BaseProductDetail
      productName="Nippon Timber Finish Wood Sealer
"
      productImage="/Timber-Finish-Wood-Sealer-1.png"
      category="Wood & Metal"
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">


An excellent quick drying wood sealer, Nippon Timber Finish Wood Sealer penetrates the pores of wood and seals the wood surface. After sanding it provides smooth surface for top coat application and also prevents the top coat from sinking.




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
        
        "Provides smooth surface",
        "Perfect for dry and seasoned wood",
        "Fungus resistant",

     
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
      technicalDataSheetUrl="/pdf/NPPK-Wood-Range-Timber-Finish-Wood-Sealer_compressed.pdf"
    //   price="PKR 3,500 per gallon"
    />
  );
};

export default NipponTimeer;