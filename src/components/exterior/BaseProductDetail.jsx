// components/products/BaseProductDetail.jsx
import Image from "next/image";
import Link from "next/link";

const BaseProductDetailExterios = ({
  productName,
  productDescription,
  highlights = [],
  features = [],
  technicalDataSheetUrl = "#",
  shadeCardsUrl = "#",
  productImage = "/default-product.jpg",
  price,
  category,
  specifications = [],
  colorOptions = [],
  additionalSections = []
}) => {
  // Icons for highlight section
  const highlightIcons = {
    "low voc": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    "anti bacterial": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    "green choice": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image and Action Buttons */}
        <div className="w-full md:w-1/2 lg:w-1/3 space-y-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-4">
            <div className="relative aspect-square w-full">
              <Image
                src={productImage}
                alt={productName}
                fill
                className="object-contain p-4"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
            
            {price && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <p className="text-2xl font-bold text-red-800">{price}</p>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="p-4 space-y-3 bg-white border-t border-gray-200">
             <a href="tel:+923335093223">
  <button className="w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition-colors">
    Call Now
  </button>
</a>
              
              <div className="flex flex-col sm:flex-row gap-2">
                {technicalDataSheetUrl && (
                  <Link 
                    href={technicalDataSheetUrl} 
                    className="flex items-center justify-center gap-2 text-sm border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg transition-all hover:shadow-sm"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    TDS
                  </Link>
                )}
                
                {shadeCardsUrl && (
                  <Link 
                    href={shadeCardsUrl} 
                    className="flex items-center justify-center gap-2 text-sm border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg transition-all hover:shadow-sm"
                    target="_blank"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Shade Cards
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 lg:w-2/3 space-y-6">
          <div>
            {category && (
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold mb-3">
                {category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{productName}</h1>
          </div>

          {productDescription && (
            <div className="prose max-w-none text-gray-700 text-lg">
            {productDescription}
            </div>
          )}

          {highlights.length > 0 && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Key Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => {
                  const lowerHighlight = highlight.toLowerCase();
                  const icon = highlightIcons[lowerHighlight] || (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  );
                  
                  return (
                    <li key={index} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-blue-600 mb-2">
                        {icon}
                      </span>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Rest of the component remains the same */}
          {features.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {specifications.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    {specifications.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-700 bg-gray-50 w-1/3">
                          {spec.name}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {additionalSections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              {typeof section.content === 'string' ? (
                <div className="prose max-w-none text-gray-700">
                  <p>{section.content}</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseProductDetailExterios;