export const contactMethods = [
  {
    label: "Email",
    value: "tepargun@gmail.com",
    href: "mailto:tepargun@gmail.com",
    note: "Send us your enquiries",
  },
  {
    label: "Phone",
    value: "+62 851-5981-0955",
    href: "tel:+6285159810955",
    note: "Call us directly",
  },
  {
    label: "Visit us",
    value: "Ängelholm, Sweden",
    href: "https://maps.google.com/?q=Koenigsegg+Ängelholm+Sweden",
    note: "Factory visits by appointment",
    external: true,
  },
];

export function createContactMailto(formData) {
  const subject = encodeURIComponent(
    `Koenigsegg enquiry — ${formData.get("subject")}`,
  );
  const body = encodeURIComponent(
    `${formData.get("message")}\n\n${formData.get("firstName")} ${formData.get("lastName")}\n${formData.get("email")}\n${formData.get("phone") || ""}`,
  );

  return `mailto:tepargun@gmail.com?subject=${subject}&body=${body}`;
}
