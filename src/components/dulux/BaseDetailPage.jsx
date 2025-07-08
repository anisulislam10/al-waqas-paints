"use client";

import Link from "next/link";
import Image from "next/image";

const BaseDetailPage = ({ product }) => {
  // Fallback message if no product is provided
  if (!product) {
    return (
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-700 font-medium">Product not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-6 text-sm text-gray-500" aria-label="breadcrumb">
          <ol className="flex space-x-3 items-center">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/dulux/interior" className="hover:text-blue-600 transition-colors font-medium">
                Dulux
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-10">{product.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: Product Image and Product Features */}
            <div className="flex flex-col">
              {/* Product Image */}
              <div className="relative h-64 w-full md:w-3/4 lg:w-2/3 mx-auto">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain rounded-lg "
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Product Features */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Features</h2>
                <ul className="text-black list-disc pl-6 space-y-1 text-lg font-sans">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Product Information and Application Description */}
            <div className="flex flex-col">
              {/* Product Description */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Description</h2>
                <p className="text-black text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Key Information */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Key Information</h2>
                <dl className="text-black font-semibold grid grid-cols-1 gap-y-2">
                  <div className="flex">
                    <dt className="font-semibold w-1/3 ">Finish:</dt>
                    <dd>{product.keyInformation.finish}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold w-1/3">Coverage:</dt>
                    <dd>{product.keyInformation.coverage}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold w-1/3">Drying Time:</dt>
                    <dd>{product.keyInformation.dryingTime}</dd>
                  </div>
                  <div className="flex">
                    <dt className="font-semibold w-1/3">Coats:</dt>
                    <dd>{product.keyInformation.coats}</dd>
                  </div>
                </dl>
              </div>

              {/* Call Now Button */}
              <a href="tel:+923335093223">
                <button className="w-full bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors text-lg font-semibold">
                  Call Now
                </button>
              </a>

              {/* Downloads Section */}
<div className="mt-8">
  <h2 className="text-xl font-semibold text-gray-900 mb-2">Downloads</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-semibold">
    <a
      href={product.downloads?.sds || "#"}
      className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-5 h-5 text-black mr-2 font-semibold"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M8 12l4 4 4-4M12 3v13"
        />
      </svg>
      <span className="text-gray-800 font-semibold text-sm ">Safety Data Sheet</span>
    </a>
    <a
      href={product.downloads?.tds || "#"}
      className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-5 h-5 text-black mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M8 12l4 4 4-4M12 3v13"
        />
      </svg>
      <span className="text-black font-semibold text-sm">Technical Data Sheet </span>
    </a>
    <a
      href={product.downloads?.warranty || "#"}
      className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-5 h-5 text-black mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M8 12l4 4 4-4M12 3v13"
        />
      </svg>
      <span className="text-black font-semibold text-sm">Warranty Terms & Conditions</span>
    </a>
  </div>
</div>

              {/* Application Description */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Application Description</h2>
                <p className="text-black text-lg leading-relaxed">{product.applicationDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseDetailPage;