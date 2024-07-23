import React from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import Navigation from "../navigation/Navigation";
import Premium from "../premium/Premium";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar" role="complementary">
      <header className="sidebar__header">
        <Link to={"/dashboard"} replace aria-label="Home">
          <LogoIcon />
        </Link>
      </header>
      <Navigation />
      <Premium />
    </aside>
  );
}
