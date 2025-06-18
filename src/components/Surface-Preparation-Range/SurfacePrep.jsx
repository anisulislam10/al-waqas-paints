// components/Interior.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SurfacePrep = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    waterBased: false,
    interiorEmulsion: false,
    mattEnamel: false,
    texturedSeries: false
  });

  // Toggle menu expansion
  const toggleMenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  // Interior products data
  const interiorProducts = [
    {
      id: 1,
      title: "Nippon Expresskote Sealer",
      category: "Surface Preparation Range",
      image: "/express-stroke-sealer.png",
      detailsLink: "/products/nippon-expresskote-sealer",
      titleLink: "/products/interior/premium-wall-paint-details"
    },
    {
      id: 2,
      title: "Nippon Vinilex 5100 Wall Sealer",
      category: "Surface Preparation Range",
      image: "/Vnilex-5100.png",
      detailsLink: "/products/nippon-vinilex-5100-wall-sealer",
      titleLink: "/products/interior/silk-finish-paint-details"
    },
    {
      id: 3,
      title: "Nippon Vinilex 5200 Wall Sealer",
      category: "Surface Preparation Range",
      image: "/Vinilex-5200-Wall-Sealer.png",
      detailsLink: "/products/nippon-vinilex-5200-wall-sealer",
      titleLink: "/products/interior/matte-finish-paint-details"
    },
    {
      id: 4,
      title: "Nippon Hi-Bond Wall Primer",
      category: "Surface Preparation Range",
      image: "/Hi-bond.png",
      detailsLink: "/products/nippon-hi-bond-wall-primer",
      titleLink: "/products/interior/washable-paint-details"
    },
     {
      id: 4,
      title: "Nippon Red Oxide Primer",
      category: "Surface Preparation Range",
      image: "/Red-oxide-1.png",
      detailsLink: "/products/nippon-red-oxide-primer",
      titleLink: "/products/interior/washable-paint-details"
    },
     {
      id: 4,
      title: "Nippon Quality Primer",
      category: "Surface Preparation Range",
      image: "/Q-Primer-Edited.png",
      detailsLink: "/products/nippon-quality-primer",
      titleLink: "/products/interior/washable-paint-details"
    },
     {
      id: 4,
      title: "Nippon Q Seal Primer",
      category: "Surface Preparation Range",
      image: "/Q-Seal-Solvent-Based-Primer-min.png",
      detailsLink: "/products/nippon-q-seal-primer",
      titleLink: "/products/interior/washable-paint-details"
    },
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Surface Preparation Range",
      items: [
        "Nippon Q Seal Primer",
        "Nippon Quality Primer",
        "Nippon Vinilex 5200 Wall Sealer",
        "Nippon Red Oxide Primer",
                "Nippon Hi-Bond Wall Primer",
                                "Nippon Vinilex 5100 Wall Sealer",
                                "Nippon Expresskote Sealer",



      ],
      key: "waterBased"
    },
    
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Primers/Sealers</h3>
            <nav className="space-y-1">
              {sidebarMenus.map((menu) => (
                <div key={menu.key} className="mb-2">
                  <button
                    onClick={() => toggleMenu(menu.key)}
                    className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded transition-colors text-sm font-medium"
                  >
                    {menu.title}
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedMenus[menu.key] ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMenus[menu.key] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {menu.items.map((item, index) => (
                        <Link
                          key={index}
                          href={`/products/${item.toLowerCase().replace(/[~ ]/g, '-')}`}
                          className="block px-3 py-1.5 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded transition-colors text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Primers/Sealers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300  ">
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
                
                <div className="p-2">
                  {/* Product Title - Links to separate page */}
                  <Link href={product.detailsLink}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  
                  {/* Product Category */}
                  <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>
                  
                  {/* Buy Now Button */}
               <a href="tel:03001234567">
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
    </div>
  );
};

export default SurfacePrep;