"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Interior = () => {
  // State for expanded menu items
  const [expandedMenus, setExpandedMenus] = useState({
    waterBased: true,
  });

  // Toggle menu expansion
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Interior products data
  const interiorProducts = [
    {
      id: 1,
      title: "Nippon Odour~Less AirCare",
      category: "Interior",
      image: "/Odourless-Air-Care.png",
      detailsLink: "/products/nippon-odourless-aircare",
      titleLink: "/products/nippon-odourless-aircare",
    },
    {
      id: 2,
      title: "Nippon Spot-Less Matt Emulsion",
      category: "Interior",
      image: "/spot-less-2.png",
      detailsLink: "/products/nippon-spot-less",
      titleLink: "/products/nippon-spot-less",
    },
    {
      id: 3,
      title: "Nippon Easywash",
      category: "Interior",
      image: "/easy-wash.png",
      detailsLink: "/products/easywash",
      titleLink: "/products/easywash",
    },
    {
      id: 4,
      title: "Nippon Glamour",
      category: "Interior",
      image: "/Glamour-min-1.png",
      detailsLink: "/products/glamour",
      titleLink: "/products/glamour",
    },
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Water Based Matt Emulsion",
      items: [
        { name: "Overview", link: "/products/interior" },
        ...interiorProducts.map((product) => ({
          name: product.title,
          link: product.detailsLink,
        })),
      ],
      key: "waterBased",
    },
  ];

  // Structured data for the /products/interior page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://al-waqas-paints.vercel.app/products/interior/#webpage",
        "url": "https://al-waqas-paints.vercel.app/products/interior",
        "name": "Interior Paints | Al-Waqas Paint",
        "description": "Explore our range of water-based matt emulsion interior paints from Nippon, including Odour-less AirCare, Spot-Less, Easywash, and Glamour.",
        "inLanguage": "en-PK",
        "isPartOf": {
          "@id": "https://al-waqas-paints.vercel.app/#website"
        },
        "publisher": {
          "@id": "https://al-waqas-paints.vercel.app/#organization"
        },
        "breadcrumb": {
          "@id": "https://al-waqas-paints.vercel.app/products/interior/#breadcrumb"
        }
      },
      {
        "@type": "ItemList",
        "name": "Water Based Matt Emulsion Paints",
        "itemListElement": interiorProducts.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": product.title,
            "url": `https://al-waqas-paints.vercel.app${product.detailsLink}`,
            "image": `https://al-waqas-paints.vercel.app${product.image}`,
            "description": `Premium ${product.title} interior paint by Nippon for durable and vibrant finishes.`,
            "sku": `NIP-${String(product.id).padStart(3, "0")}`,
            "category": "Interior Paints",
            "brand": {
              "@type": "Brand",
              "name": "Nippon"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "PKR",
              "price": product.id === 1 ? "5000" : product.id === 2 ? "5500" : product.id === 3 ? "5200" : "5300", // Placeholder prices
              "availability": "http://schema.org/InStock",
              "url": `https://al-waqas-paints.vercel.app${product.detailsLink}`
            }
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://al-waqas-paints.vercel.app/products/interior/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://al-waqas-paints.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://al-waqas-paints.vercel.app/products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Interior",
            "item": "https://al-waqas-paints.vercel.app/products/interior"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Water Based Matt Emulsion",
            "item": "https://al-waqas-paints.vercel.app/products/interior"
          }
        ]
      }
    ]
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Interior Paints | Al-Waqas Paint</title>
        <meta
          name="description"
          content="Explore our range of water-based matt emulsion interior paints from Nippon, including Odour-less AirCare, Spot-Less, Easywash, and Glamour."
        />
        
      </Head>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-6 bg-gray-100 p-3 rounded-lg max-w-7xl mx-auto" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mx-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/interior" className="hover:text-blue-600 transition-colors font-medium">
              Interior
            </Link>
          </li>
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mx-1 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">Water Based Matt Emulsion</span>
          </li>
        </ol>
      </nav>

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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Water Based Matt Emulsion</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorProducts.map((product) => (
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

                <div className="p-4">
                  {/* Product Title - Links to separate page */}
                  <Link href={product.titleLink}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                  </Link>

                  {/* Product Category */}
                  <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>

                  {/* Buy Now Button */}
                  <a href="tel:+923335093223">
                    <button className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
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

export default Interior;