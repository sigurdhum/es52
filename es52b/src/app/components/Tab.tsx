"use client";
import { Tab } from "@headlessui/react";

export interface TabProps {}

const TabValg = () => {
  return (
    <div className="tabValg">
      <label>
        <input type="radio" value="option1" name="typenValg" />
        Generelt
      </label>
      <label>
        <input type="radio" value="option1" name="typenValg" />
        Før avreise
      </label>
    </div>
  );
};

export default TabValg;
