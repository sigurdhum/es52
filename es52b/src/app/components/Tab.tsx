"use client";
import { useEffect, useState } from "react";
import { useValgtKategori } from "../context/ValgtKategoriContext";

export interface TabProps {}

const TabValg = () => {
  const { valgtKategori, setValgtKategori } = useValgtKategori();

  let valg;
  valg = localStorage.getItem("valgtKategori") || "";
  const [valgt, setValgt] = useState(valg);

  useEffect(() => {
    console.log("valgt", valgtKategori);
  }, [valgt]);

  return (
    <div className="tabValg">
      <label>
        <input
          type="radio"
          value="Generelt"
          name="typenValg"
          checked={valgtKategori === "Generelt"}
          onChange={(e) => {
            localStorage.setItem("valgtKategori", e.target.value);
            setValgtKategori(e.target.value);
          }}
        />
        Generelt
      </label>
      <label>
        <input
          type="radio"
          value="Før avreise"
          name="typenValg"
          checked={valgtKategori === "Før avreise"}
          onChange={(e) => {
            localStorage.setItem("valgtKategori", e.target.value);
            setValgtKategori(e.target.value);
          }}
        />
        Før avreise
      </label>
    </div>
  );
};

export default TabValg;
