import React from "react";
import NavLink from "./NavLink";

function Nabvar() {
  return (
    <div>
      <nav className="flex flex-shrink items-center justify-between flex-wrap mr-10 p-4">
        <NavLink text="Home" path="" />
        <NavLink text="Check me out" path="aboutme" />
        <NavLink text="Contact" path="contact" />
      </nav>
    </div>
  );
}

export default Nabvar;
