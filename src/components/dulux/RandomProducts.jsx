"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const RandomProduct = () => {
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
      detailsLink: "/products/ambiance-diamond-glo",
      titleLink: "/products/ambiance-diamond-glo",
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
      detailsLink: "/products/ambiance-pearl-glo",
      titleLink: "/products/ambiance-pearl-glo",
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
      detailsLink: "/products/ambiance-rich-matt",
      titleLink: "/products/ambiance-rich-matt",
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
      detailsLink: "/products/easycare",
      titleLink: "/products/easycare",
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
      detailsLink: "/products/pentalite-classic",
      titleLink: "/products/pentalite-classic",
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
      detailsLink: "/products/pentalite-emulsion",
      titleLink: "/products/pentalite-emulsion",
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
      detailsLink: "/products/matt-enamel",
      titleLink: "/products/matt-enamel",
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
      detailsLink: "/products/gloss-enamel",
      titleLink: "/products/gloss-enamel",
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
      detailsLink: "/products/promise-interior-primer",
      titleLink: "/products/promise-interior-primer",
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
      detailsLink: "/products/synthetic-undercoat",
      titleLink: "/products/synthetic-undercoat",
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
      detailsLink: "/products/promise-interior-emulsion",
      titleLink: "/products/promise-interior-emulsion",
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
      detailsLink: "/products/woodcare-sealer",
      titleLink: "/products/woodcare-sealer",
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
      detailsLink: "/products/aluminium-paint",
      titleLink: "/products/aluminium-paint",
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
      detailsLink: "/products/acrylic-primer",
      titleLink: "/products/acrylic-primer",
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
      detailsLink: "/products/velvet-touch-metallic",
      titleLink: "/products/velvet-touch-metallic",
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
      detailsLink: "/products/velvet-touch-velvet",
      titleLink: "/products/velvet-touch-velvet",
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
      detailsLink: "/products/ambiance-silk-sheen",
      titleLink: "/products/ambiance-silk-sheen",
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
      detailsLink: "/products/ultramatt",
      titleLink: "/products/ultramatt",
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
      detailsLink: "/products/ecosense-low-voc",
      titleLink: "/products/ecosense-low-voc",
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
      detailsLink: "/products/stainblock-primer",
      titleLink: "/products/stainblock-primer",
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
      detailsLink: "/products/luxewash",
      titleLink: "/products/luxewash",
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
      detailsLink: "/products/colormax-emulsion",
      titleLink: "/products/colormax-emulsion",
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
      detailsLink: "/products/antifade-matt",
      titleLink: "/products/antifade-matt",
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
      detailsLink: "/products/procover-primer",
      titleLink: "/products/procover-primer",
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
      detailsLink: "/products/satinglow",
      titleLink: "/products/satinglow",
    },
    {
      id: 26,
      title: "Paintex Star Semi-Plastic Emulsion",
      category: "Interior",
      image: "/dulux/26.jfif",
      features: [
        "Improved Hiding Power",
        "Smooth Matt Finish",
        "No Added Lead or Mercury",
      ],
      detailsLink: "/products/quickdry-emulsion",
      titleLink: "/products/quickdry-emulsion",
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
      detailsLink: "/products/aquashield",
      titleLink: "/products/aquashield",
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
      detailsLink: "/products/velvetmatt",
      titleLink: "/products/velvetmatt",
    },
    {
      id: 29,
      title: "Dulux Promise Interior Putty",
      category: "Interior",
      image: "/dulux/29.jfif",
      features: [
        "High Coverage",
        "Comfortable Application",
        "Breathable Coating",
      ],
      detailsLink: "/products/ecomatt",
      titleLink: "/products/ecomatt",
    },
    {
      id: 30,
      title: "Dulux HighGloss Emulsion",
      category: "Interior",
      image: "/dulux/30.jfif",
      features: [
        "High Gloss Finish",
        "Scratch Resistant",
        "Long-Lasting Shine",
      ],
      detailsLink: "/products/highgloss-emulsion",
      titleLink: "/products/highgloss-emulsion",
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
      detailsLink: "/products/primeseal",
      titleLink: "/products/primeseal",
    },
    {
      id: 32,
      title: "Paintex Putty",
      category: "Interior",
      image: "/dulux/32.jfif",
      features: [
        "Quick Drying",
        "Easy To Apply",
        "Smooth Matt Finish",
      ],
      detailsLink: "/products/colorvivid",
      titleLink: "/products/colorvivid",
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
      detailsLink: "/products/smoothflow-emulsion",
      titleLink: "/products/smoothflow-emulsion",
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
      detailsLink: "/products/antibacterial-matt",
      titleLink: "/products/antibacterial-matt",
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
      detailsLink: "/products/woodcare-varnish",
      titleLink: "/products/woodcare-varnish",
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
      detailsLink: "/products/ecoglow",
      titleLink: "/products/ecoglow",
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
      detailsLink: "/products/ultracover-matt",
      titleLink: "/products/ultracover-matt",
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
      detailsLink: "/products/satinwood-plus",
      titleLink: "/products/satinwood-plus",
    },
    {
      id: 40,
      title: "Paintex Sheesha Putty",
      category: "Interior",
      image: "/dulux/40.jfif",
      features: [
        "Superior Quality",
        "Seals Stains",
        "Quick Drying",
      ],
      detailsLink: "/products/proshield-primer",
      titleLink: "/products/proshield-primer",
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
      detailsLink: "/products/luxematt",
      titleLink: "/products/luxematt",
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
      detailsLink: "/products/colorsense-emulsion",
      titleLink: "/products/colorsense-emulsion",
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
      detailsLink: "/products/colorsense-emulsion",
      titleLink: "/products/colorsense-emulsion",
    },
  ];

  // State to store random products
  const [randomProducts, setRandomProducts] = useState([]);

  // Function to select 6 random products
  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const selectedProducts = shuffleArray(interiorProducts).slice(0, 6);
    setRandomProducts(selectedProducts);
  }, []);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
            <li className="text-gray-900" aria-current="page">
              Featured Products
            </li>
          </ol>
        </nav>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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

              <div className="p-4">
                {/* Product Title - Links to separate page */}
                <Link href={product.titleLink}>
                  <h3 className="text-lg font-semibold text-blue-700 mb-1 hover:text-blue-900 transition-colors">
                    {product.title}
                  </h3>
                </Link>

                {/* Product Category */}
                <p className="text-sm text-gray-500 mb-2">✔ {product.category}</p>

                {/* Product Features */}
                <ul className="text-sm text-gray-600 mb-3 list-disc pl-5">
                  {product.features.map((feature, index) => (
                    <li key={index}>☑ {feature}</li>
                  ))}
                </ul>

                {/* Call Now Button */}
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
  );
};

export default RandomProduct;