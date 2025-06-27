import Link from 'next/link';

const Footer = () => {
  // Nippon product links from Navbar.jsx
  const nipponProductLinks = [
    { name: 'Interior', href: '/products/interior' },
    { name: 'Exterior', href: '/products/exterior' },
    { name: 'Surface Preparation Range', href: '/products/surface-preparation-range' },
    { name: 'Wood and Metal', href: '/products/wood-and-metal' },
    { name: 'Special Surfaces', href: '/products/special-surfaces' },
  ];

  // Dulux product links from Navbar.jsx
  const duluxProductLinks = [
    { name: 'Interior', href: '/dulux/interior' },
    { name: 'Exterior', href: '/dulux/exterior' },
    { name: 'Primer', href: '/dulux/primer' },
    { name: 'Special Product', href: '/dulux/special-product' },
    { name: 'Waterproofing', href: '/dulux/waterproofing' },
  ];

  // Branch details
  const branches = [
    {
      name: 'Islamabad Main Branch',
      address: 'Shop 1 & 2, Raja Plaza, Duhma Patak Ternol, Islamabad, Pakistan',
      phones: ['+923003452434', '0512227322'],
      email: 'info@alwaqaspaint.com',
    },
    {
      name: 'Rawat Branch',
      address: 'Dhoke Major Stop Kallar Road, Rawat, Pakistan',
      phones: ['+923174701826'],
      email: 'info@alwaqaspaint.com',
    },
    {
      name: 'DHA Islamabad Branch',
      address: 'Nadir Plaza, Opposite Lignum Tower, DHA 2, Near Al Janat Mall, GT Road, Islamabad, Pakistan',
      phones: ['+923335093223', '0515709115'],
      email: 'info@alwaqaspaint.com',
    },
  ];

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Intro, Nippon, Dulux, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Intro Section */}
<div>
  <img
    src="https://alwaqaspaint.com/logoal-.png"
    alt="Al-Waqas Paint Logo"
    className="mb-4 bg-white"
  />
  <p className="text-sm text-gray-300">
    Al-Waqas Paint proudly offers premium Nippon and Dulux coatings for interior, exterior, and specialty surfaces. With an unwavering commitment to excellence, innovation, and environmental sustainability, we deliver vibrant, long-lasting, and eco-conscious solutions that transform spaces with enduring beauty and superior quality.
  </p>
</div>

          {/* Nippon Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nippon Products</h3>
            <ul className="space-y-2">
              {nipponProductLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-blue-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dulux Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dulux Products</h3>
            <ul className="space-y-2">
              {duluxProductLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-blue-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@alwaqaspaint.com"
                  className="hover:text-blue-100 transition-colors duration-200"
                  aria-label="Email Al-Waqas Paint"
                >
                  info@alwaqaspaint.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:+923335093223"
                  className="hover:text-blue-100 transition-colors duration-200"
                  aria-label="Call Al-Waqas Paint"
                >
                  +923335093223
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/alwaqaspaint"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-100 transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              
               
            </div>
          </div>
        </div>

        {/* Branches Section: Horizontal Layout */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <h3 className="text-lg font-semibold mb-6 text-center">Our Branches</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch) => (
              <div key={branch.name}>
                <h4 className="text-sm font-medium text-gray-200 mb-2">{branch.name}</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>{branch.address}</span>
                  </li>
                  {branch.phones.map((phone, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                      </svg>
                      <a
                        href={`tel:${phone}`}
                        className="hover:text-blue-100 transition-colors duration-200"
                        aria-label={`Call ${branch.name} at ${phone}`}
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a
                      href={`mailto:${branch.email}`}
                      className="hover:text-blue-100 transition-colors duration-200"
                      aria-label={`Email ${branch.name}`}
                    >
                      {branch.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Al-Waqas Paint. All rights reserved. | 
          Designed by <a href="https://sharplogicians.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Sharplogicians</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;