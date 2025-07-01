// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponExpresskote = () => {
  return (
    <BaseProductDetail
      productName="Nippon Hi-Bond Acrylic Putty"
      productImage="/Hi-Bond-Acrylic-Putty-1.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
          A premium quality readymade acrylic-based putty with an excellent smooth finish which serves as a filler/leveller in a paint system. Specially formulated for filling cracks, levelling rough porous cement walls, plastering and filling defective surfaces.

Hi-Bond Acrylic Putty makes surfaces last longer.
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
        "Improved coverage",
        "Smooth finish",
        "Excellent abrasion resistance",
        "Strong adhesion",
        "Water resistant",

      


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
     
      technicalDataSheetUrl="/pdf/NPPK-Putty-Hi-Bond-Acrylic-Putty-TDS (1)_compressed.pdf"
    />
  );
};

export default NipponExpresskote;