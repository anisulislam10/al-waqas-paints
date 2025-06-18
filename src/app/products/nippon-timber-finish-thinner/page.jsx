// components/products/NipponOdourlessAircare.jsx
import YouMayAlsoLike from '@/components/RandomProducts';
import BaseProductDetail from './../../../components/interior/BaseProductDetail';
import Image from 'next/image';

const NipponThinner = () => {
  return (
    <><BaseProductDetail
          productName="Nippon Timber Finish Thinner"
          productImage="/Timber-Finish-Thinner.png"
          category="Wood & Metal"
          productDescription={<div className="prose max-w-none">
              <p className="mb-4">


                  Nippon Timber Finish Thinner
                  Nippon Paint Timber Finish Thinner is best for thinning of (NC based) wood finishes, paints, primers and top coat colours.



              </p>




              <div className="flex flex-row gap-4 justify-center items-center my-4">




              </div>
          </div>}
          highlights={[
              "Protects the wooden and metal surfaces",
              "This thinner is a mixture Aliphatic and Aromatic Hydro-Carbons, Esters and Ketones",
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
          technicalDataSheetUrl="/pdf/NPPK-Wood-Range-Nippon-Timber-Finish-Thinner_compressed.pdf" /><YouMayAlsoLike /></>
  );
};

export default NipponThinner;