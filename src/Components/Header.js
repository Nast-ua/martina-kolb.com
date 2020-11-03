import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between border-b-2 border-gray-800 border-opacity-25 bg-gray-100 shadow-md">
      <h1 className="text-xl ml-10 p-6">Martina Kolb</h1>
      <Navbar />
    </div>
  );
}

export default Header;
