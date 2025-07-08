"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DPrimer = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    primer: true,
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  // Toggle menu expansion
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

 // Primer Dulux products data
  const primerProducts = [
    {
      id: 1,
      title: "Dulux Promise Interior Primer",
      category: "Primer",
      image: "/dulux/primer/1.avif",
      features: [
        "Excellent Adhesion",
        "Low Odour",
        "Low VOC"
      ],
      detailsLink: "/dulux/prim/dulux-promise-interior-primer",
      titleLink: "/dulux/prim/dulux-promise-interior-primer",
    },
    {
      id: 2,
      title: "Dulux Interior Acrylic Primer",
      category: "Primer",
      image: "/dulux/primer/2.avif",
      features: [
        "Superior Adhesion",
        "Enhances Topcoat Opacity",
        "Alkali Resistant"
      ],
      detailsLink: "/dulux/prim/dulux-interior-acrylic-primer",
      titleLink: "/dulux/prim/dulux-interior-acrylic-primer",
    },
    {
      id: 3,
      title: "Dulux Prime-On",
      category: "Primer",
      image: "/dulux/primer/3.avif",
      features: [
        "Reinforces Adhesion and Durability of the End Coat",
        "Excellent Sealing Properties"
      ],
      detailsLink: "/dulux/prim/dulux-prime-on",
      titleLink: "/dulux/prim/dulux-prime-on",
    },
    {
      id: 4,
      title: "Dulux Red Oxide Metal Primer",
      category: "Primer",
      image: "/dulux/primer/4.avif",
      features: [
        "Anti Corrosive",
        "Improves Adhesion with Top Coat",
        "Makes the Finish Long Lasting"
      ],
      detailsLink: "/dulux/prim/dulux-red-oxide-metal-primer",
      titleLink: "/dulux/prim/dulux-red-oxide-metal-primer",
    },
    {
      id: 5,
      title: "Paintex Ultraprime",
      category: "Primer",
      image: "/dulux/primer/5.avif",
      features: [
        "High Quality Solvent Based Sealer",
        "Reduces Damage From Alkali and Salts",
        "No Added Lead or Mercury"
      ],
      detailsLink: "/dulux/prim/paintex-ultraprime",
      titleLink: "/dulux/prim/paintex-ultraprime",
    },
    {
      id: 6,
      title: "Dulux Primer Crackbridging Primer",
      category: "Primer",
      image: "/dulux/primer/6.avif",
      features: [
        "Alkali Resistant",
        "Reinforces Adhesion and Durability of the End Coat"
      ],
      detailsLink: "/dulux/prim/dulux-exterior-crackbridging-primer",
      titleLink: "/dulux/prim/dulux-exterior-crackbridging-primer",
    },
    {
      id: 7,
      title: "Dulux Promise Primer Primer",
      category: "Primer",
      image: "/dulux/primer/7.png",
      features: [
        "Alkali Resistant",
        "Excellent Adhesion",
        "Low Odour"
      ],
      detailsLink: "/dulux/prim/dulux-promise-exterior-primer",
      titleLink: "/dulux/prim/dulux-promise-exterior-primer",
    }
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Primer",
      items: [
        { name: "Overview", link: "/dulux/primer" },
        ...primerProducts.map((product) => ({
          name: product.title,
          link: product.detailsLink,
        })),
      ],
      key: "primer",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(primerProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = primerProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Primer</h3>
            <nav className="space-y-1">
              {sidebarMenus.map((menu) => (
                <div key={menu.key} className="mb-2">
                  <button
                    onClick={() => toggleMenu(menu.key)}
                    className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded transition-colors text-sm font-medium"
                  >
                    {menu.title}
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedMenus[menu.key] ? "rotate-180" : ""}`}
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
                          href={item.link}
                          className="block px-3 py-1.5 text-gray-600 hover:text-blue-900 hover:bg-blue-50 rounded transition-colors text-sm"
                        >
                          {item.name}
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
          {/* Breadcrumb Navigation */}
          <nav className="mb-4 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex space-x-2 items-center">
              <li>
                <Link href="/" className="hover:text-blue-900 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mx-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <Link href="/dulux/primer" className="text-gray-900" aria-current="page">
                Dulux Primer
              </Link>
            </ol>
            {/* Total Products Found */}
            <p className="mt-2 text-sm text-gray-600 ">
              Total Products: ({primerProducts.length})
            </p>
          </nav>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Primer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col min-h-[450px]"
              >
                {/* Product Image - Links to details page */}
                <Link href={product.detailsLink} className="block">
                  <div className="relative h-48 w-full mt-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                <div className="p-4 flex flex-col flex-grow">
                  {/* Product Title - Links to separate page */}
                  <Link href={product.titleLink}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-900 transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Product Category */}
                  <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>

                  {/* Product Features */}
                  <ul className="text-sm text-gray-600 mb-3 list-disc pl-5 flex-grow line-clamp-3">
                    {product.features.map((feature, index) => (
                      <li key={index}>☑ {feature}</li>
                    ))}
                  </ul>

                  {/* Call Now Button */}
                  <a href="tel:+923335093223" className="mt-auto">
                    <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? "bg-green-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DPrimer;