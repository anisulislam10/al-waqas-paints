// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const Nippontilelac = () => {
  return (
    <BaseProductDetail
      productName="Nippon Hydrogloss Enamel"
      productImage="/Hydro-gloss-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Hydro-Gloss is an environmental friendly green product with low VOC (Volatile Organic Compound) for interior use. It is formulated with a solvent-free resin to limit air pollutants and has an extremely low odour during application and drying. Being a green product, it is ideal for use in eco-sensitive commercial and residential areas such as hospitals, schools, residential buildings and hotels. It is easy to apply and forms a tough paint film with durability and smooth finishing.



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
        
        "Environmental-friendly green paint for wood and metal substrate",
        "Low VOC",
        "Easy application",
        "Fungus resistance",
        "Excellent coverage and hiding power"
     
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
      technicalDataSheetUrl="/pdf/Hydro-Gloss-NPPK-20-May-21_compressed.pdf"
      shadeCardsUrl="/pdf/namecheap-order-153116483_compressed-1 (9).pdf"
    />
  );
};

export default Nippontilelac;