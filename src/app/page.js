
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import MetaPixel from '@/components/MetaPixel';



// Export metadata for SEO (App Router style)
export const metadata = {
  title: "Al-Waqas Paint | Premium Coatings",
  description: "Discover premium Nippon and Dulux coatings for interiors, exteriors, and specialty surfaces.",
  keywords: "Nippon paint, Dulux paint, premium coatings, interior paint, exterior paint, eco-friendly paint, Islamabad paint store",
  author: "Al-Waqas Paint",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Al-Waqas Paint | Premium Coatings",
    description: "Explore high-quality Nippon and Dulux paints for interiors, exteriors, and specialty surfaces at Al-Waqas Paint.",
    url: "https://alwaqaspaint.com",
    type: "website",
    site_name: "Al-Waqas Paint",
  },
  facebook: {
    card: "summary_large_image",
    title: "Al-Waqas Paint | Premium Coatings",
    description: "Discover premium Nippon and Dulux coatings for all surfaces at Al-Waqas Paint.",
    site: "@alwaqaspaint",
  },
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
        <meta name="description" content="Discover premium Nippon and Dulux coatings for interiors, exteriors, and specialty surfaces." />
        <meta name="keywords" content="Nippon paint, Dulux paint, premium coatings, interior paint, exterior paint, eco-friendly paint, Islamabad paint store, Al waqas paint, Alwaqas paint" />
        <meta name="author" content="Al-Waqas Paint" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="OKgEj979FUP2uM4YpOCngAKYTlaFD-uTz7TiZOTD9Fg" />
        <meta property="og:title" content="Al-Waqas Paint | Premium Coatings" />
        <meta property="og:description" content="Explore high-quality Nippon and Dulux paints for interiors, exteriors, and specialty surfaces at Al-Waqas Paint." />
        <meta property="og:url" content="https://alwaqaspaint.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://alwaqaspaint.com/logoal-.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Al-Waqas Paint Logo" />
        <meta property="og:site_name" content="Al-Waqas Paint" />
        <meta name="facebook:title" content="Al-Waqas Paint | Premium Coatings" />
        <meta name="facebook:description" content="Discover premium Nippon and Dulux coatings for all surfaces at Al-Waqas Paint." />
        <meta name="facebook:site" content="@alwaqaspaint" />
        <link rel="canonical" href="https://alwaqaspaint.com" />
        <MetaPixel />
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
{/* Hero Section */}
<section
  className="text-white min-h-screen flex items-center justify-center bg-[url('/alwaqas-paint-banner.webp')] bg-cover bg-center relative"
>
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Brand Logos Container */}
  <div className="hidden md:block fixed top-1/2 right-0 transform -translate-y-1/2 z-20 flex flex-col items-center justify-center bg-gray-700/80 p-2 rounded-l-lg">
    <p className="text-white mb-3 text-xs font-semibold text-center">Our Brands</p>
    <div className="flex flex-col gap-3 items-center">
      <Image 
        src="/nippon.png" 
        alt="Nippon Paint" 
        width={80} 
        height={40}
        className="h-8 w-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
      <Image 
        src="/Dulux_logo.webp" 
        alt="Dulux Paint" 
        width={80} 
        height={40}
        className="h-8 w-16 object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
      <Image 
        src="/master-logo-removebg-preview.png" 
        alt="Master Paints" 
        width={80} 
        height={40}
        className="h-8 w-16 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
      <Image 
        src="/berger-logo-removebg-preview.png" 
        alt="Berger Paints" 
        width={80} 
        height={40}
        className="h-8 w-16 object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  </div>

  {/* Mobile Brand Logos (Visible on sm and below) */}
  <div className="md:hidden absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center justify-center bg-gray-700/80 p-3 rounded-t-lg">
    <p className="text-white mb-2 text-xs font-semibold text-center">Our Brands</p>
    <div className="flex flex-row gap-3 items-center justify-center">
      <Image 
        src="/nippon.png" 
        alt="Nippon Paint" 
        width={60} 
        height={30}
        className="h-6 w-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
      <Image 
        src="/Dulux_logo.webp" 
        alt="Dulux Paint" 
        width={60} 
        height={30}
        className="h-6 w-12 object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
      <Image 
        src="/master-logo-removebg-preview.png" 
        alt="Master Paints" 
        width={60} 
        height={30}
        className="h-6 w-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
      <Image 
        src="/berger-logo-removebg-preview.png" 
        alt="Berger Paints" 
        width={60} 
        height={30}
        className="h-6 w-12 object-cover opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
      Transform Your World with Al-Waqas Paint
    </h1>
    <p className="text-base sm:text-lg text-gray-100 mb-5 sm:mb-6 max-w-xl mx-auto md:mx-0">
      Experience Nippon, Dulux, and Master coatings eco-smart, long-lasting, beautifully crafted for every surface.
    </p>

 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
  <a
    href="#product-categories"
    className="inline-flex items-center justify-center bg-[#E50019] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-[#FF0A23] transition-colors duration-200 text-lg sm:text-base"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path>
    </svg>
    Explore Our Categories
  </a>
  <Link
    href="/get-a-quote"
    className="inline-flex items-center justify-center bg-[#1C097A] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-[#2410A0] transition-colors duration-200 text-sm sm:text-base"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
    </svg>
    Get a Quote
  </Link>
  <a
    href="https://wa.me/+923165800002"
    className="inline-flex items-center justify-center bg-green-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-green-500 transition-colors duration-200 text-sm sm:text-base"
  >
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-.719-.911-.99-.242-.272-.472-.447-.693-.447-.222 0-.445.074-.643.223-.297.297-1.125 1.093-1.125 2.664 0 1.57 1.144 3.089 1.307 3.287.173.198 2.255 3.367 5.473 4.722.744.347 1.328.556 1.78.669.471.124.892.099 1.227.074.347-.025 1.05-.396 1.198-.793.149-.396.149-.743.074-.892-.074-.149-.297-.297-.595-.446z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
    WhatsApp
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
            <div>
              <p className="text-gray-700">
                Shop 1 & 2, Raja Plaza, Duhma Patak Ternol Islamabad
              </p>
              <a 
                href="https://maps.app.goo.gl/6cTvyJ6G22eJr3kNA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
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
            <div>
              <p className="text-gray-700">
                Nadir Plaza, Opposite Lignum Tower, DHA 2, Near Al Janat Mall, GT Road, Islamabad
              </p>
              <a 
                href="https://www.google.com/maps/place/33%C2%B031%2721.1%22N+73%C2%B008%2750.1%22E/@33.5225214,73.1423731,713m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x38df99955970a55b:0xe3f90d4e3efe16c8!2zQWwtIFdhcWFzIFBhaW50ICYgSGFyZHdhcmUg2KfZhNmI2YLYp9i1INm-24zZhtm5INin24zZhtqIINq-2KfYsdqI2YjbjNim2LE!8m2!3d33.6040812!4d72.8511801!16s%2Fg%2F11rcx2lvf9!3m3!8m2!3d33.522517!4d73.147244!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
            </svg>
            <a href="tel:+923335093223" className="text-gray-700 hover:text-blue-900">
              +92 316 5800002
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
            <div>
              <p className="text-gray-700">
                Dhoke Major Stop Kallar Road, Rawat
              </p>
              <a 
                href="https://maps.app.goo.gl/uE3cKxExHSLuyNoa6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
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