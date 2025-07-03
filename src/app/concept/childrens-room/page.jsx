"use client";

import Link from "next/link";
import Image from "next/image";

export default function ChildrensRoom() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
       
        <div className="absolute inset-0 bg-blue-900  flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Inspiring Decorating Ideas for Children’s Bedrooms
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              From working with small spaces to trying Scandinavian style, see our top budget-friendly ideas for decorating your child’s bedroom.
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
                  <Link href="/ideas" className="">
                    Ideas
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-200 font-medium" aria-current="page">
                  Children’s Room
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
            Transform Your Child’s Space
          </h2>
          <p className="text-gray-600 mb-6">
            Looking for the perfect palette to transform your kid’s walls? We’ve got some versatile ideas that can work in any bedroom. See our tips and tricks to start decorating your little one’s space.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Making the Most of a Small Bedroom</h2>
          <Image
            src="/ideas/childrensroom/kids_06_inspiring_ideas_for_childrens_bedrooms.avif"
            alt="Small Bedroom Design"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-4">
            Painting small spaces doesn’t rule out big ideas, especially when it comes to kids’ bedrooms. You can use colour zoning to transform unused nooks into bunks, lounging areas, or even homework stations. Be bold and creative, try feature walls with circles and geometric shapes in block colour to create an environment that will feed your child’s imagination.
          </p>
          <p className="text-gray-600 mb-4">
            Take a look at how you can create the perfect circle on your walls.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Which Paints?</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>99RR 27/498</li>
            <li>70YY 51/669</li>
            <li>30YR 26/330</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Playful Unisex Bedroom</h2>
          <Image
            src="/ideas/childrensroom/kids_06_inspiring_ideas_for_childrens_bedrooms_20.avif"
            alt="Gender-neutral Kid’s Bedroom"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-4">
            If you’re set with the challenge of decorating a room that will please both a boy and girl, give soft shades of pale green, dove grey, and citrus yellow a go. These can work well alone or in harmony to create a calming yet bright bedroom for your little ones.
          </p>
          <p className="text-gray-600 mb-4">
            See how you can create the perfect stripes in your colours.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Which Paints?</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>90YY 63/044</li>
            <li>70GY 83/060</li>
            <li>60YY 57/304</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Calmingly Neutral</h2>
          <Image
            src="/ideas/childrensroom/kids_06_inspiring_ideas_for_childrens_bedrooms_2048x1638_4.webp"
            alt="Neutral Coloured Bedroom"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-4">
            If you’d like to try something different and step away from the bold and bright colours often seen in children’s bedrooms, try neutral shades.
          </p>
          <p className="text-gray-600 mb-4">
            An earthy grey, paired with luscious green and navy accessories will create a peaceful atmosphere and the perfect backdrop to your child’s creativity and toys.
          </p>
          <p className="text-gray-600 mb-4">
            Finish the look by hanging your child’s drawings on the wall and display toy models on shelves.
          </p>
          <p className="text-gray-600 mb-4">
            Give your colour ideas a try with the Dulux Visualizer.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Which Paints?</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>81YY 87/031</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bedroom on a Budget</h2>
          <Image
            src="/ideas/childrensroom/kids_06_inspiring_ideas_for_childrens_bedrooms_2048x1638_5.avif"
            alt="Colourful Children’s Room"
            width={800}
            height={400}
            className="object-cover rounded-lg mb-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <p className="text-gray-600 mb-4">
            Adding a touch of colour to your kid’s bedroom doesn’t have to break the bank. A clever splash of paint can refresh and restore any space. Whether you’ve got a leftover tin from another project or tester pots at hand – you can create anything from stripes to a split-effect on your kid’s walls, using minimal paint for maximum effect.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-2">Which Paints?</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>30YR 41/263</li>
          </ul>

          
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
                name: "Children’s Room",
                item: "https://www.alwaqaspaint.com/ideas/childrens-room",
              },
            ],
          }),
        }}
      />
    </div>
  );
}