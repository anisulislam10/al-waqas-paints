// components/products/NipponOdourlessAircare.jsx
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponExpresskote = () => {
  return (
    <BaseProductDetail
      productName="Surface Preparation Range"
      productImage="/express-stroke-sealer.png"
      category=""
      productDescription={
        <div className="prose max-w-none">
          <p className="mb-4">
            Efficiently seals and regulates the drying process of the inherent moisture present in the cement plaster or concrete, thus minimizing hairline cracks and peeling, bubbling, fungus, algae, alkali and efflorescence associated with high moisture.
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
        "Cement plaster",
        "Precast concrete",
        "Cast in-situ concrete",
        "Brickwork",
        "Hard/Soft Boards",
        "Gypsum Boards",


      ]}
      highlights={[
        "Safe to apply after 3 days of plastering",
        "Shortens waiting time for top coat application",
        "Adheres firmly to concrete and masonry surfaces",
        "Resists water and UV",
        "Easy to apply",
        "Water-based",
        "Anti-fungus",
        "Fast drying",
        "Environmental friendly"
      ]}
     
      technicalDataSheetUrl="/pdf/Expresskote-TDS_compressed.pdf"
    />
  );
};

export default NipponExpresskote;