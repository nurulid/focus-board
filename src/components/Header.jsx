import { Button } from "@nextui-org/react";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky mx-auto max-w-5xl shadow-sm mt-6 mb-3 py-3 px-6 rounded-xl bg-green-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-green-200">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-semibold font-mono">TodayFocus</div>
        <div className="space-x-4">
          <Button color="danger" variant="bordered" className="text-black border-black">Login</Button>
          <Button color="danger" className="text-white bg-black ">Register</Button>
        </div>
      </nav>
    </header>
  );
};
