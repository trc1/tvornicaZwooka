import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

export default function Dashboard() {
  return (
    <div className="content">
      <Sidebar />
      <Main />
    </div>
  );
}
