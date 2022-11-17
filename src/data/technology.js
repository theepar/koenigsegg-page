import { withBasePath } from "../utils/urls.js";

export const innovations = [
  {
    number: "01",
    title: "Power, reimagined.",
    tag: "The engine",
    copy: "Hand-built engines combine astonishing output with precision at every speed. Our twin-turbo V8 delivers up to 1,600 hp on E85.",
    stat: "1,600+",
    statLabel: "horsepower",
    image: withBasePath("/images/4e814e8d-MicrosoftTeams-image_20_2827_29.png"),
    imageAlt: "Koenigsegg engine detail",
  },
  {
    number: "02",
    title: "Air, sculpted.",
    tag: "Aerodynamics",
    copy: "Active aerodynamic systems adapt in real time. Every contour balances downforce, stability and the smallest possible drag.",
    stat: "0.278",
    statLabel: "drag coefficient",
    image: withBasePath(
      "/images/415e9234-Koenigsegg_20Jesko_20Absolut_20-_20Side_202.JPG",
    ),
    imageAlt: "Koenigsegg aerodynamic profile",
  },
  {
    number: "03",
    title: "Light, made strong.",
    tag: "Carbon fibre",
    copy: "Our proprietary carbon fibre wheels and monocoques turn advanced composites into exceptional stiffness, strength and control.",
    stat: "-40 kg",
    statLabel: "wheel set vs. alloy",
    image: withBasePath(
      "/images/c9e55af6-Koenigsegg_20Jesko_20Absolut_20-_20Side_202_202_202.jpeg",
    ),
    imageAlt: "Koenigsegg carbon fibre wheel",
  },
  {
    number: "04",
    title: "A new kind of drive.",
    tag: "Light Speed Tourbillon",
    copy: "The revolutionary transmission uses seven clutches and nine gears to select the right ratio directly. No waiting. Just response.",
    stat: "< 20 ms",
    statLabel: "gear selection",
    image: withBasePath("/images/326bbaea-KenoZache_IMG_0577.jpg"),
    imageAlt: "Koenigsegg drivetrain engineering",
  },
];
