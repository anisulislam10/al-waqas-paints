"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Client Component to handle useSearchParams and product filtering
const ProductList = ({ interiorProducts, sidebarMenus }) => {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  // Update active category based on query parameter
  useEffect(() => {
    const category = searchParams.get("category");
    setActiveCategory(category || "all");
  }, [searchParams]);

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? interiorProducts
      : interiorProducts.filter((product) => {
          switch (activeCategory) {
            case "waterBased":
              return product.category === "Water Based Matt Emulsion";
            case "interiorEmulsion":
              return product.category === "Interior Emulsion";
            case "mattEnamel":
              return product.category === "Matt Enamel";
            case "texturedSeries":
              return product.category === "Textured Series";
            default:
              return true;
          }
        });

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {activeCategory === "all"
          ? "Interior Paints"
          : sidebarMenus.find((menu) => menu.key === activeCategory)?.title ||
            "Interior Paints"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
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
              <Link href={product.titleLink}>
                <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-700 transition-colors">
                  {product.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>
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
  );
};

const Interior = () => {
  const router = useRouter();
  const [expandedMenus, setExpandedMenus] = useState({
    waterBased: true,
    interiorEmulsion: false,
    mattEnamel: false,
    texturedSeries: false,
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
      category: "Water Based Matt Emulsion",
      image: "/Odourless-Air-Care.png",
      detailsLink: "/products/nippon-odourless-aircare",
      titleLink: "/products/nippon-odourless-aircare",
    },
    {
      id: 2,
      title: "Nippon Spot-Less Matt Emulsion",
      category: "Water Based Matt Emulsion",
      image: "/spot-less-2.png",
      detailsLink: "/products/nippon-spot-less",
      titleLink: "/products/nippon-spot-less",
    },
    {
      id: 3,
      title: "Nippon Easywash",
      category: "Water Based Matt Emulsion",
      image: "/easy-wash.png",
      detailsLink: "/products/easywash",
      titleLink: "/products/easywash",
    },
    {
      id: 4,
      title: "Nippon Glamour",
      category: "Water Based Matt Emulsion",
      image: "/Glamour-min-1.png",
      detailsLink: "/products/glamour",
      titleLink: "/products/glamour",
    },
    {
      id: 5,
      title: "Nippon Matex Pro Emulsion - White Bucket",
      category: "Interior Emulsion",
      image: "/Matex-Pro-1-1.png",
      detailsLink: "/products/nippon-matex-pro",
      titleLink: "/products/nippon-matex-pro",
    },
    {
      id: 6,
      title: "Nippon Quality Emulsion",
      category: "Interior Emulsion",
      image: "/Group-12966.png",
      detailsLink: "/products/nippon-quality-emulsion",
      titleLink: "/products/nippon-quality-emulsion",
    },
    {
      id: 7,
      title: "Nippon Easy Coat Emulsion",
      category: "Interior Emulsion",
      image: "/easy-coat-1.png",
      detailsLink: "/products/nippon-easy-coat",
      titleLink: "/products/nippon-easy-coat",
    },
    {
      id: 8,
      title: "Nippon Super Matex Emulsion",
      category: "Interior Emulsion",
      image: "/super-matex-1.png",
      detailsLink: "/products/nippon-super-matex",
      titleLink: "/products/nippon-super-matex",
    },
    {
      id: 9,
      title: "Nippon Matex Gold Emulsion",
      category: "Interior Emulsion",
      image: "/matex-gold-1.png",
      detailsLink: "/products/nippon-matex-gold",
      titleLink: "/products/nippon-matex-gold",
    },
    {
      id: 10,
      title: "Nippon Perfect Emulsion",
      category: "Interior Emulsion",
      image: "/Perfect-Emulsion.png",
      detailsLink: "/products/nippon-perfect-emulsion",
      titleLink: "/products/nippon-perfect-emulsion",
    },
    {
      id: 11,
      title: "Nippon Crystal Matt Enamel",
      category: "Matt Enamel",
      image: "/Crystal-Matt-Packshot-2-min-1.png",
      detailsLink: "/products/nippon-crystal-matt-enamel",
      titleLink: "/products/nippon-crystal-matt-enamel",
    },
    {
      id: 12,
      title: "Nippon Brilliance Matt Enamel",
      category: "Matt Enamel",
      image: "/Brilliance-Matt-Enamel-1.png",
      detailsLink: "/products/nippon-brilliance-matt-enamel",
      titleLink: "/products/nippon-brilliance-matt-enamel",
    },
    {
      id: 13,
      title: "Nippon Satin Glo Matt Enamel",
      category: "Matt Enamel",
      image: "/satin-glo-web-image.jpg",
      detailsLink: "/products/nippon-satin-glo-matt-enamel",
      titleLink: "/products/nippon-satin-glo-matt-enamel",
    },
    {
      id: 14,
      title: "Nippon Momento - Gold Frost",
      category: "Textured Series",
      image: "/Momento-Special-Effect-sparkle-gold.png",
      detailsLink: "/products/nippon-momento-gold-frost",
      titleLink: "/products/nippon-momento-gold-frost",
    },
    {
      id: 15,
      title: "Nippon Momento - Pearl Frost",
      category: "Textured Series",
      image: "/Momento-Special-Effect-sparkle-pearl.png",
      detailsLink: "/products/nippon-momento-pearl-frost",
      titleLink: "/products/nippon-momento-pearl-frost",
    },
    {
      id: 16,
      title: "Nippon Texture Nippon'eon",
      category: "Textured Series",
      image: "/Nippon-texture-nippeon.png",
      detailsLink: "/products/nippon-texture-nipponeon",
      titleLink: "/products/nippon-texture-nipponeon",
    },
    {
      id: 17,
      title: "Nippon Momento - Snow Frost",
      category: "Textured Series",
      image: "/Momento-Special-Effect-spark-silver.png",
      detailsLink: "/products/nippon-momento-snow-frost",
      titleLink: "/products/nippon-momento-snow-frost",
    },
  ];

  // Sidebar menu structure
  const sidebarMenus = [
    {
      title: "Water Based Matt Emulsion",
      items: [
        { name: "Overview", link: "/products/interior?category=waterBased" },
        ...interiorProducts
          .filter((product) => product.category === "Water Based Matt Emulsion")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "waterBased",
    },
    {
      title: "Interior Emulsion",
      items: [
        { name: "Overview", link: "/products/interior?category=interiorEmulsion" },
        ...interiorProducts
          .filter((product) => product.category === "Interior Emulsion")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "interiorEmulsion",
    },
    {
      title: "Matt Enamel",
      items: [
        { name: "Overview", link: "/products/interior?category=mattEnamel" },
        ...interiorProducts
          .filter((product) => product.category === "Matt Enamel")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "mattEnamel",
    },
    {
      title: "Textured Series",
      items: [
        { name: "Overview", link: "/products/interior?category=texturedSeries" },
        ...interiorProducts
          .filter((product) => product.category === "Textured Series")
          .map((product) => ({
            name: product.title,
            link: product.detailsLink,
          })),
      ],
      key: "texturedSeries",
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
        "description": "Explore our range of water-based matt emulsion, interior emulsion, matt enamel, and textured series paints from Nippon, including Odour-less AirCare, Spot-Less, Easywash, Glamour, Matex Pro, Quality Emulsion, Easy Coat, Super Matex, Matex Gold, Perfect Emulsion, Crystal Matt Enamel, Brilliance Matt Enamel, Satin Glo Matt Enamel, Momento Gold Frost, Momento Pearl Frost, Texture Nippon'eon, and Momento Snow Frost.",
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
        "name": "Interior Paints",
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
            "category": product.category,
            "brand": {
              "@type": "Brand",
              "name": "Nippon"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "PKR",
              "price": product.id <= 4 ? (product.id === 1 ? "5000" : product.id === 2 ? "5500" : product.id === 3 ? "5200" : "5300") : "5100",
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
            "name": "Interior Paints",
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
          content="Explore our range of water-based matt emulsion, interior emulsion, matt enamel, and textured series paints from Nippon, including Odour-less AirCare, Spot-Less, Easywash, Glamour, Matex Pro, Quality Emulsion, Easy Coat, Super Matex, Matex Gold, Perfect Emulsion, Crystal Matt Enamel, Brilliance Matt Enamel, Satin Glo Matt Enamel, Momento Gold Frost, Momento Pearl Frost, Texture Nippon'eon, and Momento Snow Frost."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
            <span className="text-gray-700 font-medium">Interior Paints</span>
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
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

        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList interiorProducts={interiorProducts} sidebarMenus={sidebarMenus} />
        </Suspense>
      </div>
    </div>
  );
};

export default Interior;