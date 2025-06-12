// Performance optimization utilities

// Lazy load images
export const lazyLoadImage = (src: string, alt: string, className?: string) => {
  return {
    src,
    alt,
    loading: "lazy" as const,
    className,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  }
}

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== "undefined") {
    // Preload hero image
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = "/images/hero-education.jpg"
    document.head.appendChild(link)
  }
}

// Optimize form submissions
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
