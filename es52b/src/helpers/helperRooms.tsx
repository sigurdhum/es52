import { Room } from "../app/[romNr]/page";

const rooms: Room[] = [
  {
    roomNr: 1,
    roomName: "Kjøkken",
    notices: [
      {
        description: "Vaske kommen (VIKTIG)",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Vaske toastjern, kaffetrakter og vannkoker",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Tømme kjøleskap",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Ikke ha noe (kjøkken)oppvask stående etter reisedag",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Kaste søppel (VIKTIG)",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Vaske kaffetrakter en gang i måneden ved fast bruk",
        importance: "high",
        type: "Generelt",
      },
    ],
  },
  {
    roomNr: 2,
    roomName: "Bod",
    notices: [
      {
        description: "Ta ut støvsuger-lader (VIKTIG!)",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Ikke ha støvsuger-lader stående i stikkontakt",
        importance: "high",
        type: "Generelt",
      },
    ],
  },
  {
    roomNr: 3,
    roomName: "Gang",
    notices: [
      {
        description: "Ytterdøren skal alltid være låst",
        importance: "low",
        type: "Generelt",
      },
      {
        description:
          "Pass på at stumtjeneren er ordentlig skrudd på plass. Den løsner litt etter hvert",
        importance: "low",
        type: "Generelt",
      },
    ],
  },
  {
    roomNr: 4,
    roomName: "Bad",
    notices: [
      {
        description: "Sjekk at Kranen ikke renner",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Sjekk at Dusjen ikke står på",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Sjekk at Vaskemaskinen ikke står på",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Tøm sluket i dusjen (1 gang i måneden)",
        importance: "high",
        type: "Generelt",
      },
      {
        description:
          "Bruk boksen til å ha sokker og underbukser i (for den som bor på MINI-SOV)",
        importance: "high",
        type: "Generelt",
      },
    ],
  },
  {
    roomNr: 5,
    roomName: "Mini-sove",
    notices: [
      {
        description: "Sov med enten vindu eller døren åpen",
        importance: "high",
        type: "Generelt",
      },
      {
        description: "Gjennomluft rommet hver dag",
        importance: "high",
        type: "Generelt",
      },
      {
        description: "Lysbryteren er litt annerledes enn de andre (spør sig)",
        importance: "high",
        type: "Generelt",
      },
    ],
  },
  {
    roomNr: 6,
    roomName: "Stue",
    notices: [
      {
        description:
          "Ikke åpne det nederste vinduet her generelt sett (TODO legg inn link)",
        importance: "high",
        type: "Generelt",
      },
      {
        description: "Stekeovnen er av",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Stekeplater er av",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Viften er av",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Oppvaskmaskinen er av (ikke la den gå etter avreise)",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Fryseren er lukket",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Kjøleskapet er lukket",
        importance: "high",
        type: "Før avreise",
      },
      {
        description: "Oppvaskmaskinen er lukket",
        importance: "high",
        type: "Før avreise",
      },
    ],
  },
  {
    roomNr: 7,
    roomName: "Internett",
    notices: [
      {
        description:
          "Internettet er: HappyWifiHappyLife. Passordet er: (TODO legg inn passord)",
        importance: "high",
        type: "Generelt",
      },
      {
        description:
          "Alle lysene, untatt SOVEROM (i taket) og BAD, kan styres med Philips Hue appen (TODO legg inn link)",
        importance: "high",
        type: "Generelt",
      },
    ],
  },
  {
    roomNr: 8,
    roomName: "Soverom",
    notices: [
      {
        description:
          "Lyset i taket kan styres med SG appen (TODO legg inn link)",
        importance: "high",
        type: "Generelt",
      },
    ],
  },
];

export default rooms;
