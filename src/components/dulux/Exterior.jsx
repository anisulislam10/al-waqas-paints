"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DExterior = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    exterior: true,
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

  // Exterior Dulux products data
  const exteriorProducts = [
    {
      id: 1,
      title: "Dulux Weathershield Powerflexx",
      category: "Exterior",
      image: "/dulux/exterior/1.avif",
      features: [
        "12 Year Performance Warranty",
        "Powerflexx Technology",
        "KeepCool Technology"
      ],
      detailsLink: "/dulux/ext/dulux-weathershield-powerflexx",
      titleLink: "/dulux/ext/dulux-weathershield-powerflexx",
    },
    {
      id: 2,
      title: "Dulux Weathershield",
      category: "Exterior",
      image: "/dulux/exterior/2.avif",
      features: [
        "7 Year Performance Warranty",
        "Smart Release Technology- 2X Protection Against Algae & Fungus",
        "KeepCool Technology"
      ],
      detailsLink: "/dulux/ext/dulux-weathershield",
      titleLink: "/dulux/ext/dulux-weathershield",
    },
    {
      id: 3,
      title: "Dulux Promise Exterior Emulsion",
      category: "Exterior",
      image: "/dulux/exterior/3.avif",
      features: [
        "3 Years Performance Warranty",
        "Chromabrite Technology",
        "Algae and Fungus Resistant"
      ],
      detailsLink: "/dulux/ext/dulux-promise-exterior-emulsion",
      titleLink: "/dulux/ext/dulux-promise-exterior-emulsion",
    },
    {
      id: 4,
      title: "Dulux Matt Enamel",
      category: "Exterior",
      image: "/dulux/exterior/4.avif",
      features: [
        "3 Years Performance Warranty",
        "Excellent Resistance To Steam and Moisture",
        "Ideal For Use in Kitchens and Bathrooms"
      ],
      detailsLink: "/dulux/ext/dulux-matt-enamel",
      titleLink: "/dulux/ext/dulux-matt-enamel",
    },
    {
      id: 5,
      title: "Dulux Gloss Enamel",
      category: "Exterior",
      image: "/dulux/exterior/5.avif",
      features: [
        "3 Years Performance Warranty",
        "Non Yellowing",
        "High Coverage"
      ],
      detailsLink: "/dulux/ext/dulux-gloss-enamel",
      titleLink: "/dulux/ext/dulux-gloss-enamel",
    },
    {
      id: 6,
      title: "Dulux Weathershield Water Repellent",
      category: "Exterior",
      image: "/dulux/exterior/6.avif",
      features: [
        "Water Repellent Protection",
        "Comfortable Application"
      ],
      detailsLink: "/dulux/ext/dulux-weathershield-water-repellent",
      titleLink: "/dulux/ext/dulux-weathershield-water-repellent",
    },
    {
      id: 7,
      title: "Dulux Synthetic Undercoat Wood and Metal Primer",
      category: "Exterior",
      image: "/dulux/exterior/7.avif",
      features: [
        "Seals Wood",
        "Improves Adhesion with Top Coat",
        "No Added Lead or Mercury"
      ],
      detailsLink: "/dulux/ext/dulux-synthetic-undercoat-wood-and-metal-primer",
      titleLink: "/dulux/ext/dulux-synthetic-undercoat-wood-and-metal-primer",
    },
    {
      id: 8,
      title: "Dulux Exterior Acrylic Putty",
      category: "Exterior",
      image: "/dulux/exterior/8.avif",
      features: [
        "Reinforces Adhesion and Durability of the End Coat",
        "High Durability"
      ],
      detailsLink: "/dulux/ext/dulux-exterior-acrylic-putty",
      titleLink: "/dulux/ext/dulux-exterior-acrylic-putty",
    },
    {
      id: 9,
      title: "Dulux Aluminium Paint Dual Pack",
      category: "Exterior",
      image: "/dulux/exterior/9.avif",
      features: [
        "Anti-Rust Protection"
      ],
      detailsLink: "/dulux/ext/dulux-aluminium-paint-dual-pack",
      titleLink: "/dulux/ext/dulux-aluminium-paint-dual-pack",
    },
    {
      id: 10,
      title: "Paintex Star Synthetic Enamel",
      category: "Exterior",
      image: "/dulux/exterior/10.avif",
      features: [
        "No Added Lead or Mercury"
      ],
      detailsLink: "/dulux/ext/paintex-star-synthetic-enamel",
      titleLink: "/dulux/ext/paintex-star-synthetic-enamel",
    },
    {
      id: 11,
      title: "Dulux Aquashield Pre Treatment Coat",
      category: "Exterior",
      image: "/dulux/exterior/11.avif",
      features: [
        "FungiClean Technology",
        "AntiMicrobial Pack",
        "Surface Prep Wash"
      ],
      detailsLink: "/dulux/ext/dulux-aquashield-pre-treatment-coat",
      titleLink: "/dulux/ext/dulux-aquashield-pre-treatment-coat",
    },
    {
      id: 12,
      title: "Dulux Aquashield Flexible Waterproof Basecoat",
      category: "Exterior",
      image: "/dulux/exterior/12.avif",
      features: [
        "Hydroshield Technology",
        "Water Repellant",
        "Algae and Fungus Resistant"
      ],
      detailsLink: "/dulux/ext/dulux-aquashield-flexible-waterproof-basecoat",
      titleLink: "/dulux/ext/dulux-aquashield-flexible-waterproof-basecoat",
    },
    {
      id: 13,
      title: "Dulux Aquashield Waterproof Roofcoat",
      category: "Exterior",
      image: "/dulux/exterior/13.avif",
      features: [
        "8 Years Waterproofing Performance",
        "HydroResist",
        "Crack Bridging"
      ],
      detailsLink: "/dulux/ext/dulux-aquashield-waterproof-roofcoat",
      titleLink: "/dulux/ext/dulux-aquashield-waterproof-roofcoat",
    },
    {
      id: 14,
      title: "Dulux Promise Gloss Enamel",
      category: "Exterior",
      image: "/dulux/exterior/14.avif",
      features: [
        "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
        "High Gloss Retention",
        "Improved Drying"
      ],
      detailsLink: "/dulux/ext/dulux-promise-gloss-enamel",
      titleLink: "/dulux/ext/dulux-promise-gloss-enamel",
    },
    {
      id: 15,
      title: "Dulux Red Oxide Metal Primer",
      category: "Exterior",
      image: "/dulux/exterior/15.avif",
      features: [
        "Anti Corrosive",
        "Improves Adhesion with Top Coat",
        "Makes the Finish Long Lasting"
      ],
      detailsLink: "/dulux/ext/dulux-red-oxide-metal-primer",
      titleLink: "/dulux/ext/dulux-red-oxide-metal-primer",
    },
    
    {
      id: 16,
      title: "Paintex Ultraprime",
      category: "Exterior",
      image: "/dulux/exterior/16.avif",
      features: [
        "High Quality Solvent Based Sealer",
        "Reduces Damage From Alkali and Salts",
        "No Added Lead or Mercury"
      ],
      detailsLink: "/dulux/ext/paintex-ultraprime",
      titleLink: "/dulux/ext/paintex-ultraprime",
    },
    {
      id: 17,
      title: "Dulux Woodcare PU Lacquer",
      category: "Exterior",
      image: "/dulux/exterior/17.jpg",
      features: [
        "High Quality and Excellent Durability",
        "Provides Protection from UV Light",
        "No Added Lead or Mercury"
      ],
      detailsLink: "/dulux/ext/dulux-woodcare-pu-lacquer",
      titleLink: "/dulux/ext/dulux-woodcare-pu-lacquer",
    },
    {
      id: 18,
      title: "Dulux Woodcare Special Thinner",
      category: "Exterior",
      image: "/dulux/exterior/18.jpg",
      features: [
        "No Added Lead or Mercury"
      ],
      detailsLink: "/dulux/ext/dulux-woodcare-special-thinner",
      titleLink: "/dulux/ext/dulux-woodcare-special-thinner",
    },
    // {
    //   id: 19,
    //   title: "Dulux Exterior Crackbridging Primer",
    //   category: "Exterior",
    //   image: "/dulux/exterior/19.avif",
    //   features: [
    //     "Alkali Resistant",
    //     "Reinforces Adhesion and Durability of the End Coat"
    //   ],
    //   detailsLink: "/dulux/ext/dulux-exterior-crackbridging-primer",
    //   titleLink: "/dulux/ext/dulux-exterior-crackbridging-primer",
    // },
    // {
    //   id: 20,
    //   title: "Dulux Promise Exterior Primer",
    //   category: "Exterior",
    //   image: "/dulux/exterior/20.jfif",
    //   features: [
    //     "Alkali Resistant",
    //     "Excellent Adhesion",
    //     "Low Odour"
    //   ],
    //   detailsLink: "/dulux/ext/dulux-promise-exterior-primer",
    //   titleLink: "/dulux/ext/dulux-promise-exterior-primer",
    // },
    // {
    //   id: 21,
    //   title: "Dulux Promise SmartChoice Exterior",
    //   category: "Exterior",
    //   image: "/dulux/exterior/21.avif",
    //   features: [
    //     "High Opacity & Coverage",
    //     "Smooth Finish",
    //     "Low Odour"
    //   ],
    //   detailsLink: "/dulux/ext/dulux-promise-smartchoice-exterior",
    //   titleLink: "/dulux/ext/dulux-promise-smartchoice-exterior",
    // }
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Exterior",
      items: [
        { name: "Overview", link: "/dulux/exterior" },
        ...exteriorProducts.map((product) => ({
          name: product.title,
          link: product.detailsLink,
        })),
      ],
      key: "exterior",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(exteriorProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = exteriorProducts.slice(startIndex, endIndex);

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
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Exterior</h3>
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
              <Link href="/dulux/exterior" className="text-gray-900" aria-current="page">
                Dulux Exterior
              </Link>
            </ol>
            {/* Total Products Found */}
            <p className="mt-2 text-sm text-gray-600 ">
              Total Products: ({exteriorProducts.length})
            </p>
          </nav>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exterior</h2>

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

export default DExterior;