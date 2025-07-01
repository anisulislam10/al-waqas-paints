// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponExpresskote = () => {
  return (
    <BaseProductDetail
      productName="Nippon Wall Putty Project"
      productImage="/Project-Putty-min-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
Nippon WALL Putty Project is good quality filler for patching cracks, levelling up uneven rough porous cement walls, plaster work and filling up defective surfaces. It provides a perfect smooth finish for top coat application. Nippon Wall Putty Project is not recommended for exterior          </p>
          
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
     
      technicalDataSheetUrl="/pdf/NPPK-Putty-Project-Putty-TDS-1.pdf"
    />
  );
};

export default NipponExpresskote;