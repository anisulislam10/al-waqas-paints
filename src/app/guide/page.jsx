import Head from 'next/head';
import Link from 'next/link';

const houseData = [
  {
    
    size: "5 Marla",
    wallPutty: "15–18 bags",
    primer: { liters: "60–70 liters", gallons: "16–18 gal", drums: "4–5 drums" },
    emulsion: { liters: "100–120 liters", gallons: "26–32 gal", drums: "7–8 drums" },
    weatherShield: { liters: "60–70 liters", gallons: "16–18 gal", drums: "4–5 drums" },
  },
  {
    size: "8 Marla",
    wallPutty: "22–25 bags",
    primer: { liters: "80–100 liters", gallons: "21–26 gal", drums: "5–7 drums" },
    emulsion: { liters: "150–180 liters", gallons: "40–47 gal", drums: "9–11 drums" },
    weatherShield: { liters: "80–100 liters", gallons: "21–26 gal", drums: "5–7 drums" },
  },
  {
    size: "10 Marla",
    wallPutty: "28–32 bags",
    primer: { liters: "100–120 liters", gallons: "26–32 gal", drums: "7–8 drums" },
    emulsion: { liters: "200–240 liters", gallons: "53–63 gal", drums: "13–15 drums" },
    weatherShield: { liters: "100–120 liters", gallons: "26–32 gal", drums: "7–8 drums" },
  },
  {
    size: "12 Marla",
    wallPutty: "32–38 bags",
    primer: { liters: "120–140 liters", gallons: "32–37 gal", drums: "8–9 drums" },
    emulsion: { liters: "240–280 liters", gallons: "63–74 gal", drums: "15–18 drums" },
    weatherShield: { liters: "120–140 liters", gallons: "32–37 gal", drums: "8–9 drums" },
  },
  {
    size: "14 Marla",
    wallPutty: "38–45 bags",
    primer: { liters: "140–160 liters", gallons: "37–42 gal", drums: "9–10 drums" },
    emulsion: { liters: "280–320 liters", gallons: "74–85 gal", drums: "18–20 drums" },
    weatherShield: { liters: "140–160 liters", gallons: "37–42 gal", drums: "9–10 drums" },
  },
  {
    size: "1 Kanal (20 Marla)",
    wallPutty: "50–60 bags",
    primer: { liters: "180–200 liters", gallons: "47–53 gal", drums: "11–13 drums" },
    emulsion: { liters: "350–400 liters", gallons: "92–106 gal", drums: "22–25 drums" },
    weatherShield: { liters: "200–220 liters", gallons: "53–58 gal", drums: "13–14 drums" },
  },
];

export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Paint Estimation Guide | Al-Waqas Paint</title>
        <meta name="description" content="Estimate paint quantities for your house with Al-Waqas Paint's guide for 5, 8, 10, 12, 14 Marla, and 1 Kanal houses." />
        <meta name="keywords" content="paint estimation, Al-Waqas Paint, house painting, wall putty, primer, emulsion, weather shield" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
      </Head>
          <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Paint Estimation Guide",
            "description": "Guide to estimate paint quantities for different house sizes with Al-Waqas Paint.",
            "publisher": {
              "@type": "Organization",
              "name": "Al-Waqas Paint",
            },
          })}
        </script>

      {/* Hero Section */}
      <section className="relative bg-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Paint Estimation Guide</h1>
          <p className="text-lg md:text-xl mb-6">
            Plan your painting project with Al-Waqas Paint’s rough estimation guide for various house sizes.
          </p>
          <Link href="/contact-us" className="inline-block bg-white text-red-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition">
              Contact Us
           
          </Link>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex space-x-2 text-gray-600">
          <li>
            <Link href="/" className="hover:text-red-800">Home
            </Link>
          </li>
          <li> {'>'} </li>
          <li className="text-red-800">Paint Estimation Guide</li>
        </ol>
      </nav>


      {/* Estimation Tables */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Paint Quantities by House Size</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {houseData.map((house, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-black">
              <h3 className="text-xl font-bold text-red-800 mb-4">{house.size} House</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="font-semibold py-2 px-3 border-b">Material</th>
                    <th className="font-semibold py-2 px-3 border-b">Liters</th>
                    <th className="font-semibold py-2 px-3 border-b">Gallons</th>
                    <th className="font-semibold py-2 px-3 border-b">Drums</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold py-2 px-3 border-b">Wall Putty</td>
                    <td className="py-2 px-3 border-b" colSpan="3">{house.wallPutty}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 px-3 border-b">Primer</td>
                    <td className="py-2 px-3 border-b">{house.primer.liters}</td>
                    <td className="py-2 px-3 border-b">{house.primer.gallons}</td>
                    <td className="py-2 px-3 border-b">{house.primer.drums}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 px-3 border-b">Emulsion (Interior)</td>
                    <td className="py-2 px-3 border-b">{house.emulsion.liters}</td>
                    <td className="py-2 px-3 border-b">{house.emulsion.gallons}</td>
                    <td className="py-2 px-3 border-b">{house.emulsion.drums}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 px-3 border-b">Weather Shield (Exterior)</td>
                    <td className="py-2 px-3 border-b">{house.weatherShield.liters}</td>
                    <td className="py-2 px-3 border-b">{house.weatherShield.gallons}</td>
                    <td className="py-2 px-3 border-b">{house.weatherShield.drums}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help with Your Project?</h2>
          <p className="text-gray-600 mb-6">
            Contact Al-Waqas Paint for expert advice and premium products to bring your vision to life.
          </p>
          <Link href="/contact-us" className="inline-block bg-green-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-800 transition">
              Contact Us
            
          </Link>
        </div>
      </section>
    </div>
  );
}