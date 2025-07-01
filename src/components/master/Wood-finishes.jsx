"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MWoodFinishes = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    interior: true,
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

  // exterior master products data
  const interiorProducts = [
    {
      id: 1,
      title: "Gloss Lacquer Wood Master",
      category: "Wood Finishes",
      image: "/master/25.webp",
      features: [
        "Glossy, mirror-like finish",
        "Durable protection for frequently",
        "Quick-drying formula",
      ],
      detailsLink: "/master/wood/gloss-lacquer-wood-master",
      titleLink: "/master/wood/gloss-lacquer-wood-master",
    },
    {
      id: 2,
      title: "Matt Lacquer Wood Master",
      category: "Wood Finishes",
      image: "/master/26.webp",
      features: [
        "Smooth, non-reflective matte finish",
        "Scratch-proof and durable protection",
        "Enhances natural wood texture",
      ],
      detailsLink: "/master/wood/matt-lacquer-wood-master",
      titleLink: "/master/wood/matt-lacquer-wood-master",
    },
    {
      id: 3,
      title: "Sealer Wood Master",
      category: "Wood Finishes",
      image: "/master/27.webp",
      features: [
        "Deep-penetrating formula",
        "Strong resistance",
        "Smooth, flawless finish",
      ],
      detailsLink: "/master/wood/sealer-wood-master",
      titleLink: "/master/wood/sealer-wood-master",
    },
    {
      id: 4,
      title: "Thinner Wood Master",
      category: "Wood Finishes",
      image: "/master/28.webp",
      features: [
        "Improves flow and consistency",
        "Ideal for thinning paints ",
        "Removes unwanted coatings",
      ],
      detailsLink: "/master/wood/thinner-wood-master",
      titleLink: "/master/wood/thinner-wood-master",
    },
    {
      id: 5,
      title: "Synthetic Varnish",
      category: "Wood Finishes",
      image: "/master/29.webp",
      features: [
        "High-gloss finish",
        "Protects against moisture, stains, and scratches",
        "Quick-drying formula ",
      ],
      detailsLink: "/master/wood/synthetic-varnish",
      titleLink: "/master/wood/synthetic-varnish",
    },
    {
      id: 6,
      title: "Matt Enamel Finish",
      category: "Wood Finishes",
      image: "/master/30.webp",
      features: [
        "Top-rated matt enamel finish ",
        "Anti-fungal ",
        "Easy to clean ",
      ],
      detailsLink: "/master/wood/matt-enamel-finish",
      titleLink:  "/master/wood/matt-enamel-finish",
    },
    {
      id: 7,
      title: "Synthetic Enamel",
      category: "Wood Finishes",
      image: "/master/31.webp",
      features: [
        "Highly resistant ",
        "Excellent color retention over time",
        "High gloss finish",
      ],
      detailsLink: "/master/wood/synthetic-enamel",
      titleLink: "/master/wood/synthetic-enamel",
    },
     {
      id: 8,
      title: "N.C Duco Master",
      category: "Wood Finishes",
      image: "/master/32.webp",
      features: [
        "Quick-drying",
        "Water-resistant",
        "Multi-surface use",
      ],
      detailsLink: "/master/wood/nc-duco-master",
      titleLink: "/master/wood/nc-duco-master",
    },
         {
      id: 9,
      title: "N.C Duco Metallic",
      category: "Wood Finishes",
      image: "/master/33.webp",
      features: [
        "Efficient re-finishing",
        "Wood and metal surface application",
        "High gloss and matte finishes",
      ],
      detailsLink: "/master/wood/nc-duco-metallic",
      titleLink: "/master/wood/nc-duco-metallic",
    },
         {
      id: 10,
      title: "Polyurethane Varnish",
      category: "Wood Finishes",
      image: "/master/34.webp",
      features: [
        "Shields wood from water and scratches",
        "Enhances wood grain ",
        "Suitable for indoors/outdoors",
      ],
      detailsLink: "/master/wood/polyurethane-varnish",
      titleLink: "/master/wood/polyurethane-varnish",
    },
         {
      id: 11,
      title: "Master Quick Drying",
      category: "Wood Finishes",
      image: "/master/35.webp",
      features: [
        "Appealing finish",
        "Saves time ",
        "Versatile for different wood types",
      ],
      detailsLink: "/master/wood/master-quick-drying",
      titleLink: "/master/wood/master-quick-drying",
    },
    
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Wood Finishes",
      items: [
        { name: "Overview", link: "/master/wood-finishes" },
        ...interiorProducts.map((product) => ({
          name: product.title,
          link: product.detailsLink,
        })),
      ],
      key: "wood-finishes",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(interiorProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = interiorProducts.slice(startIndex, endIndex);

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
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Wood Finishes</h3>
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
              <Link href="/master/wood-finishes" className="text-gray-900" aria-current="page">
                wood finishes
              </Link>
            </ol>
            {/* Total Products Found */}
            <p className="mt-2 text-sm text-gray-600 ">
              Total Products: ({interiorProducts.length})
            </p>
          </nav>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Wood Finishes</h2>

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
                      <h1 key={index}>☑ {feature}</h1>
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
        </div>
      </div>
    </div>
  );
};

export default MWoodFinishes;