// Central place for Ganesh Khatri's brand + contact details.
// Update these values any time the details change.

export const site = {
  name: "Ganesh Khatri",
  alias: "Vibe with Gannu",
  role: "Cinematographer & Videographer",
  tagline: "Where light, motion and emotion become story.",
  baseCity: "Dubai, UAE",
  origin: "Nepal",
  email: "Vibewithgannu@gmail.com",
  whatsapp: "+971 55 130 1866",
  // digits only, for wa.me links
  whatsappRaw: "971551301866",
  instagram: "https://www.instagram.com/vibewithgannu/",
  instagramHandle: "@vibewithgannu",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    message ||
      "Hi Ganesh, I came across your portfolio and I'd love to talk about a project."
  )}`;

export const mailtoLink = (subject = "Project Inquiry — Vibe with Gannu") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

// WhatsApp link pre-filled with a message about a specific service.
export const inquiryLink = (service: string) =>
  whatsappLink(
    `Hi Ganesh, I'm interested in your "${service}" service. Could we discuss the details?`
  );
