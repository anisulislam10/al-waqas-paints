// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponExpresskote = () => {
  return (
    <BaseProductDetail
      productName="Nippon ACS Putty"
      productImage="/ACS-Putty-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
           A high quality filler for patching cracks, levelling uneven rough porous cement walls, plaster work and filling defective surfaces.

The ACS Putty provides a perfect smooth finish which enhances the performance of the top coat. It has excellent workability, drying and sanding properties.
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
        "Strong adhesion",
        "Smooth finish",
        "Highly durable",
      


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
     
      technicalDataSheetUrl="/pdf/NPPK-Putty-ACS-Putty-TDS_compressed.pdf"
    />
  );
};

export default NipponExpresskote;