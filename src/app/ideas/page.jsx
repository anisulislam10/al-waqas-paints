"use client";

import Link from "next/link";
import Image from "next/image";
import DesignSugg from "@/components/DesignSuggesstions";

const ideas = [
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Transform your bathroom with serene, moisture-resistant paints for a spa-like retreat.",
    image: "/ideas/bathroom/white-bathroom.avif",
    detailsLink: "/concept/bathroom",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Create a cozy, restful bedroom with warm, calming colors that enhance relaxation.",
    image: "/ideas/bedroom/best-bedroom.jpg",
    detailsLink: "/concept/bedroom",
  },
  {
    id: "childrens-room",
    title: "Children's Room",
    description: "Bright, durable paints for vibrant, playful spaces that spark creativity in kids.",
    image: "/ideas/childrensroom/1.webp",
    detailsLink: "/concept/childrens-room",
  },
  {
    id: "dining-room",
    title: "Dining Room",
    description: "Elevate your dining experience with elegant, inviting hues for memorable gatherings.",
    image: "/ideas/diningroom/1.jpg",
    detailsLink: "/concept/dining-room",
  },
  {
    id: "hallway",
    title: "Hallway",
    description: "Make a lasting first impression with stylish, durable paints for high-traffic hallways.",
    image: "/ideas/hallway/1.jpg",
    detailsLink: "/concept/hallway",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Brighten your kitchen with easy-to-clean, vibrant paints for a fresh, lively space.",
    image: "/ideas/kitchen/1.webp",
    detailsLink: "/concept/kitchen",
  },
];

export default function Ideas() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
    <section className="relative h-[50vh] w-full">
  <Image
    src="/ideas/1.webp"
    alt="Ideas Hero Background"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0  flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Inspiration for Every Room</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Discover paint ideas to transform your home with Al-Waqas Paint’s premium, eco-friendly coatings.
      </p>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mt-4">
        <ol className="inline-flex items-center space-x-2 text-sm text-whtie">
          <li>
            <Link href="/" className=" transition-colors">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-200 font-medium" aria-current="page">
            Ideas
          </li>
        </ol>
      </nav>
    </div>
  </div>
</section>

      {/* Ideas Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-800 text-center mb-4">
            Discover Our Design Ideas
          </h2>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideas.map((idea) => (
              <Link
                href={idea.detailsLink}
                key={idea.id}
                className="group bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={idea.image}
                    alt={idea.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{idea.title}</h3>
                  <p className="text-gray-600 text-sm">{idea.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <DesignSugg/>

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
            ],
          }),
        }}
      />
    </div>
  );
}