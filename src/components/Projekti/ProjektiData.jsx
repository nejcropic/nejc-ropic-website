/* import ToplarPhone from "../../images/iphone_toplar.png"; */
import UmsPhone from "../../images/phone_ums.png";
import ToplarPhone from "../../images/phone_toplar.png";
import JozePhone from "../../images/phone_joze.png";
import DvojcekPhone from "../../images/phone_dvojcek.png";
import BreceljPhone from "../../images/phone_brecelj.png";
import Diplomska from "../../images/diplomska_main.png";
import Diplomska1 from "../../images/diplomska_1.jpg";
import Diplomska2 from "../../images/diplomska_2.jpg";
import Diplomska3 from "../../images/diplomska_3.jpg";
import Diplomska4 from "../../images/diplomska_4.jpg";
import DiplomskaVideo1 from "../../images/diplomska_video1.mp4";

import ReactJs from "../../icons/atom.png"; // Assuming these are image paths
import Html from "../../icons/html.png";
import Css from "../../icons/social.png";
import Python from "../../icons/python.png";
import RaspberryPi from "../../icons/rpi.png";
const items = [
  {
    id: 1,
    link: "https://picerija-toplar.si/",
    title: "Picerija Toplar",
    image: ToplarPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2024",
  },
  {
    id: 2,
    link: "https://www.ums.si/",
    title: "UMS d.o.o",
    image: UmsPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2023",
  },
  {
    id: 3,
    link: "https://brecelj-pos.eu/",
    title: "POS Stojalo - Brecelj Grafika d.o.o",
    image: BreceljPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "Raspberry PI", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2025",
  },
  {
    id: 4,
    link: "",
    title: "Senzorski in krmilni modul za mobilnega robota",
    image: Diplomska,
    media: [
      {
        type: "image",
        src: Diplomska1,
        description: "Prikaz nameščenega modula",
      },
      { type: "image", src: Diplomska2, description: "Modul - zgoraj" },
      {
        type: "image",
        src: Diplomska3,
        description: "Modul, nameščen na podvozju",
      },
      { type: "image", src: Diplomska4, description: "Prikaz vezja" },
      {
        type: "video",
        src: DiplomskaVideo1,
        description: "Delovanje modula v realnem času",
      },
    ],
    data: [
      { name: "Python", icon: Python },
      { name: "Raspberry Pi", icon: RaspberryPi },
      { name: "HTML", icon: Html },
    ],
    date: "2025",
  },
  {
    id: 5,
    link: "https://joze-sinkovec.si/",
    title: "Jože Šinkovec, s.p.",
    image: JozePhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2024",
  },
  {
    id: 6,
    link: "https://hisadvojcek-ihan.si/",
    title: "Hiša Dvojček Ihan",
    image: DvojcekPhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2023",
  },
];

export default items;
