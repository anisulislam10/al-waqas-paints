
// app/about/page.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: 'Quality',
      description: 'We use premium materials to deliver durable, vibrant coatings.',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    },
    {
      title: 'Sustainability',
      description: 'Our eco-friendly paints reduce environmental impact.',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93V4.07c4.05.47 7.07 3.94 6.6 8.01-.47 4.07-3.94 7.09-8.01 6.6z',
    },
    {
      title: 'Innovation',
      description: 'We pioneer cutting-edge solutions for all surfaces.',
      icon: 'M12 2a10 10 0 1010 10A10 10 0 0012 2zm4 14H8v-2h8zm0-4H8v-2h8zm0-4H8V6h8z',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        {/* Header Section */}
        <section
          className="min-h-[60vh] flex items-center justify-center bg-[url('/about-hero.jpg')] bg-cover bg-center relative text-white"
        >
          <div className="absolute inset-0 bg-blue-900 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              About Al-Waqas Paint
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Transforming spaces with premium, eco-friendly coatings. Discover our passion for quality and innovation.
            </p>
            
          </div>
        </section>

        {/* About Al-Waqas Paint Section */}
       <section id="about-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 relative">
          Who We Are
          <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-red-700 transform -translate-x-1/2"></span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 w-full">
            <div className="text-lg text-gray-600 leading-relaxed">
              <p>
                Al-Waqas Paint is a leading provider of premium, eco-friendly coating solutions, dedicated to transforming spaces. Our passion for quality drives us to create innovative paints for interiors, exteriors, and specialty surfaces, ensuring lasting beauty and protection. With a commitment to sustainability, we use low-VOC formulas to minimize environmental impact. Serving customers in over 20 countries, Al-Waqas Paint combines cutting-edge technology with timeless craftsmanship to elevate homes and businesses worldwide.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              src="/about.png"
              alt="Al-Waqas Paint craftsmanship"
              width={600}
              height={400}
              className="rounded-lg object-contain w-full h-[400px]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 relative">
              Our Values
              <span className="absolute bottom-0 left-1/2 w-16 h-1 bg-red-700 transform -translate-x-1/2"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <svg className="w-12 h-12 text-blue-900 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={value.icon} />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us for expert guidance or explore our premium paint collections.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-red-700 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/products/interior"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
