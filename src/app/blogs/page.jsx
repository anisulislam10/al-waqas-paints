import Link from 'next/link';
import Image from 'next/image';

// Static blog data with slugs
const blogs = [
  {
    id: 1,
    slug: 'white-on-grey-bedroom-texture',
    title: 'Transform Your Bedroom with Subtle White-on-Grey Texture',
    description: 'Looking to refresh your bedroom with a touch of elegance and depth?',
    content: 'The combination of white on grey is a classic choice for bedrooms, offering a balance of calmness and character. By layering pale white circles or patterns over a darker grey background, you can create a fun, playful look that doesn\'t overpower the space....',
    image: '/blogs/1-min.jpg',
    date: 'July 1, 2025',
  },
  {
    id: 2,
    slug: 'orange-and-copper-kitchen',
    title: 'Bold and Beautiful Blend of Orange and Copper for Your Kitchen',
    description: 'Combining the rich, metallic sheen of copper with the zest of orange paint brings your kitchen to life, creating a modern space that buzzes with energy yet feels cozy and welcoming.',
    content: 'Combining the rich, metallic sheen of copper with the zest of orange paint brings your kitchen to life, creating a modern space that buzzes with energy yet feels cozy and welcoming.',
    image: '/blogs/image-1.png',
    date: 'July 2, 2025',
  },
  {
    id: 3,
    slug: 'multi-functional-dining-room',
    title: 'Make a Multi-Functional Dining Room with a Harmonious Colour Scheme',
    description: 'Make a Multi-Functional Dining Room with a Harmonious Colour Scheme',
    content: 'Create a versatile dining room that transitions from casual brunches to elegant dinner parties with a harmonious color scheme that blends practicality and sophistication...',
    image: '/blogs/go-from-casual-to-formal-dining.png',
    date: 'July 3, 2025',
  },
  {
    id: 4,
    slug: 'rich-plum-entrance-hall',
    title: 'Elevate Your Entrance Hall with a Rich Plum Shade',
    description: 'Transform your entrance hall into a grand, elegant space with a deep, luxurious plum purple that adds period charm and creates a memorable first impression.',
    content: 'Transform your entrance hall into a grand, elegant space with a deep, luxurious plum purple that adds period charm and creates a memorable first impression....',
    image: '/blogs/period-elegance-with-rich-plum.webp',
    date: 'July 4, 2025',
  },
  {
    id: 5,
    slug: 'chocolate-and-gold-home-office',
    title: 'Create an Elegant Home Office with Chocolate and Gold Accents',
    description: 'Protecting your digital assets in the modern era.',
    content: 'Transform your home office with the warm, luxurious blend of chocolate and gold, combining cozy comfort with sophisticated elegance for a workspace that inspires.',
    image: '/blogs/8-Home-Office-Designs-in-Dubai-Boost-Your-Creativity-2.jpg',
    date: 'July 5, 2025',
  },
  {
    id: 6,
    slug: 'lilac-study-space',
    title: 'Craft a Calm and Productive Study Space with Lilac Shades',
    description: 'Transform your study space with soothing lilac hues, creating a calm and focused environment that boosts productivity and elevates your mood..',
    image: '/blogs/choose-lilac-for-a-soothing-study-space.avif',
    date: 'July 5, 2025',
  },
];

export default function BlogPage({ params }) {
  // If params.slug exists, we're viewing a single blog
  if (params?.slug) {
    const blog = blogs.find(b => b.slug === params.slug);
    if (!blog) return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center transition-all hover:shadow-xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog not found</h1>
          <Link href="/blogs" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </div>
    );

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
          
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="relative h-80 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="w-full transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium">{blog.date}</span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed mb-6">{blog.content}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

 // Blog list view
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Our Blogs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest design trends and home improvement tips
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map(blog => (
            <div 
              key={blog.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">{blog.date}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 mb-5 line-clamp-2 flex-grow">
                  {blog.description}
                </p>
                
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors group/readmore mt-auto"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover/readmore:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}