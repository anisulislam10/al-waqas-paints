"use client";

import Link from "next/link";
import Image from "next/image";

export default function Bedroom() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/ideas/bedroom-1.webp"
          alt="Bedroom Design Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-90 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Create Your Cozy Bedroom Haven
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              There is joy in creating something together that truly makes a house a home.
            </p>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="inline-flex items-center space-x-2 text-sm text-white">
                <li>
                  <Link href="/" className=" transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <Link href="/ideas" className="transition-colors">
                    Ideas
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-200 font-medium" aria-current="page">
                  Bedroom
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-800 mb-6">
            Building Your Shared Space
          </h2>
          <p className="text-gray-600 mb-6">
            Setting up your first home as a newlywed couple? It’s more than just picking out furniture or deciding on a paint colour, it’s about creating a cosy haven for the two of you. And let’s face it, merging two lives (and their belongings!) can be a bit of a juggle. But don’t fret! Here are some simple yet chic home design ideas to help you lay the first bricks of your shared life.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mixing Memories with Modernity</h2>
          <Image
            src="/ideas/bedroom/2.avif"
            alt="Bedroom Design"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            Your grandma’s old clock and that ultra-modern lamp? They can be best friends! It’s all about balancing - giving a nod to the past while embracing the new in your house interior design. So, go ahead and mix those vintage pieces with contemporary touches to create a space that’s uniquely ‘you two’.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Open Up but Stay Cozy</h2>
          <p className="text-gray-600 mb-6">
            A big, comfy sofa right in the middle of your living room, where you both can curl up for movie nights. Sounds dreamy, right? Open spaces make rooms look bigger, but it’s those little cosy touches, like a fluffy rug or soft cushions, that make it feel like home.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Little Spot Just for You</h2>
          <Image
            src="/ideas/bedroom/3.avif"
            alt="Two People Bedroom"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            Yes, you’re a duo now, but everyone needs a small space to call their own. Whether it’s a chair by the window for her books or a little desk for his hobbies, make sure your home design has a tiny spot for ‘me time’.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Colours That Feel Like a Hug</h2>
          <p className="text-gray-600 mb-6">
            While greys and whites are timeless, don’t be afraid to sprinkle in some blues, yellows, or pinks. Think of your favourite shirt or a hue that always makes you smile. That’s the colour your house interior design needs. After all, who wouldn’t want walls that feel like a warm hug?
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stash It, But Make It Stylish</h2>
          <p className="text-gray-600 mb-6">
            Between the two of you, there’s bound to be a lot of things to store. But guess what? Storage can be fun! Trunks can double up as coffee tables. Those cute baskets? Perfect for tossing in those extra cushions or magazines.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stories in Every Corner</h2>
          <Image
            src="/ideas/bedroom/4.avif"
            alt="Bedroom Decor Idea"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600">
            Every decor item in your home should have a story. The vase from your first meet, the photo frame you both picked out during a sale or even that quirky wall art from the local market. These aren’t just objects, they’re memories.
          </p>
        </div>
      </section>

      {/* Structured Data for Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.alwaqaspaint.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ideas",
                item: "https://www.alwaqaspaint.com/ideas",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Bedroom",
                item: "https://www.alwaqaspaint.com/ideas/bedroom",
              },
            ],
          }),
        }}
      />
    </div>
  );
}