import { Room } from "../app/[romNr]/page";

const rooms: Room[] = [
  {
    roomNr: 1,
    roomName: "Kjøkken",
    notices: [
      {
        description: "Bod",
        importance: "low",
      },
    ],
  },
  {
    roomNr: 2,
    roomName: "Bod",
    notices: [],
  },
  {
    roomNr: 3,
    roomName: "Gang",
    notices: [],
  },
  {
    roomNr: 4,
    roomName: "Bad",
    notices: [],
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
        description: "Ikke åpne det nederste vinduet her (TODO legg inn link)",
        importance: "high",
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
