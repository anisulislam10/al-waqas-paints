"use client";

import Link from "next/link";
import Image from "next/image";

export default function Bathroom() {
  return (
    <div className="min-h-screen bg-gray-500">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
       
        <div className="absolute inset-0  bg-blue-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-1xl font-bold mb-4">
              Create Your Restful Bathroom with a Timeless White Design
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A white palette for your bathroom is not just a safe choice it’s a smart one.
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
                <li className="text-gray-300 font-medium" aria-current="page">
                  Bathroom
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
            Why Choose White?
          </h2>
          <p className="text-gray-600 mb-6">
            Choosing white for your bathroom is smart because it never goes out of style. Moreover, a white bathroom can adapt to changing trends with just a few tweaks in accessories or linens, ensuring your space remains stylish and up-to-date. In this way, opting for white is not only practical but also economical, as it eliminates the need for frequent repaints or renovations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Designing with White</h2>
          <Image
            src="/ideas/bathroom/bathroom-walls.avif"
            alt="Bathroom Walls"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-xl font-medium text-gray-800">Minimalist</h3>
              <p className="text-gray-600">
                In minimalist design, where the focus is on simplicity and functionality, white helps create a clean and uncluttered space. It accentuates the sleek lines and sparse use of decor that minimalist style is known for.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Coastal</h3>
              <p className="text-gray-600">
                White is perfect for achieving a coastal look. When paired with blues, sandy beiges, and natural textures like wood and jute, it evokes the brightness and airiness of the seaside. White walls or fixtures can beautifully reflect light, mimicking the airy feel of a beachside retreat.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Contemporary</h3>
              <p className="text-gray-600">
                For those who prefer a contemporary style, white offers a modern and sophisticated edge. It pairs wonderfully with high-contrast elements, such as black tiles or metallic accents, serving as a backdrop that highlights modern art pieces or innovative fixtures.
              </p>
            </div>
            <p className="text-gray-600">
              Regardless of the theme, white provides a foundation that can be dressed up or down. You can add warmth to a white bathroom with wooden accents for a more rustic approach, or keep it sleek with metal and glass for a more industrial feel. The key is to use white as the base that lets other elements shine.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Textures and Materials</h2>
          <Image
            src="/ideas/bathroom/bathroom-designs.avif"
            alt="Bathroom Designs"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-4">
            Although serene and clean, a white bathroom can sometimes feel stark or sterile without the right design touches.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Adding Natural Elements</h3>
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800">Wood</h4>
              <p className="text-gray-600">
                Think about incorporating wooden vanity cabinets, shelves, or even wooden stools as functional decor. The natural grain and colour of the wood contrast beautifully with white, softening the overall look and bringing an organic feel to the space.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800">Stone</h4>
              <p className="text-gray-600">
                Stone elements like marble countertops, stone backsplashes, or pebble tiles in the shower area can enhance a white bathroom by adding texture and subtle colour variations.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Using Textured Tiles</h3>
          <Image
            src="/ideas/bathroom/white-bathroom.avif"
            alt="Textured Tiles"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-4">
            Textured tiles are another fantastic way to add interest to a white bathroom. They not only contribute to the aesthetic but also prevent the space from feeling too flat. For instance:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              <strong>Relief Tiles:</strong> These tiles come with patterns raised above the tile surface, providing both visual appeal and a tactile quality that can break up the monotony of flat surfaces.
            </li>
            <li>
              <strong>Mosaic Tiles:</strong> Small mosaic tiles in shades of white or light grey can add detail and texture, especially useful in shower areas or as a feature wall behind the basin.
            </li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Mixing Materials for a Cohesive Look</h3>
          <p className="text-gray-600 mb-6">
            Combining these different materials can help create a balanced and inviting white bathroom. For example, a wooden vanity paired with a marble countertop strikes a balance between warm and cool elements, while textured white tiles can maintain the monochromatic look without sacrificing depth. When using these materials, consider their placement and proportions to ensure they complement rather than overwhelm the space. Using too many different textures can make a small bathroom feel cluttered, so it’s important to strike the right balance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">White Bathroom Fixtures and Fittings</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mb-2">Choosing White Fixtures</h3>
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800">Sinks and Bathtubs</h4>
              <p className="text-gray-600">
                Opt for white porcelain or ceramic sinks and bathtubs that reflect light and contribute to the bright, airy feel of your bathroom. These fixtures serve as key elements in maintaining the crisp, clean lines associated with white bathroom designs. For a touch of modernity, consider sleek, sculptural shapes that stand out against softer background tones.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800">Toilets</h4>
              <p className="text-gray-600">
                A white toilet is a classic choice that integrates smoothly into the overall design. It’s practical and maintains the colour continuity essential for creating a cohesive look.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-medium text-gray-800 mb-2">Complementing with Fittings</h3>
          <p className="text-gray-600 mb-4">
            While white dominates the fixtures, choosing the right fittings can subtly enhance the design without detracting from the simplicity:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>
              <strong>Faucets and Showerheads:</strong> Chrome or stainless steel faucets and showerheads complement a white colour scheme perfectly. They add a touch of shine and sophistication, reflecting the light and contributing to the overall clean aesthetic. For a warmer touch, consider brushed nickel or matte silver finishes, which offer a softer look than chrome.
            </li>
            <li>
              <strong>Hardware Details:</strong> Pay attention to smaller details like drawer pulls, towel bars, and shower handles. Opting for fittings in light metallic tones or glass can tie the room together, providing functional elegance without overwhelming the white theme.
            </li>
          </ul>
          <p className="text-gray-600">
            With its ability to create a clean, restful environment, a white palette for your bathroom is not just a safe choice—it’s a smart one.
          </p>
        </div>
      </section>
    </div>
  );
}