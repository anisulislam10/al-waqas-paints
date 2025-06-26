// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isNipponProductsOpen, setIsNipponProductsOpen] = useState(false); // State for Nippon dropdown
  const [isDuluxProductsOpen, setIsDuluxProductsOpen] = useState(false); // State for Dulux dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Nippon product categories
  const nipponCategories = [
    { name: "Interior", image: "/interios.avif" },
    { name: "Exterior", image: "/exterior.webp" },
    { name: "Surface Preparation Range", image: "/our-interior-painting-services.jpg" },
    { name: "Wood and Metal", image: "/wood.webp" },
    { name: "Special Surfaces", image: "/special-surface.jpg" },
    // { name: "Tools and Items", image: "/tools.webp" },
  ];

  // Dulux product categories (with placeholder images)
  const duluxCategories = [
    { name: "Interior", image: "/dulux-interior.jpg" },
    { name: "Exterior", image: "/dulux-exterior.jpg" },
    { name: "Primer", image: "/dulux-primer.jpg" },
    { name: "Special product", image: "/dulux-special.jpg" },
    { name: "Waterproofing", image: "/dulux-waterproffing.jpg" },
    //  { name: "Tools and Items", image: "/dulux-tools.avif" },
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
    else if (pathname.startsWith("/products") || pathname.startsWith("/dulux")) setActiveNav("products");
  }, [pathname]);

  const isNipponCategoryActive = (categoryName) => {
    return pathname === `/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const isDuluxCategoryActive = (categoryName) => {
    return pathname === `/dulux/${categoryName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top Contact Info Bar */}
<div className="bg-gradient-to-r from-blue-900 to-red-900 px-4 py-2 text-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex justify-between">
          <span className="text-white sm:text-sm">Premium Coatings Solution</span>
          <div className="flex space-x-4">
            <a href="tel:+923335093223" className="text-white hover:text-blue-100">+92 3335 093223</a>
            <a href="mailto:info@sharplogician.com" className="text-white hover:text-blue-100">info@sharplogician.com</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="ml-3">
              <h1 className="text-xl font-bold text-white bg-red-700 px-1 rounded-md">Al-Waqas Paint</h1>
              <p className="text-xs text-gray-500">Premium Coatings Solution</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8 font-bold">
  <Link 
    href="/" 
    className={`px-3 py-2 text-sm font-bold ${
      activeNav === "home" 
        ? "text-blue-900 border-b-2 border-blue-900" 
        : "text-gray-700 hover:text-blue-900"
    }`}
  >
    Home
  </Link>
  
  <Link 
    href="/about" 
    className={`px-3 py-2 text-sm font-bold ${
      activeNav === "about" 
        ? "text-blue-900 border-b-2 border-blue-900" 
        : "text-gray-700 hover:text-blue-900"
    }`}
  >
    About
  </Link>

  {/* Nippon Products Dropdown */}
  <div 
    className="relative"
    onMouseEnter={() => setIsNipponProductsOpen(true)}
    onMouseLeave={() => setIsNipponProductsOpen(false)}
  >
    <button 
      className={`px-3 py-2 text-sm font-bold flex items-center ${
        pathname.startsWith("/products")
          ? "text-blue-900 border-b-2 border-blue-900" 
          : "text-gray-700 hover:text-blue-900"
      }`}
    >
      Nippon
      <svg className={`w-4 h-4 ml-1 ${isNipponProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {/* Nippon Product Submenu */}
    {isNipponProductsOpen && (
      <div className="fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-6 gap-4">
            {nipponCategories.map((category) => (
              <div key={category.name} className="flex flex-col items-center">
                <Link
                  href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`group block w-full ${
                    isNipponCategoryActive(category.name) ? "ring-2 ring-blue-900 rounded-lg" : ""
                  }`}
                  prefetch={false}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className={`object-cover ${
                        isNipponCategoryActive(category.name) 
                          ? "opacity-90" 
                          : "group-hover:opacity-75"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <p className={`mt-2 text-sm font-bold text-center ${
                    isNipponCategoryActive(category.name)
                      ? "text-blue-900"
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

  {/* Dulux Products Dropdown */}
  <div 
    className="relative"
    onMouseEnter={() => setIsDuluxProductsOpen(true)}
    onMouseLeave={() => setIsDuluxProductsOpen(false)}
  >
    <button 
      className={`px-3 py-2 text-sm font-bold flex items-center ${
        pathname.startsWith("/dulux-products")
          ? "text-blue-900 border-b-2 border-blue-900" 
          : "text-gray-700 hover:text-blue-900"
      }`}
    >
      Dulux
      <svg className={`w-4 h-4 ml-1 ${isDuluxProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {/* Dulux Product Submenu */}
    {isDuluxProductsOpen && (
      <div className="fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-6 gap-4">
            {duluxCategories.map((category) => (
              <div key={category.name} className="flex flex-col items-center">
                <Link
                  href={`/dulux/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`group block w-full ${
                    isDuluxCategoryActive(category.name) ? "ring-2 ring-blue-900 rounded-lg" : ""
                  }`}
                  prefetch={false}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className={`object-cover ${
                        isDuluxCategoryActive(category.name) 
                          ? "opacity-90" 
                          : "group-hover:opacity-75"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <p className={`mt-2 text-sm font-bold text-center ${
                    isDuluxCategoryActive(category.name)
                      ? "text-blue-900"
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
    className={`px-3 py-2 text-sm font-bold ${
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
                ? "text-blue-900 bg-blueynthetic-50" 
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

          {/* Nippon Products Mobile Dropdown */}
          <div>
            <button 
              onClick={() => setIsNipponProductsOpen(!isNipponProductsOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith("/products") 
                  ? "text-blue-900 bg-blue-50" 
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              Nippon
              <svg className={`w-5 h-5 ${isNipponProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden ${isNipponProductsOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="px-4 py-2 bg-gray-50 rounded-md mt-1">
                <div className="grid grid-cols-2 gap-4">
                  {nipponCategories.map((category) => (
                    <div key={category.name} className="flex flex-col items-center">
                      <Link
                        href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isNipponCategoryActive(category.name) ? "ring-2 ring-blue-900 rounded-lg" : ""
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
                              isNipponCategoryActive(category.name) 
                                ? "opacity-90" 
                                : "group-hover:opacity-75"
                            }`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p className={`mt-2 text-xs font-medium text-center ${
                          isNipponCategoryActive(category.name)
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

          {/* Dulux Products Mobile Dropdown */}
          <div>
            <button 
              onClick={() => setIsDuluxProductsOpen(!isDuluxProductsOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith("/dulux-products") 
                  ? "text-blue-900 bg-blue-50" 
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              Dulux
              <svg className={`w-5 h-5 ${isDuluxProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden ${isDuluxProductsOpen ? 'max-h-screen' : 'max-h-0'}`}>
              <div className="px-4 py-2 bg-gray-50 rounded-md mt-1">
                <div className="grid grid-cols-2 gap-4">
                  {duluxCategories.map((category) => (
                    <div key={category.name} className="flex flex-col items-center">
                      <Link
                        href={`/dulux-products/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isDuluxCategoryActive(category.name) ? "ring-2 ring-blue-900 rounded-lg" : ""
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
                              isDuluxCategoryActive(category.name) 
                                ? "opacity-90" 
                                : "group-hover:opacity-75"
                            }`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <p className={`mt-2 text-xs font-medium text-center ${
                          isDuluxCategoryActive(category.name)
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