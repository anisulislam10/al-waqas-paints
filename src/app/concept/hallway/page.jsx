"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hallway() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
       
        <div className="absolute inset-0 bg-blue-900  flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Green Hues for a Calming Hallway
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Green hues in hallway make the heart settle and the mind calm.
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
                  <Link href="/ideas" className=" transition-colors">
                    Ideas
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-200 font-medium" aria-current="page">
                  Hallway
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
            Bringing Nature Indoors
          </h2>
          <p className="text-gray-600 mb-6">
            Green is the colour of life, of nature. When we bring green into our homes, especially in places like the hallway, it’s as if we’re weaving the great outdoors into our daily lives. Green colors in a hallway make the heart settle and the mind calm.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hallway Paint Ideas with Green Hues</h2>
          <p className="text-gray-600 mb-6">
            Green has a range of colours that can be found in nature, from the deep, rich shades of a pine forest to the soft tones of moss in the morning light. When these colours are combined in your hallway, they can create a feeling of calmness and sophistication.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Choosing Your Shade</h3>
          <Image
            src="/ideas/hallway/1.avif"
            alt="Hallway Wall Colour"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            Consider the spirit of your home and the light in your hallway. Does it bask in the glow of morning light or is it softly lit by the afternoon sun? A tender moss green can brighten a shadowed space, while a rich hunter green can add depth and drama.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Combining Shades and Textures</h3>
          <Image
            src="/ideas/hallway/2.avif"
            alt="Hallway Colour Ideas"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            A single colour need not stand alone. Blend lighter and darker greens for a hallway that holds interest and depth. Consider a wall with a base of pine green, accented by a stencilled pattern in mint – it’s classic yet fresh.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Accessorize with Nature</h3>
          <p className="text-gray-600 mb-6">
            Green loves company. A hallway bench cushioned in a floral print, a woven rug underfoot, or framed botanical illustrations can all dance beautifully with your green hues colour. It’s these little touches that make a space feel truly yours.
          </p>

          <h3 className="text-xl font-medium text-grey-800 mb-2">Green in Decor</h3>
          <Image
            src="/ideas/hallway/3.avif"
            alt="Hallway Paint Colour"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            Even in the city, green is a reminder of the world outside. Why not line your hallway with potted ferns or a terrarium on a side table? Let your green hallway be a bridge between the great outdoors and your inner sanctuary.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Sustainable Choices</h3>
          <p className="text-gray-600 mb-6">
            With green, you often think of freshness and purity. Reflect that sense of freshness in your paint choices by going for eco-friendly options. These paints ensure that your home is as healthy as it is beautiful.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">The Psychology of Green</h3>
          <p className="text-gray-600">
            There’s a stillness to green, a quality that makes it a backdrop to life. In your hallway it has a calming presence that welcomes, that says, “Come in, you’re home.” Green is a perfect companion for your hallway as it’s a colour that isn’t just seen, it’s felt. It can be as refreshing as a spring morning or as comforting as an old, thick forest. So, as you choose your shades and plan your decor, remember that a hallway painted with green is more than a space – it’s an experience, an invitation to relax and breathe.
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
                name: "Hallway",
                item: "https://www.alwaqaspaint.com/ideas/hallway",
              },
            ],
          }),
        }}
      />
    </div>
  );
}