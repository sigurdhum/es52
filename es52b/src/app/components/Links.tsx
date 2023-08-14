"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface LinksProps {
  numberOfRooms: number;
}

const Links = (props: LinksProps) => {
  const activeRoom: number = Number(usePathname().replace("/", ""));
  return (
    <>
      {Array.from(Array(props.numberOfRooms).keys()).map((roomNr: number) => (
        <Link href={`/${roomNr + 1}`} key={"room" + roomNr}>
          <div
            className={`kulepunkt ${activeRoom === roomNr + 1 ? "active" : ""}`}
          >
            <p>{roomNr + 1}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Links;
