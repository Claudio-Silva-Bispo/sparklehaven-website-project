import Head from 'next/head';
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import FeedbackTestimonials from '../components/FeedbackTestimonials'

export default function Home() {
  return (
    <>
      <Head>
        {/* Título otimizado para SEO local */}
        <title>Sparkl Haven Cleaning Service - Professional House Cleaning in Seattle, Kirkland & Bellevue | WA</title>
        
        {/* Descrição otimizada com palavras-chave e localização */}
        <meta 
          name="description" 
          content="Professional residential and commercial cleaning services in Seattle, Kirkland, Bellevue, Redmond, Bothell, and Sammamish, WA. Expert house cleaning, office cleaning, and move in/out cleaning. Call (425) 476-5411 for a free quote!"
        />
        
        {/* Palavras-chave focadas em SEO local */}
        <meta 
          name="keywords" 
          content="house cleaning seattle, cleaning service kirkland, maid service bellevue, residential cleaning redmond, office cleaning bothell, move out cleaning sammamish, professional cleaners seattle wa, home cleaning service washington, commercial cleaning kirkland, deep cleaning bellevue"
        />
        
        {/* Geo tags para SEO local */}
        <meta name="geo.region" content="US-WA" />
        <meta name="geo.placename" content="Seattle" />
        <meta name="geo.position" content="47.6062;-122.3321" />
        <meta name="ICBM" content="47.6062, -122.3321" />
        
        {/* Autor */}
        <meta name="author" content="Sparkl Haven Cleaning Service" />
        
        {/* Open Graph para redes sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sparkl Haven Cleaning Service - Seattle, Kirkland & Bellevue" />
        <meta property="og:description" content="Professional cleaning services for homes and offices in Greater Seattle Area. Residential, commercial, and move in/out cleaning." />
        <meta property="og:image" content="https://sparklhavencleaningservice.com/og-image.png" />
        <meta property="og:url" content="https://sparklhavencleaningservice.com" />
        <meta property="og:site_name" content="Sparkl Haven Cleaning Service" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sparkl Haven Cleaning Service - Seattle Area" />
        <meta name="twitter:description" content="Professional house and office cleaning in Seattle, Kirkland, Bellevue, and surrounding areas" />
        <meta name="twitter:image" content="https://sparklhavencleaningservice.com/twitter-image.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://sparklhavencleaningservice.com" />
        
        {/* Schema.org para o website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sparkl Haven Cleaning Service",
              "url": "https://sparklhavencleaningservice.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sparklhavencleaningservice.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema.org para serviços */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Cleaning Service",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Sparkl Haven Cleaning Service",
                "telephone": "+1-425-476-5411",
                "url": "https://sparklhavencleaningservice.com"
              },
              "areaServed": [
                "Seattle, WA",
                "Kirkland, WA",
                "Bellevue, WA",
                "Redmond, WA",
                "Bothell, WA",
                "Sammamish, WA",
                "Issaquah, WA",
                "Mercer Island, WA",
                "Woodinville, WA"
              ],
              "description": "Professional residential and commercial cleaning services including house cleaning, office cleaning, move in/out cleaning, and trash removal in Greater Seattle Area",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Cleaning",
                      "description": "Professional home cleaning for houses and apartments in Seattle area"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Cleaning",
                      "description": "Office and commercial space cleaning services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Office Cleaning",
                      "description": "Professional office cleaning and maintenance"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Move In/Out Cleaning",
                      "description": "Deep cleaning for moving situations"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Trash Removal",
                      "description": "Junk and trash removal services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div> 
        <Hero/>
        <About/>
        <Service/>
        <FeedbackTestimonials/>
      </div>
    </>
  )
}