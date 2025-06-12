"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { pageview } from "@/lib/analytics"

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ""

  useEffect(() => {
    if (!GA_TRACKING_ID) return

    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams, GA_TRACKING_ID])

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
