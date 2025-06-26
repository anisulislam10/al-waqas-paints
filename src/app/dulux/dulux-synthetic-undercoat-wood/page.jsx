"use client";

import Head from "next/head";
import BaseDetailPage from "../../../components/dulux/BaseDetailPage";

const AmbianceDiamondGlo = () => {
  const product = {
    id: 1,
    title: "Dulux Synthetic Undercoat Wood and Metal Primer",
    image: "/dulux/10.avif",
    description:
      "Dulux Synthetic Undercoat is a high quality solvent based primer for all kinds of interior & exterior wood & metal surfaces. It protects the metal surface from rust & gives uniform appearance to topcoat; act as a sealant for wood surfaces to provide uniform appearance & adhesion with topcoat.",
    keyInformation: {
      finish: "Matt",
      coverage: "11-13 m2/L",
      dryingTime: "16 Hours between coats",
      coats: "1",
    },
    features: [
      "Seals Wood",
      "Improves Adhesion with Top Coat",
      "No Added Lead or Mercury",
    ],
    applicationDescription:
      "Apply 2-3 coats of dulux Synthetic Undercoat and leave for 16 hours between coats",
    downloads: {
      sds: "/pdf/dulux/xx_pk_en_dulux_synthetic_undercoatf54286404383324.pdf",
      tds: "/pdf/dulux/tds_dulux_synthetic_undercoat_pk.pdf",
      warranty: "/pdf/dulux/pentalite_classic_tc.pdf",
    },
  };

  // Structured data for the AmbianceDiamondGlo page
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo/#product",
        "name": product.title,
        "url": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo",
        "image": `https://al-waqas-paints.vercel.app${product.image}`,
        "description": product.description,
        "sku": "DUL-001",
        "category": "Primers",
        "brand": {
          "@type": "Brand",
          "name": "Dulux",
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "PKR",
          "price": "6000", // Replace with actual price
          "availability": "http://schema.org/InStock",
          "url": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo",
        },
        "additionalProperty": [
          ...product.features.map((feature) => ({
            "@type": "PropertyValue",
            "name": "Feature",
            "value": feature,
          })),
          {
            "@type": "PropertyValue",
            "name": "Finish",
            "value": product.keyInformation.finish,
          },
          {
            "@type": "PropertyValue",
            "name": "Coverage",
            "value": product.keyInformation.coverage,
          },
          {
            "@type": "PropertyValue",
            "name": "Drying Time",
            "value": product.keyInformation.dryingTime,
          },
          {
            "@type": "PropertyValue",
            "name": "Coats",
            "value": product.keyInformation.coats,
          },
          {
            "@type": "PropertyValue",
            "name": "Application Instructions",
            "value": product.applicationDescription,
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://al-waqas-paints.vercel.app/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Dulux Products",
            "item": "https://al-waqas-paints.vercel.app/dulux",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.title,
            "item": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo/#webpage",
        "url": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo",
        "name": `${product.title} | Al-Waqas Paint`,
        "description": product.description,
        "inLanguage": "en-PK",
        "isPartOf": {
          "@id": "https://al-waqas-paints.vercel.app/#website",
        },
        "publisher": {
          "@id": "https://al-waqas-paints.vercel.app/#organization",
        },
        "breadcrumb": {
          "@id": "https://al-waqas-paints.vercel.app/dulux/ambiance-diamond-glo/#breadcrumb",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{product.title} | Al-Waqas Paint</title>
        <meta name="description" content={product.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <BaseDetailPage product={product} />
    </>
  );
};

export default AmbianceDiamondGlo;