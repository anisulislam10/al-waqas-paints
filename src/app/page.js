
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';



// Export metadata for SEO (App Router style)
export const metadata = {
  title: "Al-Waqas Paint | Premium Coatings",
  description: "Discover premium Nippon and Dulux coatings for interiors, exteriors, and specialty surfaces."
};

// Server Component (default in App Router)
export default function Home() {
  const productCategories = [
    { name: 'Nippon Interior', image: '/interios.avif', href: '/products/interior', description: 'Eco-friendly, low-VOC paints like Odour-less All-in-1 and MozzieGuard for vibrant, safe interiors.' },
    { name: 'Dulux Interior', image: '/dulux-interior.jpg', href: '/dulux/interior', description: 'Innovative paints like Baby Paint Emulsion and Platinum BioCare for healthy, stylish homes.' },
    { name: 'Nippon Exterior', image: '/exterior.webp', href: '/products/exterior', description: 'Weatherbond with heat-reflective pigments for durable, tropical-ready exteriors.' },
    { name: 'Dulux Exterior', image: '/dulux-exterior.jpg', href: '/dulux/exterior', description: 'Weathershield Powerflexx with Dualshield™ Technology for long-lasting protection.' },
    { name: 'Nippon Special Surfaces', image: '/special-surface.jpg', href: '/products/special-surfaces', description: 'Specialty coatings like Slate Finish and FlexiSeal for unique surfaces.' },
    { name: 'Dulux Special Products', image: '/dulux-special.jpg', href: '/dulux/special-product', description: 'Decorative concrete and specialty coatings for creative finishes.' },
    { name: 'Surface Preparation Range', image: '/our-interior-painting-services.jpg', href: '/products/surface-preparation-range', description: 'Primers and sealers for flawless paint application.' },
    { name: 'Wood and Metal', image: '/wood.webp', href: '/products/wood-and-metal', description: 'Durable coatings for wood and metal surfaces.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
     <Head>
  <title>Al-Waqas Paint | Premium Coatings</title>
  <meta
    name="description"
    content="Discover premium Nippon and Dulux coatings for interiors, exteriors, and specialty surfaces."
  />
</Head>

<Script
  id="structured-data"
  type="application/ld+json"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Al-Waqas Paint",
      "url": "https://alwaqaspaint.com",
      "description":
        "Al-Waqas Paint offers premium Nippon and Dulux coatings for interiors, exteriors, and specialty surfaces, crafted for durability and sustainability.",
      "image": "https://alwaqaspaint.com/logoal-.png",
      "priceRange": "$$",
      "email": "info@alwaqaspaint.com",
      "subOrganization": [
        {
          "@type": "LocalBusiness",
          "name": "Al-Waqas Paint - Islamabad Main Branch",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop 1 & 2, Raja Plaza, Duhma Patak Ternol",
            "addressLocality": "Islamabad",
            "addressRegion": "Punjab",
            "postalCode": "44000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.6844",
            "longitude": "73.0479"
          },
          "telephone": ["+923003452434", "+92512227322"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        },
        {
          "@type": "LocalBusiness",
          "name": "Al-Waqas Paint - Rawat Branch",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dhoke Major Stop Kallar Road",
            "addressLocality": "Rawat",
            "addressRegion": "Punjab",
            "postalCode": "44000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.4950",
            "longitude": "73.1920"
          },
          "telephone": ["+923174701826"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        },
        {
          "@type": "LocalBusiness",
          "name": "Al-Waqas Paint - DHA Islamabad Branch",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nadir Plaza, Opposite Lignum Tower, DHA 2, Near Al Janat Mall, GT Road",
            "addressLocality": "Islamabad",
            "addressRegion": "Punjab",
            "postalCode": "44000",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.5533",
            "longitude": "73.1738"
          },
          "telephone": ["+923335093223", "+92515709115"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "85",
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Ali Khan"
          },
          "datePublished": "2024-02-18",
          "reviewBody": "Al-Waqas Paint provided excellent quality paints and great customer service!"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/alwaqaspaint",
        "https://twitter.com/alwaqaspaint",
        "https://instagram.com/alwaqaspaint"
      ]
    })
  }}
/>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="bg-blue-900 text-white min-h-screen flex items-center justify-center bg-[url('/bg_gif-.gif')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Elevate Your Spaces with Al-Waqas Paint
            </h1>
            <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto md:mx-0">
              Discover premium, eco-friendly Nippon and Dulux coatings for interiors, exteriors, and specialty surfaces, crafted for durability, style, and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#product-categories"
                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors duration-200"
              >
                Explore Our Categories
              </a>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="product-categories" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Explore Nippon & Dulux Products</h2>
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
                    <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{category.description}</p>
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
                  At Al-Waqas Paint, we partner with Nippon and Dulux to bring you high-quality, sustainable coatings. Our innovative solutions for interior, exterior, and specialty surfaces ensure lasting beauty and protection.
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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Branches Section */}
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Branches</h2>
    <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
      Visit us at any of our convenient locations across Islamabad and Rawat
    </p>

    {/* Horizontal Layout for Branches */}
    <div className="flex flex-col lg:flex-row items-stretch gap-8">
      {/* Branch 1 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Branch 1</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <p className="text-gray-700">
              Shop 1 & 2, Raja Plaza, Duhma Patak Ternol Islamabad
            </p>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:03003452434" className="text-gray-700 hover:text-blue-900">
              0300 3452434
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:0512227322" className="text-gray-700 hover:text-blue-900">
              051-2227322 (Landline)
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 11.4 4.8 6h14.4zM4 18V7.6l7.3 5.5c.4.3.9.3 1.3 0L20 7.6V18H4z" />
            </svg>
            <a href="mailto:info@alwaqaspaint.com" className="text-gray-700 hover:text-blue-900">
              info@alwaqaspaint.com
            </a>
          </div>
        </div>
      </div>
 {/* Branch 2 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Branch 2</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <p className="text-gray-700">
              Nadir Plaza, Opposite Lignum Tower, DHA 2,Near Al Janat Mall, GT Road, Islamabad
            </p>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:03335093223" className="text-gray-700 hover:text-blue-900">
              0333 5093223
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:0515709115" className="text-gray-700 hover:text-blue-900">
              051-5709115 (Landline)
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 11.4 4.8 6h14.4zM4 18V7.6l7.3 5.5c.4.3.9.3 1.3 0L20 7.6V18H4z" />
            </svg>
            <a href="mailto:info@alwaqaspaint.com" className="text-gray-700 hover:text-blue-900">
              info@alwaqaspaint.com
            </a>
          </div>
        </div>
      </div>
      {/* Branch 3 */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex-1">
        <h3 className="text-xl font-semibold text-blue-900 mb-3">Branch 3</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <p className="text-gray-700">
              Dhoke Major Stop Kallar Road, Rawat
            </p>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:03174701826" className="text-gray-700 hover:text-blue-900">
              0317-4701826
            </a>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 11.4 4.8 6h14.4zM4 18V7.6l7.3 5.5c.4.3.9.3 1.3 0L20 7.6V18H4z" />
            </svg>
            <a href="mailto:info@alwaqaspaint.com" className="text-gray-700 hover:text-blue-900">
              info@alwaqaspaint.com
            </a>
          </div>
        </div>
      </div>

     
    </div>
  </div>
</section>
      </main>
    </div>
  );
}