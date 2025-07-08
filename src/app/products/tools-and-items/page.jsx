import Link from 'next/link';
import Image from 'next/image';

export default function ToolsAndItems() {
  const tools = [
    {
      name: 'Paint Brushes',
      description: 'High-quality brushes for precise application and smooth finishes.',
      image: '/paint-brush.jpg',
    },
    {
      name: 'Rollers',
      description: 'Durable rollers for even coverage on large surfaces.',
      image: '/Roller-Kit-Mini.jpg',
    },
    {
      name: 'Spray Guns',
      description: 'Professional-grade spray guns for efficient and flawless painting.',
      image: '/spray-guns.webp',
    },
    {
      name: 'Scrapers & Sanders',
      description: 'Essential tools for surface preparation and perfect results.',
      image: '/paint-scrapper.webp',
    },
    {
      name: 'Paint Trays',
      description: 'Sturdy trays for easy paint loading and mess-free application.',
      image: '/Paint_Tray.webp',
    },
    {
      name: 'Masking Tapes',
      description: 'Premium tapes for clean edges and precise painting.',
      image: '/musking-ta.webp',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-20 flex items-center justify-center bg-[url('/tools-hero.webp')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tools & Other Items</h1>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
              Discover our range of professional painting tools and accessories designed for efficiency and precision.
            </p>
            
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Tools & Accessories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 bg-gray-50"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity duration-200"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{tool.description}</p>
                    <a
                      href="tel:+923335093223"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
                      </svg>
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Have questions about our tools or need assistance? Contact our team for expert support.
            </p>
            <a
              href="tel:+923335093223"
              className="inline-flex items-center px-6 py-3 bg-red-700 text-white rounded-md font-medium hover:bg-red-800 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
              </svg>
              Call Now
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}