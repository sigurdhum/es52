"use client";
import { useEffect, useState } from "react";
import { Notice } from "../[romNr]/page";
import { TabServerContext } from "../layout";
import { useValgtKategori } from "../context/ValgtKategoriContext";

export interface RadiosProps {
  notices: Notice[];
}

const Radios = (props: RadiosProps) => {
  const valgtKategori = useValgtKategori();
  const [localStorageValue, setLocalStorageValue] = useState<string | null>(
    localStorage.getItem("valgtKategori")
  );

  return (
    <div>
      {props.notices.map(
        (notice: Notice, idx: number) =>
          valgtKategori["valgtKategori"] === notice.type && (
            <div className="notice" key={" " + idx}>
              <label>
                <input type="checkbox" value="option1" name={idx + ""} />
                {notice.description}
              </label>
            </div>
          )
      )}
    </div>
  );
};

export default Radios;
