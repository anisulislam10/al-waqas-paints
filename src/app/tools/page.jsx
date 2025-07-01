// app/tools/page.js
'use client'
import Image from 'next/image';
import { useState } from 'react'; // Fix 1: Import useState from 'react' instead of 'next'

const tools = [
  {
    name: "Captain Brushes",
    description: "High-quality brushes for precise painting, ideal for detailed work on walls and trim.",
    image: "/tools/captain-brush.webp",
  },
  {
    name: "Universal Roller",
    description: "Versatile 9-inch roller for smooth, even paint application on large surfaces.",
    image: "/tools/UNIVERSAL-ROLLER-N-EXT-1.webp",
  },
  {
    name: "Local Brushes",
    description: "Affordable brushes for everyday painting tasks, perfect for DIY projects.",
    image: "/tools/71bPe3QuxoS._UF894,1000_QL80_.jpg",
  },
  {
    name: "Paint Tray",
    description: "Sturdy paint tray with liners for easy cleanup, designed for 9-inch rollers.",
    image: "/tools/istockphoto-495665869-612x612.jpg",
  },
  {
    name: "Roller Stick",
    description: "Extendable stainless steel pole for reaching high walls and ceilings with ease.",
    image: "/tools/181912bd42f410dc063f0908cf5e6e6d.jpg",
  },
  {
    name: "Scraper",
    description: "Heavy-duty scraper for removing old paint and preparing surfaces for a smooth finish.",
    image: "/tools/scrapper.png",
  },
  {
    name: "Spray Mubah",
    description: "Portable paint sprayer for quick, even coverage on large or textured surfaces.",
    image: "/tools/Paint-Spray-Bottles.png",
  },
  {
    name: "Kerosene oil",
    description: "High-purity kerosene for thinning oil-based paints, cleaning tools, and fuel applications. Ensures smooth paint consistency and easy equipment maintenance.",
    image: "/tools/keroscene.jpg",
  },
  {
    name: "Deerfos Sandpaper",
    description: "Premium abrasive sandpaper for smooth surface preparation. Ideal for sanding wood, metal, or paint between coats. Durable backing with consistent grit for even finishes.",
    image: "/tools/sandPaper.webp",
  },
  {
    name: "Plaster of Paris",
    description: "Fast-setting gypsum plaster for smooth casts, molds, and wall repairs. Dries quickly to a hard finish.",
    image: "/tools/Prep-PlasterOfParis_2.png",
  },
  {
    name: "Wallcoat",
    description: "Premium wall finishing coat for smooth, durable surfaces. Ideal for final touch-ups and seamless repairs.",
    image: "/tools/wallcoat-removebg-preview.png",
  },
  {
    name: "Artist Brushes",
    description: "Professional-grade paintbrushes for fine art and detailing. Precision tips with durable bristles for smooth acrylic, oil, or watercolor application.",
    image: "/tools/artistBrushes.webp",
  },
  {
    name: "Xtreme Tail Bonds",
    description: "High-strength adhesive for permanent, waterproof bonding of tails, wigs, and hair extensions. Safe for skin and flexible when dry.",
    image: "/tools/XTREMEBOND-W.webp",
  },
 {
  name: "Texture Roller",
  description: "Specialty roller for creating decorative wall textures like orange peel, knockdown, or stipple effects. Works with all texture compounds.",
  image: "/tools/Textured-rollers.webp"
},
{
  name: "Korenesh Sandpaper",
  description: "Coarse-grit sandpaper for heavy material removal and surface preparation. Ideal for smoothing rough wood, metal, or drywall compounds.",
  image: "/tools/kornish-sand-paper.png"
}

];
export default function ToolsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(tools.length / itemsPerPage);

  // Get current tools
  const currentTools = tools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) { // Fix 2: Add page validation
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
          Our Painting Tools
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Discover our range of high-quality painting tools, designed for both professionals and DIY enthusiasts to achieve flawless results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {currentTools.map((tool, index) => (
            <div
              key={tool.name} // Fix 3: Use unique tool.name instead of index for key
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-200 hover:scale-105"
            >
              <div className="relative h-40 sm:h-48 md:h-56">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                  onError={(e) => { // Fix 4: Add error handling for images
                    e.target.src = '/tools/fallback-image.jpg'; // Provide a fallback image
                  }}
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {tool.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">
                  {tool.description}
                </p>
                <a
                  href="tel:+923335093223"
                  className="inline-block bg-green-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-md font-bold hover:bg-green-800 transition-colors duration-200 text-center text-sm sm:text-base"
                  aria-label={`Call to inquire about ${tool.name}`} // Fix 5: Add accessibility
                >
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && ( // Fix 6: Conditionally render pagination
          <div className="flex justify-center mt-8 sm:mt-12">
            <nav className="flex items-center gap-1 sm:gap-2" aria-label="Pagination">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                aria-label="Previous page"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md border ${currentPage === page ? 'bg-green-700 text-white border-green-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                aria-label="Next page"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}