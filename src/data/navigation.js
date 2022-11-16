export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Megacars", href: "/megacars" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = navigationLinks.filter((link) => link.href !== "/");
