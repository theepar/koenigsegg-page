export const navigationLinks = [
  { label: "Megacars", href: "/megacars" },
  { label: "Technology", href: "/technology" },
  { label: "About", href: "/#about" },
  { label: "History", href: "/#history" },
];

export const utilityLinks = [
  {
    label: "Dealer locator",
    href: "https://www.koenigsegg.com/dealer-locator",
  },
  { label: "Careers", href: "https://careers.koenigsegg.com" },
  { label: "Shop", href: "https://gear.koenigsegg.com" },
  { label: "Press", href: "https://news.cision.com/koenigsegg" },
  { label: "Contact", href: "/contact" },
  { label: "Factory tours", href: "https://www.koenigsegg.com/factory-tours" },
];

export const footerLinks = [
  ...navigationLinks,
  ...utilityLinks.filter((link) => link.label !== "Contact"),
  { label: "Contact", href: "/contact" },
];
