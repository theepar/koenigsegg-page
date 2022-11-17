import { withBasePath } from "../utils/urls.js";

export const homeModels = [
  {
    slug: "gemera",
    name: "Gemera",
    headline: ["World’s first", "Mega GT for four"],
    image: withBasePath("/images/c8c4d394-KenoZache_IMG_9418.jpg"),
    href: "/megacars",
  },
  {
    slug: "jesko-attack",
    name: "Jesko Attack",
    headline: ["Road legal", "track legend"],
    image: withBasePath("/images/326bbaea-KenoZache_IMG_0577.jpg"),
    href: "/megacars",
  },
  {
    slug: "jesko-absolut",
    name: "Jesko Absolut",
    headline: ["Fastest", "ever made"],
    image: withBasePath(
      "/images/415e9234-Koenigsegg_20Jesko_20Absolut_20-_20Side_202.JPG",
    ),
    href: "/megacars",
  },
  {
    slug: "cc850",
    name: "CC850",
    headline: ["The driver’s", "dream"],
    image: withBasePath("/images/b6285a89-KenoZache_IMG_1797.jpg"),
    href: "/megacars",
  },
];
