// components/PageDetails.jsx
"use client";

import Link from "next/link";
import Image from "next/image";

const PageDetails = ({ 
  productName,
  productDescription,
  highlights = [],
  technicalDataSheetUrl = "#",
  shadeCardsUrl = "#",
  productImage = "/default-product.jpg"
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={productImage}
                alt={productName}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 lg:w-2/3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{productName}</h1>
          
          <div className="prose max-w-none text-gray-700 mb-6">
            <p>{productDescription}</p>
          </div>

          {highlights.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Highlights</h2>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✔</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red-800 hover:bg-red-900 text-white font-medium py-2 px-6 rounded-md transition-colors">
              Buy Now
            </button>
            
            <Link 
              href={technicalDataSheetUrl} 
              className="border border-blue-900 text-blue-900 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition-colors"
              target="_blank"
            >
              Technical Data Sheet (TDS)
            </Link>
            
            <Link 
              href={shadeCardsUrl} 
              className="border border-blue-900 text-blue-900 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition-colors"
              target="_blank"
            >
              Shade Cards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;