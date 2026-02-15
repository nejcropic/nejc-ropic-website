/* import ToplarPhone from "../../images/iphone_toplar.png"; */
import UmsPhone from "../../assets/phone_ums.png";
import ToplarPhone from "../../assets/phone_toplar.png";
import JozePhone from "../../assets/phone_joze.png";
import DvojcekPhone from "../../assets/phone_dvojcek.png";
import BreceljPhone from "../../assets/phone_brecelj.png";
import GostiscePhone from "../../assets/phone_pod_podom.png";
import Modul_main from "../../assets/ohisje_diag.png";
import Modul_montaza from "../../assets/sestava.png";
import Modul_zgoraj from "../../assets/ohisje_zgoraj.png";
import Uporabniski_vmesnik from "../../assets/up_vmesnik.png";
import DiplomskaVideo1 from "../../assets/diplomska_video1.mp4";

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
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2025",
  },
  {
    id: 4,
    link: "",
    title: "Senzorski in krmilni modul za mobilnega robota",
    image: Modul_main,
    media: [
      { type: "image", src: Modul_zgoraj, description: "Modul - zgoraj" },
      {
        type: "image",
        src: Modul_montaza,
        description: "Modul, nameščen na podvozju",
      },
      {
        type: "image",
        src: Uporabniski_vmesnik,
        description: "Uporabniški vmesnik modula",
      },
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
    link: "https://gostisce-pod-podom.si/",
    title: "Gostišče pod podom",
    image: GostiscePhone,
    data: [
      { name: "React JS", icon: ReactJs },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
    ],
    date: "2025",
  },
  {
    id: 6,
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
    id: 7,
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
