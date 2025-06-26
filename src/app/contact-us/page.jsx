'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Al-Waqas Paint</title>
        <meta name="description" content="Get in touch with us. Find our location, send us an email, or give us a call." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We're here to help. Reach out to us via email, phone, or visit our location.
            </p>
            {/* Breadcrumb Navigation */}
            <nav className="flex  p-3 rounded-lg max-w-7xl mx-auto mt-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-white">
                <li>
                  <Link href="/" className="hover:text-white transition-colors font-medium">
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
                  <span className="text-white font-medium">Contact Us</span>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Contact Info and Map */}
        <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-black">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-900 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-black">Our Location</h3>
                  <p className="text-black text-lg">
                    Nadir Plaza, Opposite Lignum Tower <br />
                    Dha 2 Near Al Janat Mall GT Road, Islamabad PK
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-900 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-black">Email Us</h3>
                  <a href="mailto:info@alwaqaspaint.com" className="text-black text-lg hover:text-blue-900">
                    info@alwaqaspaint.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-900 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-black">Call Us</h3>
                  <a href="tel:+923335093223" className="text-black text-lg hover:text-blue-900">
                    +92 3335 093223
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13299.635262425394!2d73.14762359081455!3d33.52235510410011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1718716234567!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}