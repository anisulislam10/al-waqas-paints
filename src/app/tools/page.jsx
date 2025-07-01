// pages/tools.js
import Image from 'next/image';

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
//   {
//     name: "Commend Brushes",
//     description: "Durable brushes with fine bristles for professional finishes on wood and plaster.",
//     image: "/commend-brushes.webp",
//   },
//   {
//     name: "Commend Ruler",
//     description: "Precision ruler for accurate measurements, ensuring clean lines and perfect cuts.",
//     image: "/commend-ruler.webp",
//   },
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
    image: "/tools/Ultrimax_products_8_819fd48b-1866-49e4-828d-76f0d2fcda49.webp",
  },
//   {
//     name: "Deco Set",
//     description: "Complete decorating kit with brushes, rollers, and tray for all painting needs.",
//     image: "/deco-set.webp",
//   },
  {
    name: "Spray Mubah",
    description: "Portable paint sprayer for quick, even coverage on large or textured surfaces.",
    image: "/tools/Paint-DEEP-VIOLET.webp",
  },
];

export default function ToolsPage() {
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
          {tools.map((tool, index) => (
            <div
              key={index}
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
                  priority={index < 3} // Prioritize first 3 images for faster loading
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
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}