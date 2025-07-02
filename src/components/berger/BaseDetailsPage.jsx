"use client";

import Link from "next/link";
import Image from "next/image";

const BBaseDetailsPage = ({ product }) => {
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
    <div className="py-6 px-4 sm:px-6 lg:px-8 bg.gray-100 min-h-screen">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <Link href="/berger/interior" className="hover:text-blue-600 transition-colors font-medium">
                Berger
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">{product.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column: Image, Drying Time, Coverage, and Call Now Button */}
            <div className="flex flex-col">
              <div className="relative h-64 w-full md:w-3/4 lg:w-2/3 mx-auto">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 66vw"
                  priority
                />
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Drying Time</h2>
                <p className="text-black text-lg leading-relaxed">{product.DryingTime}</p>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Coverage</h2>
                <p className="text-black text-lg leading-relaxed">{product.Coverage}</p>
              </div>
              <div className="mt-6">
                <a href="tel:+923335093223">
                  <button
                    className="w-full bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors text-lg font-semibold"
                    aria-label="Call to inquire about the product"
                  >
                    Call Now
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column: Product Description and Application */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Product Description</h2>
                <p className="text-black text-lg leading-relaxed">{product.description}</p>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Application</h2>
                <p className="text-black text-lg leading-relaxed">{product.application}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BBaseDetailsPage;