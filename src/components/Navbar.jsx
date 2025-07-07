'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isNipponProductsOpen, setIsNipponProductsOpen] = useState(false)
  const [isDuluxProductsOpen, setIsDuluxProductsOpen] = useState(false)
  const [isMasterProductsOpen, setIsMasterProductsOpen] = useState(false)
  const [isBergerProductsOpen, setIsBergerProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('')
  const [scrolled, setScrolled] = useState(false)

  // Nippon product categories
  const nipponCategories = [
    { name: 'Interior', image: '/interios.avif' },
    { name: 'Exterior', image: '/exterior.webp' },
    {
      name: 'Surface Preparation Range',
      image: '/our-interior-painting-services.jpg'
    },
    { name: 'Wood and Metal', image: '/wood.webp' },
    { name: 'Special Surfaces', image: '/special-surface.jpg' }
  ]

  // Dulux product categories
  const duluxCategories = [
    { name: 'Interior', image: '/dulux-interior.jpg' },
    { name: 'Exterior', image: '/dulux-exterior.jpg' },
    { name: 'Primer', image: '/dulux-primer.jpg' },
    { name: 'Special product', image: '/dulux-special.jpg' },
    { name: 'Waterproofing', image: '/dulux-waterproffing.jpg' }
  ]

  // Berger product categories (same as Dulux)
  const bergerCategories = [
    { name: 'Interior', image: '/berger/navbar/Brown-interior-paint.webp' },
    { name: 'Exterior', image: '/berger/navbar/exterior.webp' },
    { name: 'Ancillary Products', image: '/berger/navbar/3.webp' },
    { name: 'Wood Pro Range', image: '/berger/navbar/4.webp' },
  ]

  // Master product categories
  const masterCategories = [
    { name: 'Interior', image: '/master/navbar/master-interior-1.webp' },
    { name: 'Exterior', image: '/master/navbar/master-exterior.webp' },
    {
      name: 'Base Preparations',
      image: '/master/navbar/master-surface_prep.webp'
    },
    { name: 'Wood Finishes', image: '/master/navbar/master-wood.webp' },
    { name: 'Metal Finishes', image: '/master/navbar/master-metal.webp' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/') setActiveNav('home')
    else if (pathname === '/about') setActiveNav('about')
    else if (
      pathname.startsWith('/products') ||
      pathname.startsWith('/dulux') ||
      pathname.startsWith('/master') ||
      pathname.startsWith('/berger')
    )
      setActiveNav('products')
  }, [pathname])

  const isNipponCategoryActive = categoryName => {
    return (
      pathname ===
      `/products/${categoryName.toLowerCase().replace(/\s+/g, '-')}`
    )
  }

  const isDuluxCategoryActive = categoryName => {
    return (
      pathname === `/dulux/${categoryName.toLowerCase().replace(/\s+/g, '-')}`
    )
  }

  const isBergerCategoryActive = categoryName => {
    return (
      pathname === `/berger/${categoryName.toLowerCase().replace(/\s+/g, '-')}`
    )
  }

  const isMasterCategoryActive = categoryName => {
    return (
      pathname === `/master/${categoryName.toLowerCase().replace(/\s+/g, '-')}`
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''}`}
    >
      {/* Top Contact Info Bar */}
      <div className='bg-gradient-to-r from-blue-900 to-red-900 px-4 py-2 text-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-2'>
          <span className='text-white text-sm text-center sm:text-left hidden sm:inline'>
            Transform with Confidence Nippon, ICI Dulux, Master, and Berger Coatings.
          </span>
          <div className='w-full sm:w-auto flex justify-center sm:block'>
            <a
              href='tel:+923335093223'
              className='px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 inline-block'
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-15'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <Image
              src='/AlWaqas Paint & Hardware.svg'
              alt='Al-Waqas Paint Logo'
              width={101}
              height={20}
              className='rounded-full'
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-1 font-bold'>
            <Link
              href='/'
              className={`px-3 py-2 text-sm font-bold ${
                activeNav === 'home'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Home
            </Link>

            <Link
              href='/about'
              className={`px-3 py-2 text-sm font-bold ${
                activeNav === 'about'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              About
            </Link>

            {/* Nippon Products Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setIsNipponProductsOpen(true)}
              onMouseLeave={() => setIsNipponProductsOpen(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-bold flex items-center ${
                  pathname.startsWith('/products')
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Nippon
                <svg
                  className={`w-4 h-4 ml-1 ${
                    isNipponProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {isNipponProductsOpen && (
                <div className='fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-6 gap-4'>
                      {nipponCategories.map(category => (
                        <div
                          key={category.name}
                          className='flex flex-col items-center'
                        >
                          <Link
                            href={`/products/${category.name
                              .toLowerCase()
                              .replace(/\s+/g, '-')}`}
                            className={`group block w-full ${
                              isNipponCategoryActive(category.name)
                                ? 'ring-2 ring-blue-900 rounded-lg'
                                : ''
                            }`}
                            prefetch={false}
                          >
                            <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                              <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className={`object-cover ${
                                  isNipponCategoryActive(category.name)
                                    ? 'opacity-90'
                                    : 'group-hover:opacity-75'
                                }`}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              />
                            </div>
                            <p
                              className={`mt-2 text-sm font-bold text-center ${
                                isNipponCategoryActive(category.name)
                                  ? 'text-blue-900'
                                  : 'text-gray-900 group-hover:text-blue-900'
                              }`}
                            >
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
              className='relative'
              onMouseEnter={() => setIsDuluxProductsOpen(true)}
              onMouseLeave={() => setIsDuluxProductsOpen(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-bold flex items-center ${
                  pathname.startsWith('/dulux')
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Dulux
                <svg
                  className={`w-4 h-4 ml-1 ${
                    isDuluxProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {isDuluxProductsOpen && (
                <div className='fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-6 gap-4'>
                      {duluxCategories.map(category => (
                        <div
                          key={category.name}
                          className='flex flex-col items-center'
                        >
                          <Link
                            href={`/dulux/${category.name
                              .toLowerCase()
                              .replace(/\s+/g, '-')}`}
                            className={`group block w-full ${
                              isDuluxCategoryActive(category.name)
                                ? 'ring-2 ring-blue-900 rounded-lg'
                                : ''
                            }`}
                            prefetch={false}
                          >
                            <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                              <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className={`object-cover ${
                                  isDuluxCategoryActive(category.name)
                                    ? 'opacity-90'
                                    : 'group-hover:opacity-75'
                                }`}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              />
                            </div>
                            <p
                              className={`mt-2 text-sm font-bold text-center ${
                                isDuluxCategoryActive(category.name)
                                  ? 'text-blue-900'
                                  : 'text-gray-900 group-hover:text-blue-900'
                              }`}
                            >
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

           

            {/* Master Products Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setIsMasterProductsOpen(true)}
              onMouseLeave={() => setIsMasterProductsOpen(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-bold flex items-center ${
                  pathname.startsWith('/master')
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Master
                <svg
                  className={`w-4 h-4 ml-1 ${
                    isMasterProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {isMasterProductsOpen && (
                <div className='fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-6 gap-4'>
                      {masterCategories.map(category => (
                        <div
                          key={category.name}
                          className='flex flex-col items-center'
                        >
                          <Link
                            href={`/master/${category.name
                              .toLowerCase()
                              .replace(/\s+/g, '-')}`}
                            className={`group block w-full ${
                              isMasterCategoryActive(category.name)
                                ? 'ring-2 ring-blue-900 rounded-lg'
                                : ''
                            }`}
                            prefetch={false}
                          >
                            <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                              <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className={`object-cover ${
                                  isMasterCategoryActive(category.name)
                                    ? 'opacity-90'
                                    : 'group-hover:opacity-75'
                                }`}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              />
                            </div>
                            <p
                              className={`mt-2 text-sm font-bold text-center ${
                                isMasterCategoryActive(category.name)
                                  ? 'text-blue-900'
                                  : 'text-gray-900 group-hover:text-blue-900'
                              }`}
                            >
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
             {/* Berger Products Dropdown */}
            <div
              className='relative'
              onMouseEnter={() => setIsBergerProductsOpen(true)}
              onMouseLeave={() => setIsBergerProductsOpen(false)}
            >
              <button
                className={`px-3 py-2 text-sm font-bold flex items-center ${
                  pathname.startsWith('/berger')
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                Berger
                <svg
                  className={`w-4 h-4 ml-1 ${
                    isBergerProductsOpen ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>

              {isBergerProductsOpen && (
                <div className='fixed inset-x-0 mt-0 bg-white shadow-xl py-4 border-t'>
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-6 gap-4'>
                      {bergerCategories.map(category => (
                        <div
                          key={category.name}
                          className='flex flex-col items-center'
                        >
                          <Link
                            href={`/berger/${category.name
                              .toLowerCase()
                              .replace(/\s+/g, '-')}`}
                            className={`group block w-full ${
                              isBergerCategoryActive(category.name)
                                ? 'ring-2 ring-blue-900 rounded-lg'
                                : ''
                            }`}
                            prefetch={false}
                          >
                            <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                              <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className={`object-cover ${
                                  isBergerCategoryActive(category.name)
                                    ? 'opacity-90'
                                    : 'group-hover:opacity-75'
                                }`}
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                              />
                            </div>
                            <p
                              className={`mt-2 text-sm font-bold text-center ${
                                isBergerCategoryActive(category.name)
                                  ? 'text-blue-900'
                                  : 'text-gray-900 group-hover:text-blue-900'
                              }`}
                            >
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
              href='/tools'
              className={`px-3 py-2 text-sm font-bold ${
                pathname === '/tools'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Tools
            </Link>

            <Link
              href='/ideas'
              className={`px-3 py-2 text-sm font-bold ${
                pathname === '/ideas'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Ideas
            </Link>


{/* guide */}
<Link
              href='/guide'
              className={`px-3 py-2 text-sm font-bold ${
                pathname === '/guide'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Guide
            </Link>

            <Link
              href='/contact-us'
              className={`px-3 py-2 text-sm font-bold ${
                pathname === '/contact-us'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
              <Link
              href='/ideas'
              className={`px-3 py-2 text-sm font-bold ${
                pathname === '/ideas'
                  ? 'text-blue-900 border-b-2 border-blue-900'
                  : 'text-gray-700 hover:text-blue-900'
              }`}
            >
              Ideas
            </Link>
            
               {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='px-2 pt-2 pb-4 space-y-1'>
          <Link
            href='/'
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeNav === 'home'
                ? 'text-blue-900 bg-blue-50'
                : 'text-gray-700 hover:bg-blue-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href='/about'
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              activeNav === 'about'
                ? 'text-blue-900 bg-blue-50'
                : 'text-gray-700 hover:bg-blue-50'
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
                pathname.startsWith('/products')
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Nippon
              <svg
                className={`w-5 h-5 ${
                  isNipponProductsOpen ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden ${
                isNipponProductsOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className='px-4 py-2 bg-gray-50 rounded-md mt-1'>
                <div className='grid grid-cols-2 gap-4'>
                  {nipponCategories.map(category => (
                    <div
                      key={category.name}
                      className='flex flex-col items-center'
                    >
                      <Link
                        href={`/products/${category.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isNipponCategoryActive(category.name)
                            ? 'ring-2 ring-blue-900 rounded-lg'
                            : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        prefetch={false}
                      >
                        <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className={`object-cover ${
                              isNipponCategoryActive(category.name)
                                ? 'opacity-90'
                                : 'group-hover:opacity-75'
                            }`}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </div>
                        <p
                          className={`mt-2 text-xs font-medium text-center ${
                            isNipponCategoryActive(category.name)
                              ? 'text-blue-900 font-bold'
                              : 'text-gray-900 group-hover:text-blue-600'
                          }`}
                        >
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
                pathname.startsWith('/dulux')
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Dulux
              <svg
                className={`w-5 h-5 ${isDuluxProductsOpen ? 'rotate-180' : ''}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden ${
                isDuluxProductsOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className='px-4 py-2 bg-gray-50 rounded-md mt-1'>
                <div className='grid grid-cols-2 gap-4'>
                  {duluxCategories.map(category => (
                    <div
                      key={category.name}
                      className='flex flex-col items-center'
                    >
                      <Link
                        href={`/dulux/${category.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isDuluxCategoryActive(category.name)
                            ? 'ring-2 ring-blue-900 rounded-lg'
                            : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        prefetch={false}
                      >
                        <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className={`object-cover ${
                              isDuluxCategoryActive(category.name)
                                ? 'opacity-90'
                                : 'group-hover:opacity-75'
                            }`}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </div>
                        <p
                          className={`mt-2 text-xs font-medium text-center ${
                            isDuluxCategoryActive(category.name)
                              ? 'text-blue-900 font-bold'
                              : 'text-gray-900 group-hover:text-blue-600'
                          }`}
                        >
                          {category.name}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

         

          {/* Master Products Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsMasterProductsOpen(!isMasterProductsOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith('/master')
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Master
              <svg
                className={`w-5 h-5 ${
                  isMasterProductsOpen ? 'rotate-180' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden ${
                isMasterProductsOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className='px-4 py-2 bg-gray-50 rounded-md mt-1'>
                <div className='grid grid-cols-2 gap-4'>
                  {masterCategories.map(category => (
                    <div
                      key={category.name}
                      className='flex flex-col items-center'
                    >
                      <Link
                        href={`/master/${category.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isMasterCategoryActive(category.name)
                            ? 'ring-2 ring-blue-900 rounded-lg'
                            : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        prefetch={false}
                      >
                        <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className={`object-cover ${
                              isMasterCategoryActive(category.name)
                                ? 'opacity-90'
                                : 'group-hover:opacity-75'
                            }`}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </div>
                        <p
                          className={`mt-2 text-xs font-medium text-center ${
                            isMasterCategoryActive(category.name)
                              ? 'text-blue-900 font-bold'
                              : 'text-gray-900 group-hover:text-blue-600'
                          }`}
                        >
                          {category.name}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
 {/* Berger Products Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsBergerProductsOpen(!isBergerProductsOpen)}
              className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith('/berger')
                  ? 'text-blue-900 bg-blue-50'
                  : 'text-gray-700 hover:bg-blue-50'
              }`}
            >
              Berger
              <svg
                className={`w-5 h-5 ${isBergerProductsOpen ? 'rotate-180' : ''}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden ${
                isBergerProductsOpen ? 'max-h-screen' : 'max-h-0'
              }`}
            >
              <div className='px-4 py-2 bg-gray-50 rounded-md mt-1'>
                <div className='grid grid-cols-2 gap-4'>
                  {bergerCategories.map(category => (
                    <div
                      key={category.name}
                      className='flex flex-col items-center'
                    >
                      <Link
                        href={`/berger/${category.name
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                        className={`group block w-full ${
                          isBergerCategoryActive(category.name)
                            ? 'ring-2 ring-blue-900 rounded-lg'
                            : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        prefetch={false}
                      >
                        <div className='relative aspect-square w-full overflow-hidden rounded-lg'>
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className={`object-cover ${
                              isBergerCategoryActive(category.name)
                                ? 'opacity-90'
                                : 'group-hover:opacity-75'
                            }`}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </div>
                        <p
                          className={`mt-2 text-xs font-medium text-center ${
                            isBergerCategoryActive(category.name)
                              ? 'text-blue-900 font-bold'
                              : 'text-gray-900 group-hover:text-blue-600'
                          }`}
                        >
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
            href='/tools'
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/tools'
                ? 'text-blue-900 bg-blue-50'
                : 'text-gray-700 hover:bg-blue-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tools
          </Link>


                  <Link
            href='/ideas'
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/ideas'
                ? 'text-blue-900 bg-blue-50'
                : 'text-gray-700 hover:bg-blue-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ideas
          </Link>


          {/* guide */}
                 <Link
            href='/guide'
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/guide'
                ? 'text-blue-900 bg-blue-50'
                : 'text-gray-700 hover:bg-blue-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Guide
          </Link>

          <Link
            href='/contact-us'
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/contact-us'
                ? 'text-blue-900 bg-blue-50'
                : 'text-gray-700 hover:bg-blue-50'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar