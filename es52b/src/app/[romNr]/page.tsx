"use client";
import rooms from "@/helpers/helperRooms";
import { usePathname } from "next/navigation";
import RootLayout, { TabServerContext } from "../layout";
import { TabContext } from "../context/tabValgContext";
import Radios from "../components/Radios";
import { useEffect, useState } from "react";

export interface PageProps {}

export interface Notice {
  description: string;
  importance: "low" | "medium" | "high";
  type: "Generelt" | "Før avreise";
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

const Page = () => {
  const romNr = usePathname().replace("/", "");
  const room = getRoom(parseInt(romNr));
  let val = localStorage.getItem("valgtKategori") || "";
  const [value, setValue] = useState(val);

  useEffect(() => {
    const val = localStorage.getItem("valgtKategori") || "";
    setValue(val);
    console.log("val", val);
  }, []);

  if (room === undefined) {
    return (
      <span>
        <div className="kulepunkt inverted active">
          <p>0</p>
        </div>
        <h2>Ops</h2>
      </span>
    );
  }

  return (
    <>
      <span>
        <div className="kulepunkt inverted active">
          <p>{room.roomNr}</p>
        </div>
        <h2>{room.roomName}</h2>
      </span>
      <Radios notices={room.notices} />
    </>
  );
};

export default Page;
