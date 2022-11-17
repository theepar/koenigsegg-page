import { withBasePath } from "../utils/urls.js";

export const megacars = [
  {
    name: "CC850",
    label: "A celebration of heritage",
    copy: "A modern reimagining of the original CC8S. The CC850 pairs timeless design with the revolutionary Engage Shift System and a 1,385 hp twin-turbo V8.",
    specs: [
      ["1,385 hp", "Power"],
      ["9-speed", "Engage Shift"],
      ["50", "Celebration editions"],
    ],
    image: withBasePath("/images/c8c4d394-KenoZache_IMG_9418.jpg"),
    reverse: false,
  },
  {
    name: "Jesko Absolut",
    label: "The pursuit of ultimate speed",
    copy: "Designed to achieve the highest speed Koenigsegg will ever attempt. Every surface and detail contributes to a drag coefficient of just 0.278 Cd.",
    specs: [
      ["1,600 hp", "On E85 fuel"],
      ["0.278 Cd", "Drag coefficient"],
      ["5.0L V8", "Twin turbo"],
    ],
    image: withBasePath(
      "/images/415e9234-Koenigsegg_20Jesko_20Absolut_20-_20Side_202.JPG",
    ),
    reverse: true,
  },
  {
    name: "Gemera",
    label: "The Mega-GT",
    copy: "A four-seat grand tourer with performance that defies its class. The Gemera brings family, luggage and over 1,700 hp together in a single machine.",
    specs: [
      ["1,700+ hp", "Combined output"],
      ["4 seats", "Room for everyone"],
      ["1,000 km", "Combined range"],
    ],
    image: withBasePath("/images/2f37ee53-KenoZache_IMG_9871_20_281_29.jpg"),
    reverse: false,
  },
];
