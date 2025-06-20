"use client";

import Link from "next/link";
import Image from "next/image";

// Combined product data
const allProducts = [
  {
    id: 1,
    title: "Nippon Odour~Less AirCare",
    category: "Interior",
    image: "/Odourless-Air-Care.png",
    detailsLink: "/products/nippon-odourless-aircare",
    titleLink: "/products/interior/premium-wall-paint-details",
  },
  {
    id: 2,
    title: "Nippon Spot-Less Matt Emulsion",
    category: "Interior",
    image: "/spot-less-2.png",
    detailsLink: "/products/nippon-spot-less",
    titleLink: "/products/interior/silk-finish-paint-details",
  },
  {
    id: 3,
    title: "Nippon Easywash",
    category: "Interior",
    image: "/easy-wash.png",
    detailsLink: "/products/easywash",
    titleLink: "/products/interior/matte-finish-paint-details",
  },
  {
    id: 4,
    title: "Nippon Glamour",
    category: "Interior",
    image: "/Glamour-min-1.png",
    detailsLink: "/products/glamour",
    titleLink: "/products/interior/washable-paint-details",
  },
  {
    id: 5,
    title: "Nippon Weatherbond",
    category: "Exterior",
    image: "/weather-bond.png",
    detailsLink: "/products/nippon-weatherbond",
    titleLink: "/products/exterior/premium-wall-paint-details",
  },
  {
    id: 6,
    title: "Nippon Weatherbond Advance",
    category: "Exterior",
    image: "/wheathr-bond-advance.png",
    detailsLink: "/products/nippon-weatherbond-advance",
    titleLink: "/products/exterior/silk-finish-paint-details",
  },
  {
    id: 7,
    title: "Nippon Quality Exterior Emulsion",
    category: "Exterior",
    image: "/Group-12965.png",
    detailsLink: "/products/nippon-quality-exterior-emulsion",
    titleLink: "/products/exterior/matte-finish-paint-details",
  },
  {
    id: 8,
    title: "Nippon Tilelac (Textured)",
    category: "Exterior",
    image: "/tilelac-1.png",
    detailsLink: "/products/nippon-tilelac",
    titleLink: "/products/exterior/textured-paint-details",
  },
  {
    id: 9,
    title: "Nippon Slate Finish - Satin (Cementitious Surfaces)/Stones",
    category: "Special Surfaces",
    image: "/slate-finish-1.png",
    detailsLink: "/products/nippon-slate-finish-satin-cementitious-surfaces-stones",
    titleLink: "/products/special-surfaces/satin-finish-details",
  },
  {
    id: 10,
    title: "Nippon FlexiSeal Elastomeric Membrane",
    category: "Special Surfaces",
    image: "/Flexiseal-1.png",
    detailsLink: "/products/nippon-flexiseal-elastomeric",
    titleLink: "/products/special-surfaces/elastomeric-membrane-details",
  },
];

// Function to get random products
const getRandomProducts = (products, count) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const YouMayAlsoLike = () => {
  // Select 3 random products
  const randomProducts = getRandomProducts(allProducts, 3);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {randomProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image - Links to details page */}
              <Link href={product.detailsLink} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>

              <div className="p-5">
                {/* Product Title - Links to separate page */}
                <Link href={product.detailsLink}>
                  <h3 className="text-sm text-blue-700 mb-1 hover:text-blue-700 transition-colors">
                    {product.title}
                  </h3>
                </Link>

                {/* Product Category */}
                <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>

                {/* Call Now Button */}
                <a href="tel:+923335093223">
                  <button className="w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition-colors">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;