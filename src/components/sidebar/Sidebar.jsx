import React, { useEffect, useRef } from "react";
import LogoIcon from "../../assets/icons/LogoIcon";
import Navigation from "../navigation/Navigation";
import Premium from "../premium/Premium";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={isOpen ? "sidebar sidebar--open" : "sidebar"}
      role="complementary"
    >
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
