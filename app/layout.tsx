import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Coram Deo - Educação com Propósito | Associação de Ensino Integral",
  description:
    "Apoie a missão da Coram Deo e contribua para uma educação integral com valores. Transformando vidas através da educação cristã em Caxias do Sul, RS.",
  keywords:
    "educação cristã, Coram Deo, associação, doação, ensino integral, Caxias do Sul, valores cristãos, educação com propósito",
  authors: [{ name: "Associação Coram Deo", url: "https://coramdeo.site" }],
  creator: "Associação Coram Deo",
  publisher: "Associação Coram Deo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://coramdeo.site",
    title: "Coram Deo - Educação com Propósito",
    description: "Apoie a missão da Coram Deo e contribua para uma educação integral com valores.",
    siteName: "Coram Deo",
    images: [
      {
        url: "https://coramdeo.site/images/coramdeo-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Coram Deo - Associação de Ensino Integral",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coram Deo - Educação com Propósito",
    description: "Apoie a missão da Coram Deo e contribua para uma educação integral com valores.",
    images: ["https://coramdeo.site/images/coramdeo-logo-new.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#472e29",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://coramdeo.site",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Favicon - Logo oficial da Coram Deo */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* SEO Adicional */}
        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Caxias do Sul" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Associação de Ensino Integral Coram Deo",
              alternateName: "Coram Deo",
              url: "https://coramdeo.site",
              logo: "https://coramdeo.site/images/coramdeo-logo-new.png",
              description: "Apoie a missão da Coram Deo e contribua para uma educação integral com valores.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Romano Albe, 987",
                addressLocality: "Caxias do Sul",
                addressRegion: "RS",
                postalCode: "95042-740",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-54-99950-1468",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://www.instagram.com/coramdeo.aep", "https://www.facebook.com/share/1CPh4NKWiz/"],
              foundingDate: "2009",
              nonprofitStatus: "NonprofitType",
              taxID: "10.730.868/0001-09",
            }),
          }}
        />

        {/* Cookie Consent - Osano */}
        <Script
          src="https://cdn.jsdelivr.net/gh/osano/cookieconsent@3.1.1/build/cookieconsent.min.js"
          strategy="afterInteractive"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/osano/cookieconsent@3.1.1/build/cookieconsent.min.css"
        />
      </head>
      <body className={`${inter.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </Suspense>

        {/* Cookie Consent Configuration */}
        <Script id="cookie-consent-config" strategy="afterInteractive">
          {`
            window.addEventListener("load", function(){
              window.cookieconsent.initialise({
                "palette": {
                  "popup": {
                    "background": "#472e29",
                    "text": "#ffffff"
                  },
                  "button": {
                    "background": "#d1741f",
                    "text": "#ffffff"
                  }
                },
                "theme": "classic",
                "position": "bottom",
                "type": "opt-in",
                "content": {
                  "message": "Este site utiliza cookies para melhorar sua experiência de navegação e oferecer conteúdo personalizado.",
                  "dismiss": "Aceitar",
                  "deny": "Recusar",
                  "link": "Saiba mais",
                  "href": "/politica-privacidade",
                  "allow": "Permitir cookies",
                  "policy": "Política de Privacidade"
                },
                "law": {
                  "regionalLaw": false,
                },
                "location": true,
                "revokable": true,
                "animateRevokable": false
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
