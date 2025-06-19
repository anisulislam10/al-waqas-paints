// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Memoized product categories
  const productCategories = [
    { name: "Interior", image: "/interios.avif" },
    { name: "Exterior", image: "/exterior.webp" },
    { name: "Surface Preparation Range", image: "/our-interior-painting-services.jpg" },
    { name: "Wood and Metal", image: "/wood.webp" },
    { name: "Special Surfaces", image: "/special-surface.jpg" },
    { name: "Tools and Items", image: "/tools.webp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") setActiveNav("home");
    else if (pathname === "/about") setActiveNav("about");
    else if (pathname.startsWith("/products")) setActiveNav("products");
  }, [pathname]);

  const isProductCategoryActive = (categoryName) => {
    return pathname === `/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top Contact Info Bar */}
      <div className="bg-blue-900 px-4 py-2 text-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between">
          <span className="text-white sm:text-sm">Premium Coatings Solution</span>
          <div className="flex space-x-4">
            <a href="tel:+923001234567" className="text-white hover:text-blue-100">+92 300 1234567</a>
            <a href="mailto:info@alwaqaspaint.com" className="text-white hover:text-blue-100">info@alwaqaspaint.com</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* <Image 
              src="/logo1.png" 
              alt="Al-Waqas Paint"
              width={60}
              height={60}
              className="rounded-full border-2 border-blue-900"
              priority
            /> */}
            <div className="ml-3">
  <h1 className="text-xl font-bold text-white bg-red-700 px-1 rounded-md">Al-Waqas Paint</h1>
  <p className="text-xs text-gray-500">Premium Coatings Solution</p>
</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`px-3 py-2 text-sm font-medium ${
                activeNav === "home" 
                  ? "text-blue-900 border-b-2 border-blue-900" 
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`px-3 py-2 text-sm font-medium ${
                activeNav === "about" 
                  ? "text-blue-900 border-b-2 border-blue-900" 
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button 
                className={`px-3 py-2 text-sm font-medium flex items-center ${
                  activeNav === "products" 
                    ? "text-blue-900 border-b-2 border-blue-900" 
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                Products
                <svg className={`w-4 h-4 ml-1 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Product Submenu */}
              {isProductsOpen && (
                <div className="fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-6 gap-4">
                      {productCategories.map((category) => (
                        <div key={category.name} className="flex flex-col items-center">
                          <Link
                            href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`group block w-full ${
                              isProductCategoryActive(category.name) ? "ring-2 ring-blue-900 rounded-lg" : ""
                            }`}
                            prefetch={false}
                          >
                            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                              <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className={`object-cover ${
                                  isProductCategoryActive(category.name) 
                                    ? "opacity-90" 
                                    : "group-hover:opacity-75"
                                }`}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            <p className={`mt-2 text-sm font-medium text-center ${
                              isProductCategoryActive(category.name)
                                ? "text-blue-900 font-bold"
                                : "text-gray-900 group-hover:text-blue-900"
                            }`}>
                              {category.name}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/contact-us" 
              className={`px-3 py-2 text-sm font-medium ${
                pathname === "/contact-us"
                  ? "text-blue-900 border-b-2 border-blue-900" 
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeNav === "home" 
                ? "text-blue-900 bg-blue-50" 
                : "text-gray-700 hover:bg-blue-50"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeNav === "about" 
                ? "text-blue-900 bg-blue-50" 
                : "text-gray-700 hover:bg-blue-50"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          <div>
            <button 
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                activeNav === "products" 
                  ? "text-blue-900 bg-blue-50" 
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              Products
              <svg className={`w-5 h-5 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden ${isProductsOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="px-4 py-2 bg-gray-50 rounded-md mt-1">
                <div className="grid grid-cols-2 gap-4">
                  {productCategories.map((category) => (
                    <div key={category.name} className="flex flex-col items-center">
                      <Link
                        href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isProductCategoryActive(category.name) ? "ring-2 ring-blue-900 rounded-lg" : ""
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        prefetch={false}
                      >
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className={`object-cover ${
                              isProductCategoryActive(category.name) 
                                ? "opacity-90" 
                                : "group-hover:opacity-75"
                            }`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p className={`mt-2 text-xs font-medium text-center ${
                          isProductCategoryActive(category.name)
                            ? "text-blue-900 font-bold"
                            : "text-gray-900 group-hover:text-blue-600"
                        }`}>
                          {category.name}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link 
            href="/contact-us" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === "/contact-us"
                ? "text-blue-900 bg-blue-50" 
                : "text-gray-700 hover:bg-blue-50"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;