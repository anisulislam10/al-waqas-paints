'use client';

import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  // Branch data
  const branches = [
    {
      id: 1,
      name: "Islamabad Main Branch",
      address: "Shop 1 & 2, Raja Plaza, Duhma Patak Ternol, Islamabad",
      phone: "0300 3452434",
      landline: "051-2227322",
      email: "info@alwaqaspaint.com",
      mapUrl: "https://maps.app.goo.gl/6cTvyJ6G22eJr3kNA",
      coords: "33.6844,73.0479"
    },

    {
      id: 2,
      name: "DHA Islamabad Branch",
      address: "Nadir Plaza, Opposite Lignum Tower, DHA 2, Near Al Janat Mall, GT Road, Islamabad",
      phone: "0333 5093223",
      landline: "051-5709115",
      email: "info@alwaqaspaint.com",
      mapUrl: "https://www.google.com/maps/place/33%C2%B031%2721.1%22N+73%C2%B008%2750.1%22E/@33.5225214,73.1423731,713m/data=!3m2!1e3!4b1!4m12!1m7!3m6!1s0x38df99955970a55b:0xe3f90d4e3efe16c8!2zQWwtIFdhcWFzIFBhaW50ICYgSGFyZHdhcmUg2KfZhNmI2YLYp9i1INm-24zZhtm5INin24zZhtqIINq-2KfYsdqI2YjbjNim2LE!8m2!3d33.6040812!4d72.8511801!16s%2Fg%2F11rcx2lvf9!3m3!8m2!3d33.522517!4d73.147244!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D",
      coords: "33.5678,73.0567"
    },    {
      id: 3,
      name: "Rawat Branch",
      address: "Dhoke Major Stop Kallar Road, Rawat",
      phone: "0317-4701826",
      email: "info@alwaqaspaint.com",
      mapUrl: "https://maps.app.goo.gl/uE3cKxExHSLuyNoa6",
      coords: "33.4986,73.1995"
    },
  ];

  return (
    <>
      <Head>
        <title>Contact US | Al-Waqas Paint</title>
        <meta name="description" content="Find our branches across Islamabad and Rawat. Get directions, contact information, and visit us today." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-[url('/bg_about_conver.jpg')] bg-cover bg-center" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Branches</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Visit us at any of our convenient locations across Islamabad and Rawat
            </p>
            
            {/* Breadcrumb Navigation - Moved here below the text */}
            <div className=" py-4 rounded-lg mt-6 max-w-2xl mx-auto ">
              <nav className="flex justify-center" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-600">
                      <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                      </svg>
                      Home
                    </Link>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mx-1 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                      </svg>
                      <span className="ml-1 text-sm font-medium text-white md:ml-2">Contact us</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-1">
              {branches.map((branch) => (
                <div key={branch.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{branch.name}</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <p className="text-gray-600">{branch.address}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
                        </svg>
                        <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {branch.phone}
                        </a>
                      </div>
                      
                      {branch.landline && (
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.18 1.13.57 2.37.97 3.67.97.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C9.54 21 3 14.46 3 6.5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.3.4 2.54.97 3.67.18.35.09.75-.18 1.02l-2.2 2.2z" />
                          </svg>
                          <a href={`tel:${branch.landline.replace(/\s+/g, '')}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                            {branch.landline} (Landline)
                          </a>
                        </div>
                      )}
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.8 2L12 11.4 4.8 6h14.4zM4 18V7.6l7.3 5.5c.4.3.9.3 1.3 0L20 7.6V18H4z" />
                        </svg>
                        <a href={`mailto:${branch.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-1 pt-0">
                    <a 
                      href={branch.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Direction
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}