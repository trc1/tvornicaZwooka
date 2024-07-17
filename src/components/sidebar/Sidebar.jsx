import React from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import Navigation from "../navigation/Navigation";
import Premium from "../premium/Premium";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <header className="sidebar__header">
        <LogoIcon />
      </header>
      <Navigation />
      <Premium />
    </nav>
  );
}