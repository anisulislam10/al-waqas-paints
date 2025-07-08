"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import YouMayAlsoLike from "../RandomProducts";

const WoodAndMetalContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expandedMenus, setExpandedMenus] = useState({
    sealerThinner: true,
    lacquer: false,
    topCoats: false,
  });
  const [activeCategory, setActiveCategory] = useState("all");

  // Update active category based on query parameter
  useEffect(() => {
    const category = searchParams.get("category");
    setActiveCategory(category || "all");
  }, [searchParams]);

  // Toggle menu expansion
  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Wood and Metal products data
  const products = [
    {
      id: 1,
      title: "Nippon Timber Finish Wood Sealer",
      category: "Sealer & Thinner",
      image: "/Timber-Finish-Wood-Sealer-1.png",
      detailsLink: "/products/nippon-timber-finish-wood-sealer",
      titleLink: "/products/nippon-timber-finish-wood-sealer",
    },
    {
      id: 2,
      title: "Nippon Timber Finish Thinner",
      category: "Sealer & Thinner",
      image: "/Timber-Finish-Thinner.png",
      detailsLink: "/products/nippon-timber-finish-thinner",
      titleLink: "/products/nippon-timber-finish-thinner",
    },
    {
      id: 3,
      title: "Nippon Paint Timber Finish PU Varnish (Gloss & Matt)",
      category: "Lacquer",
      image: "/PU-Varnish-min.png",
      detailsLink: "/products/nippon-timber-finish-pu-varnish",
      titleLink: "/products/nippon-timber-finish-pu-varnish",
    },
    {
      id: 4,
      title: "Nippon Timber Finish Matt Lacquer",
      category: "Lacquer",
      image: "/Matt-Lacquer.png",
      detailsLink: "/products/nippon-timber-finish-matt-lacquer",
      titleLink: "/products/nippon-timber-finish-matt-lacquer",
    },
    {
      id: 5,
      title: "Nippon Synthetic Clear Varnish",
      category: "Lacquer",
      image: "/Synthetic-Clear-Varnish-3L.png",
      detailsLink: "/products/nippon-synthetic-clear-varnish",
      titleLink: "/products/nippon-synthetic-clear-varnish",
    },
    {
      id: 6,
      title: "Nippon Timber Finish C W Lacquer",
      category: "Lacquer",
      image: "/Clear-Wood-Lacquer.png",
      detailsLink: "/products/nippon-timber-finish-cw-lacquer",
      titleLink: "/products/nippon-timber-finish-cw-lacquer",
    },
    {
      id: 7,
      title: "Nippon Q-Lac Gloss Enamel",
      category: "Top Coats",
      image: "/Q-lac.png",
      detailsLink: "/products/nippon-q-lac-gloss-enamel",
      titleLink: "/products/nippon-q-lac-gloss-enamel",
    },
    {
      id: 8,
      title: "Nippon 9000 Gloss Finish Enamel",
      category: "Top Coats",
      image: "/900-Gloss-Finish-1.png",
      detailsLink: "/products/nippon-9000-gloss-finish-enamel",
      titleLink: "/products/nippon-9000-gloss-finish-enamel",
    },
    {
      id: 9,
      title: "Nippon Hydrogloss Enamel",
      category: "Top Coats",
      image: "/Hydro-gloss-1.png",
      detailsLink: "/products/nippon-hydrogloss-enamel",
      titleLink: "/products/nippon-hydrogloss-enamel",
    },
    {
      id: 10,
      title: "Nippon Platone High Gloss Enamel",
      category: "Top Coats",
      image: "/platone-1.png",
      detailsLink: "/products/nippon-platone-high-gloss-enamel",
      titleLink: "/products/nippon-platone-high-gloss-enamel",
    },
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Sealer & Thinner",
      items: [
        { name: "Overview", link: "/products/wood-and-metal?category=sealerThinner" },
        ...products
          .filter((product) => product.category === "Sealer & Thinner")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "sealerThinner",
    },
    {
      title: "Lacquer",
      items: [
        { name: "Overview", link: "/products/wood-and-metal?category=lacquer" },
        ...products
          .filter((product) => product.category === "Lacquer")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "lacquer",
    },
    {
      title: "Top Coats",
      items: [
        { name: "Overview", link: "/products/wood-and-metal?category=topCoats" },
        ...products
          .filter((product) => product.category === "Top Coats")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "topCoats",
    },
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => {
          switch (activeCategory) {
            case "sealerThinner":
              return product.category === "Sealer & Thinner";
            case "lacquer":
              return product.category === "Lacquer";
            case "topCoats":
              return product.category === "Top Coats";
            default:
              return true;
          }
        });

  return (
    <>
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
            <Link href="/products/wood-and-metal" className="hover:text-blue-600 transition-colors font-medium">
              Wood & Metal
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
            <span className="text-gray-700 font-medium">
              {activeCategory === "all" ? "Wood & Metal Paints" : sidebarMenus.find((menu) => menu.key === activeCategory)?.title || "Wood & Metal Paints"}
            </span>
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Wood & Metal</h3>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {activeCategory === "all" ? "Wood & Metal Paints" : sidebarMenus.find((menu) => menu.key === activeCategory)?.title || "Wood & Metal Paints"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
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

          <YouMayAlsoLike />
        </div>
      </div>
    </>
  );
};

const WoodAndMetalCom = () => {
  // Structured data for the /products/wood-and-metal page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://al-waqas-paints.vercel.app/products/wood-and-metal/#webpage",
        "url": "https://al-waqas-paints.vercel.app/products/wood-and-metal",
        "name": "Wood & Metal Paints | Al-Waqas Paint",
        "description": "Explore our range of sealer & thinner, lacquer, and top coats for wood and metal from Nippon, including Timber Finish Wood Sealer, Timber Finish Thinner, Timber Finish PU Varnish, Timber Finish Matt Lacquer, Synthetic Clear Varnish, Timber Finish C W Lacquer, Q-Lac Gloss Enamel, 9000 Gloss Finish Enamel, Hydrogloss Enamel, and Platone High Gloss Enamel.",
        "inLanguage": "en-PK",
        "isPartOf": {
          "@id": "https://al-waqas-paints.vercel.app/#website"
        },
        "publisher": {
          "@id": "https://al-waqas-paints.vercel.app/#organization"
        },
        "breadcrumb": {
          "@id": "https://al-waqas-paints.vercel.app/products/wood-and-metal/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://al-waqas-paints.vercel.app/products/wood-and-metal/#breadcrumb",
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
            "name": "Wood & Metal",
            "item": "https://al-waqas-paints.vercel.app/products/wood-and-metal"
          }
        ]
      }
    ]
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Wood & Metal Paints | Al-Waqas Paint</title>
        <meta
          name="description"
          content="Explore our range of sealer & thinner, lacquer, and top coats for wood and metal from Nippon, including Timber Finish Wood Sealer, Timber Finish Thinner, Timber Finish PU Varnish, Timber Finish Matt Lacquer, Synthetic Clear Varnish, Timber Finish C W Lacquer, Q-Lac Gloss Enamel, 9000 Gloss Finish Enamel, Hydrogloss Enamel, and Platone High Gloss Enamel."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <WoodAndMetalContent />
      </Suspense>
    </div>
  );
};

export default WoodAndMetalCom;