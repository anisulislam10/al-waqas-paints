// pages/page.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const productCategories = [
    { name: 'Interior', image: '/interios.avif', href: '/products/interior' },
    { name: 'Exterior', image: '/exterior.webp', href: '/products/exterior' },
    { name: 'Surface Preparation Range', image: '/our-interior-painting-services.jpg', href: '/products/surface-preparation-range' },
    { name: 'Wood and Metal', image: '/wood.webp', href: '/products/wood-and-metal' },
    { name: 'Special Surfaces', image: '/special-surface.jpg', href: '/products/special-surfaces' },
    { name: 'Tools & Other Items', image: '/tools.webp', href: '/products/special-surfaces' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="bg-blue-900 text-white min-h-screen flex items-center justify-center bg-[url('/homepage.webp')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Elevate Your Spaces with Al-Waqas Paint
            </h1>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto md:mx-0">
              Discover premium, eco-friendly coating solutions for interiors, exteriors, and specialty surfaces, crafted for durability and style.
            </p>
            <a
              href="#product-categories"
              className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-medium hover:bg-red-800 transition-colors duration-200"
            >
              Explore Our Categories
            </a>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="product-categories" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Explore Our Product Range</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 bg-gray-50"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:opacity-90 transition-opacity duration-200"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Al-Waqas Paint</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Al-Waqas Paint, we are passionate about transforming spaces with high-quality, sustainable coatings. Our innovative solutions for interior, exterior, and specialty surfaces ensure lasting beauty and protection.
                </p>
                <Link
                  href="/about"
                  className="inline-block text-blue-900 hover:text-blue-700 font-medium"
                >
                  Learn More About Us
                </Link>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <Image
                  src="/wall-painting.jpg"
                  alt="Painting process"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Need help choosing the perfect paint or have questions about our products? Reach out to our team for expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:info@alwaqaspaint.com"
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 11.4 4.8 6h14.4zM4 18V7.6l7.3 5.5c.4.3.9.3 1.3 0L20 7.6V18H4z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+923001234567"
                className="inline-flex items-center px-6 py-3 bg-red-700 text-white rounded-md font-medium hover:bg-red-800 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}