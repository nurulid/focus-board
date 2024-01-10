import React from "react";
import { currentYear } from "@/lib/utils";

export const Footer = () => {

  return (
    <footer className="p-5 text-center border-t text-gray-500 bg-gray-500/10">
      ⓒ {currentYear()} Made with 🧡 by Nurul
    </footer>
  );
};
