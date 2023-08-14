"use client";
import rooms from "@/helpers/helperRooms";
import { usePathname } from "next/navigation";
import RootLayout from "../layout";

export interface PageProps {}

export interface Notice {
  description: string;
  importance: "low" | "medium" | "high";
}

export interface Room {
  roomNr: number;
  roomName: string;
  notices: Notice[];
}

const getRoom = (roomNr: number): Room => {
  /* take from the helper folder*/
  return rooms.find((room) => room.roomNr === roomNr) as Room;
};

const page = () => {
  const romNr = usePathname().replace("/", "");
  const room = getRoom(parseInt(romNr));

  return (
    <>
      <span>
        <div className="kulepunkt inverted active">
          <p>{room.roomNr}</p>
        </div>
        <h2>{room.roomName}</h2>
      </span>

      <ul>
        {room.notices.map((notice: Notice) => (
          <li key={notice.description}>{notice.description}</li>
        ))}
      </ul>
    </>
  );
};

export default page;
