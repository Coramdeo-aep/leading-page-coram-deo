// Google Analytics configuration
export const GA_TRACKING_ID = "G-TN46DS5BR4"

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formType: "contact" | "donation") => {
  event({
    action: "form_submit",
    category: "engagement",
    label: formType,
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: "click",
    category: "engagement",
    label: buttonName,
  })
}

// Track donation attempts
export const trackDonation = (amount?: number) => {
  event({
    action: "donation_attempt",
    category: "conversion",
    label: "donation_form",
    value: amount,
  })
}

// Track contact form submissions
export const trackContact = (interestType?: string) => {
  event({
    action: "contact_submit",
    category: "lead_generation",
    label: interestType || "general",
  })
}
