"use client";
import { createContext, useContext, useState } from "react";

export const ValgtKategoriContext = createContext<{
  valgtKategori: string;
  setValgtKategori: (value: string) => void;
} | null>(null);

export const useValgtKategori = () => {
  const context = useContext(ValgtKategoriContext);
  if (!context) {
    throw new Error(
      "useValgtKategori must be used within a ValgtKategoriProvider"
    );
  }
  return context;
};

export const ValgtKategoriProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [valgtKategori, setValgtKategori] = useState<string>(
    localStorage.getItem("valgtKategori") || "Generelt"
  );

  const value = {
    valgtKategori,
    setValgtKategori,
  };

  return (
    <ValgtKategoriContext.Provider value={value}>
      {children}
    </ValgtKategoriContext.Provider>
  );
};
