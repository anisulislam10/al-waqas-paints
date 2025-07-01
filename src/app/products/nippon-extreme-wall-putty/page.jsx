// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponExpresskote = () => {
  return (
    <BaseProductDetail
      productName="Nippon Extreme Wall Putty"
      productImage="/Group-12958.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
           Nippon Extreme Wall Putty is a superior quality water based filler for patching cracks, levelling uneven rough porous cement walls, plaster work and filling defective surfaces. It provides a super smooth finish and strong adhesion. It has excellent durability, drying and sanding properties which enhances the performance of top coat.
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
    //       features={[
    //     "Strong adhesion",
    //     "Smooth finish",
    //     "Highly durable",
      


    //   ]}
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
     
      technicalDataSheetUrl="/pdf/NPPK-Putty-Extreme-Wall-Putty-TDS_compressed.pdf"
    />
  );
};

export default NipponExpresskote;