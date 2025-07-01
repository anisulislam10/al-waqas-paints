// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponExpresskote = () => {
  return (
    <BaseProductDetail
      productName="Nippon Wall Putty A-100"
      productImage="/A-100-Wall-Putty-Packshot-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
         The Wall Putty A-100 provides a smooth finish for top coat applications. It is specially formulated for interior masonry surfaces. The Nippon Wall Putty is not recommended on exteriors.
          </p>
          
          <div className="flex flex-row gap-4 justify-center items-center my-4">
            <div className="w-10 h-16"> {/* Icon container size */}
              <Image 
                src="/fungus_resistant.png" 
                alt="fungus_resistant"
                width={64}
                height={64}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>

         
        </div>
      }
          features={[
        "Fast drying",
        "Good levelling",
        "Easy to use",

      


      ]}
    //   highlights={[
    //     "Safe to apply after 3 days of plastering",
    //     "Shortens waiting time for top coat application",
    //     "Adheres firmly to concrete and masonry surfaces",
    //     "Resists water and UV",
    //     "Easy to apply",
    //     "Water-based",
    //     "Anti-fungus",
    //     "Fast drying",
    //     "Environmental friendly"
    //   ]}
     
      technicalDataSheetUrl="/pdf/NPPK-Putty-Wall-Putty-A-100-TDS.pdf"
    />
  );
};

export default NipponExpresskote;