"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DInterior = () => {
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

  // Interior Dulux products data
  const interiorProducts = [
    {
      id: 1,
      title: "Dulux Ambiance Velvet Touch Diamond Glo",
      category: "Interior",
      image: "/dulux/Dulux Ambiance.webp",
      features: [
        "6 Year Performance Warranty",
        "Luxurious Finish",
        "Anti-Mould & Anti-Fungus",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-diamon-glo",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-diamon-glo",
    },
    {
      id: 2,
      title: "Dulux Ambiance Velvet Touch Pearl Glo",
      category: "Interior",
      image: "/dulux/2.jpg",
      features: [
        "6 Year Performance Warranty",
        "Luxurious Finish",
        "Anti-Mould & Anti-Fungus",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-pearl-glo",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-pearl-glo",
    },
    {
      id: 3,
      title: "Dulux Ambiance Velvet Touch Rich Matt",
      category: "Interior",
      image: "/dulux/3.jpg",
      features: [
        "6 Year Performance Warranty",
        "Luxurious Finish",
        "Anti-Mould & Anti-Fungus",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-rich-matt",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-rich-matt",
    },
    {
      id: 4,
      title: "Dulux EasyCare",
      category: "Interior",
      image: "/dulux/4.avif",
      features: [
        "5 Years Performance Warranty",
        "Stain Resistant",
        "Anti-Bacterial",
      ],
      detailsLink: "/dulux/dulux-easycare",
      titleLink: "/dulux/dulux-easycare",
    },
    {
      id: 5,
      title: "Dulux Pentalite Classic",
      category: "Interior",
      image: "/dulux/5.jpg",
      features: [
        "4 Years Performance Warranty",
        "High Opacity & Coverage",
        "Anti-Mould & Anti-Fungus",
      ],
      detailsLink: "/dulux/dulux-pentalite-classic",
      titleLink: "/dulux/dulux-pentalite-classic",
    },
    {
      id: 6,
      title: "Dulux Pentalite Emulsion",
      category: "Interior",
      image: "/dulux/6.avif",
      features: [
        "High Coverage",
        "Durable",
        "Easy Application",
      ],
      detailsLink: "/dulux/dulux-pentalite-emulsion",
      titleLink: "/dulux/dulux-pentalite-emulsion",
    },
    {
      id: 7,
      title: "Dulux Matt Enamel",
      category: "Interior",
      image: "/dulux/7.avif",
      features: [
        "3 Years Performance Warranty",
        "Excellent Resistance To Steam and Moisture",
        "Ideal For Use in Kitchens and Bathrooms",
      ],
      detailsLink: "/dulux/dulux-matt-enamel",
      titleLink: "/dulux/dulux-matt-enamel",
    },
    {
      id: 8,
      title: "Dulux Gloss Enamel",
      category: "Interior",
      image: "/dulux/8.avif",
      features: [
        "3 Years Performance Warranty",
        "Non Yellowing",
        "High Coverage",
      ],
      detailsLink: "/dulux/dulux-gloss-enamel",
      titleLink: "/dulux/dulux-gloss-enamel",
    },
    {
      id: 9,
      title: "Dulux Promise Interior Primer",
      category: "Interior",
      image: "/dulux/9.avif",
      features: [
        "Excellent Adhesion",
        "Low Odour",
        "Low VOC",
      ],
      detailsLink: "/dulux/dulux-promise-interior-primer",
      titleLink: "/dulux/dulux-promise-interior-primer",
    },
    {
      id: 10,
      title: "Dulux Synthetic Undercoat Wood and Metal Primer",
      category: "Interior",
      image: "/dulux/10.avif",
      features: [
        "Seals Wood",
        "Improves Adhesion with Top Coat",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/dulux/dulux-synthetic-undercoat-wood",
      titleLink: "/dulux/dulux-synthetic-undercoat-wood",
    },
    {
      id: 11,
      title: "Dulux Promise Interior Emulsion",
      category: "Interior",
      image: "/dulux/11.avif",
      features: [
        "3 Years Performance Warranty",
        "Anti-Bacterial",
        "Chromabrite Technology",
      ],
      detailsLink: "/dulux/dulux-promise-interior-emulsion",
      titleLink: "/dulux/dulux-promise-interior-emulsion",
    },
    {
      id: 12,
      title: "Dulux Woodcare Wood Sealer",
      category: "Interior",
      image: "/dulux/12.png",
      features: [
        "Prevents Sinkage of Top Coat",
        "Allows Good Hold Out",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/dulux/dulux-woodcare-wood-sealer",
      titleLink: "/dulux/dulux-woodcare-wood-sealer",
    },
    {
      id: 13,
      title: "Dulux Aluminium Paint Dual Pack",
      category: "Interior",
      image: "/dulux/13.avif",
      features: [
        "Anti-Rust",
        "Anti-Mold",
        "High Humidity Resistance",
      ],
      detailsLink: "/dulux/dulux-aluminium-paint-dual-pack",
      titleLink: "/dulux/dulux-aluminium-paint-dual-pack",
    },
    {
      id: 14,
      title: "Dulux Interior Acrylic Primer",
      category: "Interior",
      image: "/dulux/14.avif",
      features: [
        "Superior Adhesion",
        "Enhances Topcoat Opacity",
        "Alkali Resistant",
      ],
      detailsLink: "/dulux/dulux-interior-acrylic-primer",
      titleLink: "/dulux/dulux-interior-acrylic-primerr",
    },
    {
      id: 15,
      title: "Dulux Ambiance Velvet Touch Metallic Gold",
      category: "Interior",
      image: "/dulux/15.avif",
      features: [
        "Pure Metallic Finish",
        "UV Resistant",
        "Long-Lasting Shine",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-metallic-gold",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-metallic-gold",
    },
    {
      id: 16,
      title: "Dulux Ambiance Velvet Touch Velvet Gold",
      category: "Interior",
      image: "/dulux/16.avif",
      features: [
        "Delivers a Touch of Luxurious Fabrics",
        "High Coverage",
        "Flawless Matt Finish",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-velvet-gold",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-velvet-gold",
    },
    {
      id: 17,
      title: "Dulux Ambiance Velvet Touch Marble",
      category: "Interior",
      image: "/dulux/17.avif",
      features: [
        "Delivers a Flair of Luscious Marble Patterns",
        "High Scrub Resistance",
        "Easy to Clean",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-marble",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-marble",
    },
    {
      id: 18,
      title: "Dulux Ambiance Velvet Touch Metallic Silver",
      category: "Interior",
      image: "/dulux/18.avif",
      features: [
        "Pure Metallic Finish",
        "Hides Wall Imperfections",
        "Breathable Coating",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-metallic-silver",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-metallic-silver",
    },
    {
      id: 19,
      title: "Dulux Ambiance Velvet Touch Metallic Bronze",
      category: "Interior",
      image: "/dulux/19.avif",
      features: [
        "Pure Metallic Finish",
        "Low Odour",
        "Safe for Sensitive Areas",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-metallic-bronze",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-metallic-bronze",
    },
    {
      id: 20,
      title: "Dulux Ambiance Velvet Touch Metallic Copper",
      category: "Interior",
      image: "/dulux/20.avif",
      features: [
        "Pure Metallic Finish",
        "Improves Adhesion",
        "Quick Drying",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-metallic-copper",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-metallic-copper",
    },
    {
      id: 21,
      title: "Dulux Ambiance Velvet Touch Colour Motion",
      category: "Interior",
      image: "/dulux/21.webp",
      features: [
        "Provides Luminous Brilliance of Colours",
        "Giving a Unique Look Everytime form Every Angle",
        "Smooth Finish",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-colour-motion",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-colour-motion",
    },
    {
      id: 22,
      title: "Dulux Ambiance Velvet Touch Velvet Silver",
      category: "Interior",
      image: "/dulux/22.avif",
      features: [
        "Delivers a Touch of Luxurious Fabrics",
        "UV Resistant",
        "Easy Application",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-velvet-silver",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-velvet-silver",
    },
    {
      id: 23,
      title: "Paintex Star Synthetic Enamel",
      category: "Interior",
      image: "/dulux/23.avif",
      features: [
        "No Added Lead or Mercury",
        "High Coverage",
        "Matt Finish",
      ],
      detailsLink: "/dulux/paintex-star-synthetic-enamel",
      titleLink: "/dulux/paintex-star-synthetic-enamel",
    },
    {
      id: 24,
      title: "Dulux Aquashield Pre Treatment Coat",
      category: "Interior",
      image: "/dulux/24.avif",
      features: [
        "FungiClean Technology",
        "AntiMicrobial Pack",
        "Surface Prep Wash",
      ],
      detailsLink: "/dulux/dulux-aquashield-pre-treatment-coat",
      titleLink: "/dulux/dulux-aquashield-pre-treatment-coat",
    },
    {
      id: 25,
      title: "Dulux Aquashield Interior Waterproof Basecoat",
      category: "Interior",
      image: "/dulux/25.avif",
      features: [
        "Alkali Guard",
        "Crack Bridging",
        "Enhances Topcoat Opacity",
      ],
      detailsLink: "/dulux/dulux-aquashield-interior-waterproof-basecoat",
      titleLink: "/dulux/dulux-aquashield-interior-waterproof-basecoat",
    },
    {
      id: 26,
      title: "Paintex Star Semi-Plastic Emulsion",
      category: "Interior",
      image: "/dulux/26.png",
      features: [
        "Improved Hiding Power",
        "Smooth Matt Finish",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/dulux/paintex-star-semi-plastic-emulsion",
      titleLink: "/dulux/paintex-star-semi-plastic-emulsion",
    },
    {
      id: 27,
      title: "Dulux Woodcare Matt Lacquer",
      category: "Interior",
      image: "/dulux/27.jpg",
      features: [
        "Provides Protection and Smooth Finish",
        "No Added Lead or Mercury",
        "High Humidity Resistance",
      ],
      detailsLink: "/dulux/dulux-woodcare-matt-lacquer",
      titleLink: "/dulux/dulux-woodcare-matt-lacquer",
    },
    {
      id: 28,
      title: "Dulux Woodcare Gloss Lacquer",
      category: "Interior",
      image: "/dulux/28.jpg",
      features: [
        "Provides Protection and Smooth Finish",
        "No Added Lead or Mercury",
        "Durable Coating",
      ],
      detailsLink: "/dulux/dulux-woodcare-gloss-lacquer",
      titleLink: "/dulux/dulux-woodcare-gloss-lacquer",
    },
    {
      id: 29,
      title: "Dulux Promise Interior Putty",
      category: "Interior",
      image: "/dulux/29.png",
      features: [
        "High Coverage",
        "Comfortable Application",
        "Breathable Coating",
      ],
      detailsLink: "/dulux/dulux-promise-interior-putty",
      titleLink: "/dulux/dulux-promise-interior-putty",
    },
    {
      id: 31,
      title: "Dulux Prime-On",
      category: "Interior",
      image: "/dulux/31.avif",
      features: [
        "Reinforces Adhesion and Durability of the End Coat",
        "Excellent Sealing Properties",
        "Quick Drying",
      ],
      detailsLink: "/dulux/dulux-prime-on",
      titleLink: "/dulux/dulux-prime-on",
    },
    {
      id: 32,
      title: "Paintex Putty",
      category: "Interior",
      image: "/dulux/32.png",
      features: [
        "Quick Drying",
        "Easy To Apply",
        "Smooth Matt Finish",
      ],
      detailsLink: "/dulux/paintex-putty",
      titleLink: "/dulux/paintex-putty",
    },
    {
      id: 33,
      title: "Dulux Promise Gloss Enamel",
      category: "Interior",
      image: "/dulux/33.avif",
      features: [
        "Chromabrite Technology - For Long Lasting Beautiful Bright Color",
        "High Gloss Retention",
        "Improved Drying",
      ],
      detailsLink: "/dulux/dulux-promise-gloss-enamel",
      titleLink: "/dulux/dulux-promise-gloss-enamel",
    },
    {
      id: 34,
      title: "Dulux Ambiance Velvet Touch Linen",
      category: "Interior",
      image: "/dulux/34.avif",
      features: [
        "Delivers a Weave of Textured Fabrics",
        "Matt Finish",
        "Easy to Clean",
      ],
      detailsLink: "/dulux/dulux-ambiance-velvet-touch-linen",
      titleLink: "/dulux/dulux-ambiance-velvet-touch-linen",
    },
    {
      id: 35,
      title: "Dulux Red Oxide Metal Primer",
      category: "Interior",
      image: "/dulux/35.avif",
      features: [
        "Anti Corrosive",
        "Improves Adhesion with Top Coat",
        "Makes the Finish Long Lasting",
      ],
      detailsLink: "/dulux/dulux-red-oxide-metal-primer",
      titleLink: "/dulux/dulux-red-oxide-metal-primer",
    },
    {
      id: 36,
      title: "Paintex Ultratex Vinyl Emulsion",
      category: "Interior",
      image: "/dulux/36.avif",
      features: [
        "Excellent Coverage",
        "Smooth Matt Finish",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/dulux/paintex-ultratex-vinyl-emulsion",
      titleLink: "/dulux/paintex-ultratex-vinyl-emulsion",
    },
    {
      id: 37,
      title: "Paintex Ultraprime",
      category: "Interior",
      image: "/dulux/37.avif",
      features: [
        "High Quality Solvent Based Sealer",
        "Reduces Damage From Alkali and Salts",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/dulux/paintex-ultraprime",
      titleLink: "/dulux/paintex-ultraprime",
    },
    {
      id: 38,
      title: "Dulux Woodcare PU Lacquer",
      category: "Interior",
      image: "/dulux/38.jpg",
      features: [
        "High Quality and Excellent Durability",
        "Provides Protection from UV Light",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/dulux/dulux-woodcare-pu-lacquer",
      titleLink: "/dulux/dulux-woodcare-pu-lacquer",
    },
    {
      id: 39,
      title: "Dulux Woodcare Special Thinner",
      category: "Interior",
      image: "/dulux/39.jpg",
      features: [
        "No Added Lead or Mercury",
        "Tough and Durable",
        "Easy Maintenance",
      ],
      detailsLink: "/dulux/dulux-woodcare-special-thinner",
      titleLink: "/dulux/dulux-woodcare-special-thinner",
    },
    {
      id: 40,
      title: "Paintex Sheesha Putty",
      category: "Interior",
      image: "/dulux/40.png",
      features: [
        "Superior Quality",
        "Seals Stains",
        "Quick Drying",
      ],
      detailsLink: "/dulux/paintex-sheesha-putty",
      titleLink: "/dulux/paintex-sheesha-putty",
    },
    {
      id: 41,
      title: "Dulux Synthetic Clear Varnish",
      category: "Interior",
      image: "/dulux/41.jpg",
      features: [
        "High Gloss Finish",
        "Excellent Abrasion Resistance",
        "Fast Drying",
      ],
      detailsLink: "/dulux/dulux-synthetic-clear-varnish",
      titleLink: "/dulux/dulux-synthetic-clear-varnish",
    },
    {
      id: 42,
      title: "Dulux Interior Acrylic Putty",
      category: "Interior",
      image: "/dulux/42.png",
      features: [
        "High Coverage",
        "Comfortable Application",
        "Smooth Application",
      ],
      detailsLink: "/dulux/dulux-interior-acrylic-putty",
      titleLink: "/dulux/dulux-interior-acrylic-putty",
    },
    {
      id: 43,
      title: "Dulux Promise SmartChoice Interior",
      category: "Interior",
      image: "/dulux/43.avif",
      features: [
        "High Opacity & Coverage",
        "Smooth Finish",
        "Low Odour",
      ],
      detailsLink: "/dulux/dulux-promise-smartchoice-interior",
      titleLink: "/dulux/dulux-promise-smartchoice-interior",
    },
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Interior",
      items: [
        { name: "Overview", link: "/dulux/interior" },
        ...interiorProducts.map((product) => ({
          name: product.title,
          link: product.detailsLink,
        })),
      ],
      key: "interior",
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
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Interior</h3>
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
              <Link href="/dulux/interior" className="text-gray-900" aria-current="page">
                Dulux Interior
              </Link>
            </ol>
            {/* Total Products Found */}
            <p className="mt-2 text-sm text-gray-600 ">
              Total Products: ({interiorProducts.length})
            </p>
          </nav>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interior</h2>

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

export default DInterior;