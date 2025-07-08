import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';
import rehypeRaw from 'rehype-raw'; // Add this import
// Static blog data with slugs and multiple images for details
const blogs = [
  {
    id: 1,
    slug: 'white-on-grey-bedroom-texture',
    title: 'Transform Your Bedroom with Subtle White-on-Grey Texture',
    description: 'Looking to refresh your bedroom with a touch of elegance and depth? A subtle white-on-grey paint effect is the perfect way to add texture to a flat white room while keeping the space serene and inviting.',
    content: `
# Why Choose White on Grey?
The combination of white on grey is a classic choice for bedrooms, offering a balance of calmness and character. By layering pale white circles or patterns over a darker grey background, you can create a fun, playful look that doesn’t overpower the space. This subtle texture adds depth to flat walls, making your bedroom feel more dynamic and personalized while maintaining a relaxing atmosphere.

# How to Achieve the White-on-Grey Paint Effect
Creating this textured look is simpler than you might think. Follow these steps to transform your bedroom:

1. **Choose Your Grey Base**: Select a grey paint that complements your style and existing decor. Options range from light greys with cool blue undertones to deeper greys with hints of green or charcoal.
2. **Add White Texture**: Use a stencil or freehand technique to apply pale white circles or patterns over the grey base. A foam roller or sponge works well for soft, organic shapes.
3. **Tools You’ll Need**: Grey and white paint, stencil (optional), foam roller, sponge, or brush, and painter’s tape.
4. **Pro Tip**: Practice on cardboard first to perfect your technique.

# Styling Your White-on-Grey Bedroom
- **Simple Furnishings**: Use clean-lined furniture in soft fabrics like linen or cotton.
- **Neutral Palette**: Stick to whites, greys, and soft pastels for a calming effect.
- **Minimal Accessories**: Add a few curated pieces like a sleek lamp or small plant.
- **Layered Lighting**: Use soft lighting to highlight the texture and create a cozy ambiance.
    `,
    images: [
      '/blogs/Fashionable.jpg',
      '/blogs/grey-and-white-bedroom-elegant.webp',
      '/blogs/gray-bedrooms-gray-bedrooms-01.webp',
      '/blogs/5.jpg',
    ],
    date: 'July 1, 2025',
  },
  
    {
    id: 2,
    slug: 'orange-and-copper-kitchen',
    title: 'Bold and Beautiful Blend of Orange and Copper for Your Kitchen',
    description: 'Combining the rich, metallic sheen of copper with the zest of orange paint brings your kitchen to life, creating a modern space that buzzes with energy yet feels cozy and welcoming.',
    content: `
# The Warmth and Modernity of Orange and Copper
Orange, with its sunny disposition, lifts spirits and injects vibrancy into any space. It encourages appetite and conversation, making it perfect for a kitchen centered around food and family. Copper, with its luxurious and crafted appeal, adds a refined yet earthy feel. Together, these colors create a welcoming, lively atmosphere that transforms your kitchen into a modern masterpiece.

# Incorporating Orange and Copper for a Modern Look
Can orange and copper fit into a modern kitchen? Absolutely. Imagine sleek copper cabinetry paired with walls painted in a soft, inviting shade of orange, or copper fixtures against vibrant orange tiles. These combinations bring a contemporary edge while keeping the vibe warm and inviting.

# Designing a Modern Kitchen with Orange and Copper
## Choosing the Right Shades
Selecting the perfect shades is key to setting the mood:
- **Small Kitchens**: Use lighter oranges to make the space feel open and bright.
- **Well-Lit Kitchens**: Pair deeper oranges with shiny copper accents for a cozy, sophisticated vibe.
- **Copper Finishes**: Choose polished copper for a modern look or matte/hammered copper for a rustic feel.

## Copper Cabinetry and Accents
Copper cabinetry adds a bold, unique edge. If that’s too daring, try:
- Copper handles or trim for subtle warmth.
- Copper pendant lights over the island.
- A copper backsplash to tie the room together.

## Contrasting Elements for Depth
Introduce contrasting elements to enhance the design:
- **White Timber Furniture**: Brightens the space and defines areas (e.g., a dining set separates eating from cooking zones).
- **Dark Woodwork**: Grounds the vibrant orange and copper, adding visual depth.

# Layout Tips for a Sociable Kitchen
- **Island or Breakfast Bar**: Provides counter space and a gathering spot. Match bar stools to the orange-copper theme.
- **Open-Plan Flow**: Use archways or counter pass-throughs to connect the kitchen to dining or living areas, keeping conversations flowing.

# Adapting the Theme to Different Kitchen Styles
The orange and copper scheme is versatile:
- **Ultra-Modern**: Use clean lines, high-gloss finishes, and vibrant oranges.
- **Rustic**: Pair natural wood with distressed copper and softer oranges.
This vibrant duo captures the warmth of a sunset and the gleam of a new penny, creating a kitchen that’s modern, welcoming, and unmistakably yours.
    `,
    images: [
      '/blogs/image-1.png',
      '/blogs/2.jpg',
      '/blogs/7.png',
      '/blogs/9.webp',
    ],
    date: 'July 2, 2025',
  },
 {
    id: 3,
    slug: 'multi-functional-dining-room',
    title: 'Make a Multi-Functional Dining Room with a Harmonious Colour Scheme',
    description: 'Create a versatile dining room that transitions from casual brunches to elegant dinner parties with a harmonious color scheme that blends practicality and sophistication.',
    content: `
# The Evolution from Casual to Formal Dining
A dining room is more than just a place to eat—it’s where life happens. From hurried breakfasts to festive dinner parties, a well-designed dining room adapts to every occasion with ease.

## Casual Dining Feel
Everyday moments shine in a cozy, welcoming space:
- **Hurried Breakfasts**: Quick meals before the day begins.
- **Weekend Brunches**: Laughter and stories with loved ones.
- **Family Discussions**: Unplanned chats that bring everyone together.

## Dressing Up for the Occasion
For special events, elevate the vibe with simple touches:
- **Elegant Details**: Use shiny cutlery or beautifully folded napkins.
- **Festive Ambiance**: Add candles or a centerpiece for gatherings with friends.

# Harmonious Colour Scheme for Multi-Functional Dining Rooms
A cohesive color palette sets the mood and enables dual-purpose dining.

## Neutral Foundations
Start with neutral tones for versatility:
- **Shades to Consider**: Beige, soft greys, or muted blues create a comforting backdrop.
- **Why It Works**: These colors suit both casual dinners and grand celebrations, acting as a canvas for layering.
- **Application**: Use on walls or furniture fabrics (e.g., a beige sofa or white dining chairs).

## Accent Colours
Add personality with accent shades:
- **Options**: Navy curtains, forest green cushions, or colorful dinnerware.
- **Balance**: Ensure accents (drapes, tableware, flowers) echo the same color story for cohesion.
- **Impact**: These elements add zest without overwhelming the neutral base.

## Bold Statement Pieces
Incorporate standout items for visual interest:
- **Examples**: A vivid painting or chairs in an unexpected hue.
- **Effect**: Sparks conversation and adds a delightful surprise within the harmonious scheme.

# Practicality Meets Elegance
## Practical Design Elements
Prioritize durability for daily use:
- **Durable Fabrics**: Choose spill-resistant materials, especially for homes with kids.
- **Sturdy Furniture**: Invest in a dining table that handles everyday wear yet looks elegant for formal settings.

## Sophisticated Touches
Small details elevate the space:
- **Embroidered Table Runner**: Adds a touch of refinement.
- **Heirloom Vase**: Brings personal history and elegance.
- **Cohesive Palette**: Pair these elements with your color scheme for a polished look.

# Creating Your Multi-Functional Dining Room
Designing a dining room that flows with your lifestyle is about heart and creativity. With a harmonious color scheme, practical furniture, and elegant touches, your dining room can tell stories of casual brunches and splendid dinners alike. Start with a neutral base, layer in vibrant accents, and let bold pieces shine to create a space that’s both functional and beautiful.
    `,
    images: [
      '/blogs/multifunctional-dining-room-500x281.jpg',
      '/blogs/dining-room-paint-colors-with-purple-yellow-and-white.jpg',
      '/blogs/kyliefitts_havenly-process_15-3.jpg',
      '/blogs/@amazingtelly.webp',
    ],
    date: 'July 3, 2025',
  },
 {
    id: 4,
    slug: 'rich-plum-entrance-hall',
    title: 'Elevate Your Entrance Hall with a Rich Plum Shade',
    description: 'Transform your entrance hall into a grand, elegant space with a deep, luxurious plum purple that adds period charm and creates a memorable first impression.',
    content: `
# The Power of Rich Plum
A grand entrance hall sets the tone for your home, and a rich plum shade—a deep, luxurious purple—brings unparalleled elegance. This bold color exudes opulence and drama, instantly captivating guests and establishing a refined atmosphere that carries through the rest of your home.

# Enhancing Architectural Features
Rich plum enhances the architectural details of your hallway, creating a striking contrast with white woodwork or ornate moldings. This deep purple:
- Highlights intricate features like crown molding or paneling.
- Adds depth to the design, making the hallway a focal point.
- Creates a lasting impression with its bold yet sophisticated presence.

# Versatility and Timeless Appeal
While rooted in period elegance, rich plum adapts to various design styles:
- **Traditional Halls**: Complements classic moldings and antique decor.
- **Modern Spaces**: Pairs with sleek lines for a contemporary edge.
- **Timeless Quality**: Its versatility ensures it remains a stylish choice for years to come.

# Playing with Lighting
Lighting is key to showcasing plum’s depth and vibrancy:
- **Natural Light**: Enhances the color’s richness through windows, creating dynamic light and shadow play.
- **Artificial Lighting**: Use statement chandeliers or sconces to accentuate purple tones and add warmth.
- **Tip**: Experiment with dimmable lights to adjust the ambiance for different times of day.

# Harmonizing with Decor and Furnishings
Create a cohesive look with complementary decor:
- **Metallic Accents**: Gold or silver details (e.g., mirror frames, hardware) add glamour.
- **Neutral Tones**: Cream or beige elements (e.g., rugs, console tables) provide subtle contrast, letting plum shine.
- **Curated Pieces**: Artwork or mirrors enhance the period aesthetic without overwhelming the space.

# Flooring Options
Choose flooring to amplify the plum’s impact:
- **Light Flooring**: Pale hardwood or cream tiles contrast with plum walls, creating an airy, elegant feel.
- **Dark Flooring**: Rich mahogany or ebony adds depth, harmonizing with plum for a grand, cohesive look.
- **Tip**: Ensure flooring complements the overall style, whether modern or traditional.

# Completing the Look
Elevate the hallway with decorative elements:
- **Antique Mirrors**: Reflect light and add timeless charm.
- **Wall Sconces**: Provide soft, elegant lighting.
- **Ornate Artwork**: Enhances the period-inspired sophistication.
These touches create a harmonious, inviting space that exudes grandeur.

# Transform Your Entrance Hall
With its captivating allure, rich plum transforms your entrance hall into a stunning, memorable space. By blending bold color, thoughtful lighting, and complementary decor, you can craft a hallway that balances period elegance with modern versatility. Embrace the power of deep purple to create an entrance that leaves a lasting impression.
    `,
    images: [
      '/blogs/harness-rich-plum-period-elegance-image-3.jpg',
      '/blogs/how-to-childproof-your-hallway-hero.avif',
      '/blogs/Paean-Black-No.294-Modern-3-475x615.jpg',
      '/blogs/_ff748ff2-096b-4363-8c75-ae41d901e521.png',
    ],
    date: 'July 4, 2025',
  },
  {
    id: 5,
    slug: 'chocolate-and-gold-home-office',
    title: 'Create an Elegant Home Office with Chocolate and Gold Accents',
    description: 'Transform your home office with the warm, luxurious blend of chocolate and gold, combining cozy comfort with sophisticated elegance for a workspace that inspires.',
    content: `
# The Warmth of Chocolate
Chocolate, beyond being a beloved treat, brings a rich, inviting warmth to any space. Imagine a cozy evening wrapped in a plush chocolate-toned blanket—this comforting vibe can transform your home office into a welcoming haven. A deep chocolate wall or desk creates a serene, focused environment perfect for productivity.

# The Elegance of Gold
Gold adds a touch of opulence without overwhelming. Rooted in cultural celebrations, from festive decor to bridal attire, gold symbolizes sophistication. In your office, gold accents—like a sleek lamp, a paper tray, or calendar edges—elevate the space, making it feel both luxurious and homely.

# Home Office Design Ideas with Chocolate and Gold
## Furniture Ideas
Incorporate chocolate and gold into your furniture for a cohesive, elegant look:
- **Chocolate Desk**: A sturdy wooden desk in deep chocolate enhances richness; swap standard handles for golden ones for a touch of magic.
- **Comfy Chair**: Choose a chocolate-toned chair with a cushion featuring gold motifs, creating a throne-like feel.
- **Stylish Storage**: Add chocolate-colored bookshelves or cabinets, adorned with small golden figurines or hardware for a polished look.

## Accessorize with Flair
Small details tie the theme together:
- **Lamps**: A chocolate lamp base with a gold accent or a golden bulb holder adds warmth and style.
- **Gold Details**: Use golden pens, chocolate folders with gold edges, or gold-trimmed organizers to enhance the theme.
- **Artistic Touches**: Hang a painting with chocolate and gold hues or frame family photos in gold for a personal, elegant vibe.

## Adding a Personal Touch
Make the space uniquely yours:
- **Heirloom Items**: Display a golden watch or heirloom on your desk.
- **Gifted Decor**: Drape a chocolate throw blanket over your chair for comfort and charm.
- **Memories**: Incorporate personal items that reflect your story, breathing life into the room.

# Creating Your Dream Workspace
A chocolate and gold home office blends warmth and sophistication, making work feel lighter and more inspiring. By combining rich chocolate tones with elegant gold accents, you can craft a space that’s both majestic and welcoming. Start with a chocolate base, layer in gold details, and add personal touches to create a workspace that speaks to your heart.
    `,
    images: [
      '/blogs/Gold_Grandeur_-_luxury_office_ideas.webp',
      '/blogs/images.png',
      '/blogs/luxury-home-office-interior-with-black-gold-decor_1282444-215026.avif',
      '/blogs/black-gold-office-with-desk-gold-lamp_598590-42.avif',
    ],
    date: 'July 5, 2025',
  },
   {
    id: 6,
    slug: 'lilac-study-space',
    title: 'Craft a Calm and Productive Study Space with Lilac Shades',
    description: 'Transform your study space with soothing lilac hues, creating a calm and focused environment that boosts productivity and elevates your mood.',
    content: `
# The Calming Power of Lilac
Lilac, a gentle purple hue, brings a refreshing calm to your study space or home office. Its soft tones soothe the mind, enhance focus, and make work feel less daunting. By incorporating lilac, you can create a serene environment where ideas flow freely and productivity thrives.

# Choosing the Right Lilac Shade
The shade of lilac you choose shapes the atmosphere of your study space. Here’s how to select the perfect one:

## Impact of Lilac Shades on Mood
- **Lighter Lilacs**: Pale shades create a relaxing, stress-free environment, ideal for workspaces where you balance work and breaks. They promote calm and clarity.
- **Darker Lilacs**: These add sophistication and a cozy, enclosed feel, perfect for deep focus on complex tasks. They bring a touch of drama without overwhelming.

## Tips for Choosing Lilac
Consider your room’s lighting and size:
- **Lighting**: In well-lit rooms with natural light, darker lilacs shine without feeling heavy. In dimmer spaces, lighter lilacs brighten and open up the area.
- **Room Size**: Lighter lilacs make small rooms feel larger and more inviting. Larger rooms can handle darker lilacs for an anchored, intimate vibe.

# Lilac Color Combinations
Pair lilac with complementary colors to enhance the study space:

## Lilac and Soft Greens
- **Why It Works**: Evokes the freshness of spring, blending lilac’s calm with soft green’s vitality.
- **Application**: Use green accents in rugs, plants, or chair upholstery to create a refreshing, focused environment.
- **Benefit**: Keeps you relaxed yet alert, ideal for high-stress tasks or long study sessions.

## Lilac and Grays
- **Why It Works**: Creates a modern, professional look with a neutral gray backdrop that lets lilac stand out.
- **Application**: Pair lilac walls with gray furniture or curtains for a sleek, distraction-free space.
- **Benefit**: Enhances concentration, perfect for contemporary office setups.

## Lilac and Creamy Whites
- **Why It Works**: Combines lilac with creamy whites for an airy, open feel that maximizes natural light.
- **Application**: Use white desks, shelves, or wall trim with lilac accents for a clean, organized look.
- **Benefit**: Supports long periods of focus in a bright, inviting space.

# Practical Decorating Tips
## Balancing Lilac in Your Space
Introduce lilac thoughtfully to avoid overwhelming the room:
- **Start Small**: Use lilac in desk organizers, small rugs, or throw pillows.
- **Accent Wall**: A single lilac wall adds calm without dominating the space.
- **Tip**: Test paint samples to see how lilac looks in your lighting.

## Keeping It Professional Yet Calm
Lilac’s calming effect reduces stress, but functionality is key:
- **Strategic Placement**: Place lilac items (e.g., artwork, cushions) in your line of sight to ease tension during work.
- **Neutral Essentials**: Keep desks, chairs, and cabinets in neutral tones (e.g., gray, white) to maintain focus.
- **Tip**: Balance lilac with practical, uncluttered furniture for a professional vibe.

# Crafting Your Ideal Study Space
Lilac transforms your study into a calm, productive haven that lifts your mood and makes work feel lighter. By choosing the right shade and pairing it with soft greens, grays, or creamy whites, you can create a space that’s both soothing and functional. Add thoughtful decor and keep essentials practical to craft a study space that inspires creativity and focus.
    `,
    images: [
      '/blogs/study-room-walls.avif',
      '/blogs/lilac-wall.avif',
      '/blogs/iStock-1177844431.jpg',
      '/blogs/lilac-colour-combinations.avif',
    ],
    date: 'July 6, 2025',
  },
];

