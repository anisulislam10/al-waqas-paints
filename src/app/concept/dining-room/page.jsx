"use client";

import Link from "next/link";
import Image from "next/image";

export default function DiningRoom() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        
        <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Warm Colours for a Cozy Dining Room
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Warm colours ensure your dining experience is filled with comfort and joy.
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
                  Dining Room
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
            Creating a Welcoming Dining Space
          </h2>
          <p className="text-gray-600 mb-6">
            A dining room that feels warm makes everyone want to sit and enjoy their food. And choosing colours inspired by nature gives the room that comfy and friendly feel.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dining Room Ideas for a Cozy Space</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-2">Rose Gold</h3>
          <Image
            src="/ideas/diningroom/1.avif"
            alt="Dining Room Walls"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            Rose gold is a lovely, soft blush colour that warms up the room gently. You can pair this pretty colour with white or cream colours on your trims or furniture. For decor add some metallic pieces, maybe a metal frame or lamp base, to make the room softly sparkle.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Burnt Orange</h3>
          <p className="text-gray-600 mb-6">
            This colour feels like autumn - warm, cosy, and inviting. It’s a deep, friendly colour that makes people want to sit and talk. It’s a wonderful backdrop for dinners that feel special and intimate. Use wooden furniture and earthy decor pieces to complement this colour.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Muted Purple</h3>
          <Image
            src="/ideas/diningroom/2.avif"
            alt="Dining Room Designs"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-6">
            Muted purples, like lavender, bring a gentle warmth to the room. You can use grey or beige as pairing colours, and add some silver accessories, like a silver vase or candle holder, to complete the warm, soothing look.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Honey Yellow</h3>
          <p className="text-gray-600 mb-6">
            Like the sweetness of honey, this soft yellow brings a warm, pleasing vibe to your dining room. It’s a light, happy colour that makes the room glow but in a quiet way. Try pairing it with whites or light beiges in furniture and decorations, which will create a dining room where everyone feels good and relaxed.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Olive Green</h3>
          <p className="text-gray-600 mb-6">
            Olive green is closely connected to nature with its calming and gentle allure. For a classy yet warm look with this colour, use wood furniture and accessories in gold or bronze in your dining room.
          </p>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Sandy Beige</h3>
          <p className="text-gray-600 mb-6">
            This colour gives the feel of the warm, gentle sands of a quiet beach. Sandy Beige makes your dining room feel open, calm, and welcoming. It goes well with whites, creams, and other earthy colours, making a space that’s perfect for quiet meals and enjoyable gatherings.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tips for Extra Warmth</h2>
          <Image
            src="/ideas/diningroom/3.webp"
            alt="Dining Room Decor"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              <strong>Soft Lighting:</strong> Dim your lights. Add a few candles or a simple table lamp. Soft lighting makes everyone feel relaxed, especially with colours like rose gold or soft yellow.
            </li>
            <li>
              <strong>Add Textures:</strong> Think about adding different elements like a soft tablecloth, comfy cushions, or fluffy curtains. With colours like orange or purple, these little things help.
            </li>
            <li>
              <strong>Art on Walls:</strong> Got a rose gold theme? Try some light-coloured pictures. For orange walls, autumn scenes are great. And if you’ve got green, nature paintings look awesome.
            </li>
            <li>
              <strong>Plants:</strong> Plants make a place lively. Tall plants go great with yellow walls. Green walls? Try small plants like cacti. And with purple, even a small lavender pot fits perfectly.
            </li>
          </ul>
          <p className="text-gray-600">
            Whether it’s a casual family dinner, a festive feast, or an intimate meal for two, the warmth of these colours ensures every dining experience is filled with comfort and joy. So, as you think of redoing your dining room, let the warm colour scheme inspire you.
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
                name: "Dining Room",
                item: "https://www.alwaqaspaint.com/ideas/dining-room",
              },
            ],
          }),
        }}
      />
    </div>
  );
}