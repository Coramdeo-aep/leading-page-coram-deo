import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coram Deo - Associação de Ensino Integral | Educação Cristã de Qualidade",
  description:
    "Transformando vidas através da educação cristã de qualidade, formação de caráter e acolhimento social. Há mais de 15 anos impactando famílias em Caxias do Sul, RS.",
  keywords:
    "educação cristã, ensino integral, Caxias do Sul, associação educacional, formação de caráter, acolhimento social, doações, voluntariado",
  authors: [{ name: "Coram Deo" }],
  creator: "Coram Deo",
  publisher: "Coram Deo",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://coramdeo.org",
    title: "Coram Deo - Associação de Ensino Integral",
    description: "Transformando vidas através da educação cristã de qualidade há mais de 15 anos.",
    siteName: "Coram Deo",
    images: [
      {
        url: "/images/logo-coram-deo.png",
        width: 1200,
        height: 630,
        alt: "Coram Deo - Educação Cristã de Qualidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coram Deo - Associação de Ensino Integral",
    description: "Transformando vidas através da educação cristã de qualidade há mais de 15 anos.",
    images: ["/images/logo-coram-deo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#92400e",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://coramdeo.org" />
        <meta name="geo.region" content="BR-RS" />
        <meta name="geo.placename" content="Caxias do Sul" />
        <meta name="geo.position" content="-29.169782;-51.179233" />
        <meta name="ICBM" content="-29.169782, -51.179233" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