const MarkdownComponents = {
  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-6 text-gray-800 border-b pb-2" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-5 text-gray-800" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-xl font-medium my-4 text-gray-800" {...props} />,
  p: ({ node, ...props }) => <p className="text-lg leading-relaxed my-4 text-gray-700" {...props} />,
  ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 text-gray-700" {...props} />,
  ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4 text-gray-700" {...props} />,
  li: ({ node, ...props }) => <li className="mb-2" {...props} />,
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600" {...props} />
  ),
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        className="rounded-lg my-4"
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    );
  },
  img: ({ node, ...props }) => (
    <div className="my-6">
      <img
        {...props}
        className="rounded-lg shadow-md w-full h-auto"
        alt={props.alt || 'Blog image'}
      />
    </div>
  ),
};

export default function BlogPage({ params }) {
  if (params?.slug) {
    const blog = blogs.find(b => b.slug === params.slug);
    if (!blog) return <div className="container mx-auto p-4 text-center text-xl text-gray-700">Blog not found</div>;

    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back button */}
          <Link 
            href="/blogs" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blogs
          </Link>

          {/* Blog header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{blog.title}</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{blog.date}</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">{blog.description}</p>
          </div>

          {/* Image gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {blog.images.map((image, index) => (
              <div key={index} className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`${blog.title} image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Blog content */}
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={MarkdownComponents}
              rehypePlugins={[rehypeRaw]}
            >
              {blog.content}
            </ReactMarkdown>
          </article>

          {/* Tags section */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Interior Design', 'Home Decor', 'Color Schemes', 'DIY'].map(tag => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

