import SpletneStrani from "../../assets/ums_comp.png";
import OdzivenSpletni from "../../assets/devices_cutted.png";
import Dokumenti from "../../assets/excel.jpg";
import Orodja from "../../assets/bim.jpg";

import PodatkiSlika from "../../assets/data_analysis.webp";
import Automation from "../../assets/automation.jpg";
import Obdelava from "../../assets/data_manage.png";
import Gui from "../../assets/gui_development.png";

export const categories = [
  {
    title: "Spletne strani",
    icon: "fas fa-globe",
    image: OdzivenSpletni,
    items: [
      "Izdelava nove spletne strani, optimizirane za SEO in hitrost nalaganja",
      "Posodobitev obstoječe spletne strani z modernimi tehnologijami",
      "Odziven spletni dizajn z uporabo HTML5, CSS3, JavaScript, React",
    ],
  },
  {
    title: "Avtomatizacija dokumentov",
    icon: "fas fa-file-alt",
    image: Dokumenti,
    items: [
      "Generiranje kompleksnih Excelovih poročil z makri in avtomatizirano obdelavo podatkov",
      "Avtomatizirano ustvarjanje Wordovih dokumentov na podlagi predlog",
      "Pretvorba podatkov v različne oblike (PDF, CSV, JSON)",
    ],
  },
  {
    title: "Avtomatizacija inženirskih orodij",
    icon: "fas fa-cogs",
    image: Orodja,
    items: [
      {
        title: "Datoteke in programi na različnih inženirskih področjih:",
        subItems: [
          "Strojništvo (Solidworks, CAD - prilagojeni skripti za avtomatizacijo procesov)",
          "Gradbeništvo (BIM - razvoj orodij za upravljanje z modeli in podatki)",
          "Elektrotehnika (Obdelava signalov, avtomatizacija meritev, integracija senzorjev)",
        ],
      },
    ],
  },
  {
    title: "Obdelava, vizualizacija in analiza podatkov",
    icon: "fas fa-chart-line",
    image: PodatkiSlika,
    items: [
      "Vizualizacija podatkov (grafi, interaktivni diagrami z Excelom in knjižnicami Pythona)",
      "Analiza statističnih podatkov in avtomatizirano poročanje",
      "Obdelovanje datotek (.csv, .json, .xml) z uporabo Python",
      "Implementacija prilagojenih orodij za analizo in vizualizacijo",
    ],
  },
  {
    title: "Komunikacija in integracija naprav",
    icon: "fas fa-plug",
    image: Gui,
    items: [
      "Komunikacije prek kabla (USB, RS232, RS485) in brezžične komunikacije",
      "Izdelava uporabniškega vmesnika (GUI) z uporabo QT, Tkinter, Electron",
      "Integracija naprav (API povezave, MQTT, Modbus)",
      "Razvoj rešitev za nadzor in upravljanje naprav na daljavo",
    ],
  },
  {
    title: "Varnost in zaščita podatkov",
    icon: "fas fa-shield-alt",
    image: Automation,
    items: [
      "Implementacija varnostnih rešitev (SSL certifikati, dvofaktorska avtentikacija)",
      "Šifriranje podatkov in zaščita zasebnosti",
      "Preverjanje in optimizacija varnosti aplikacij in sistemov",
    ],
  },
  {
    title: "Usposabljanje in podpora",
    icon: "fas fa-hands-helping",
    image: Obdelava,
    items: [
      "Usposabljanje zaposlenih za uporabo novih orodij in sistemov",
      "Nudimo tehnično podporo in vzdrževanje po implementaciji",
      "Svetovanje in prilagoditev rešitev glede na potrebe stranke",
    ],
  },
];
