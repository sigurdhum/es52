import { Room } from "../app/[romNr]/page";

const rooms: Room[] = [
  {
    roomNr: 1,
    roomName: "Kjøkken",
    notices: [
      {
        description: "Bod",
        importance: "low",
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
    ],
  },
  {
    roomNr: 3,
    roomName: "Gang",
    notices: [],
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
    ],
  },
  {
    roomNr: 5,
    roomName: "Mini-sove",
    notices: [],
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
    notices: [],
  },
  {
    roomNr: 8,
    roomName: "Soverom",
    notices: [],
  },
];

export default rooms;
