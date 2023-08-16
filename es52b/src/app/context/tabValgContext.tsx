import { createContext } from "react";

export interface tabValgContextProps {
  tabValue: "Generelt" | "Før avreise";
}

export const TabContext = createContext<tabValgContextProps>({
  tabValue: "Generelt",
});

const TabValgContext = () => {
  return <div></div>;
};

export default TabValgContext;
