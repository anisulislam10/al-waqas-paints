
import Head from 'next/head';

export const metadata = {
  title: 'Privacy Policy - Al-Waqas Paint and Hardware Store',
  description: 'Privacy Policy for Al-Waqas Paint and Hardware Store, detailing how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy - Al-Waqas Paint',
    description: 'Learn how Al-Waqas Paint and Hardware Store handles your personal data.',
    url: 'https://alwaqaspaint.com/privacy-policy',
    siteName: 'Al-Waqas Paint',
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm mb-6">Last Updated: July 5, 2025</p>

        <section className="mb-6">
          <p>
            Al-Waqas Paint and Hardware Store ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at <a href="https://alwaqaspaint.com" className="text-blue-600 hover:underline">https://alwaqaspaint.com</a>. Please read this policy carefully. If you do not agree with the terms, please do not use the website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <h3 className="text-lg font-medium mb-1">1.1 Personal Data</h3>
          <p>
            <strong>Contact Information</strong>: If you submit inquiries via our website’s contact form, we may collect your name, email address, phone number, or other details you provide for order purposes, customer support, or product inquiries.
          </p>
          
          
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5">
            <li>Process and respond to inquiries or orders submitted via the contact form.</li>
            <li>Provide customer support and product information.</li>
            <li>Improve the website by analyzing usage data.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. How We Share Your Information</h2>
          <p>
            We do not sell or share your personal data with third parties except:
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Service Providers</strong>: We may share data with trusted third-party services (e.g., Google Analytics, email providers) to process inquiries or analyze usage.</li>
            <li><strong>Legal Requirements</strong>: We may disclose data if required by law or to protect our rights.</li>
            <li><strong>Business Transfers</strong>: Data may be transferred in the event of a merger or acquisition.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We use industry-standard measures, including HTTPS and encryption, to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
          <p>
            The website may use third-party services (e.g., Google Analytics, Google Maps). These services have their own privacy policies:
          </p>
          <ul className="list-disc pl-5">
            <li>Google Analytics: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a></li>
            <li>Google Maps: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a></li>
          </ul>
        </section>

       

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this policy to reflect changes in our practices. The updated policy will be posted at <a href="https://alwaqaspaint.com/privacy-policy" className="text-blue-600 hover:underline">https://alwaqaspaint.com/privacy-policy</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
          <p>
            For questions or concerns, contact us at:
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Email</strong>: <a href="mailto:info@alwaqaspaint.com" className="text-blue-600 hover:underline">info@alwaqaspaint.com</a></li>
            <li><strong>Phone</strong>: +92 333 5093223</li>
            <li><strong>Address</strong>: Shop 1 & 2, Raja Plaza, Duhma Patak Ternol, Islamabad, Pakistan</li>
          </ul>
        </section>

    
      </main>
    </>
  );
}
