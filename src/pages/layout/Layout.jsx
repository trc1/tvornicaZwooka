import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import MusicControl from "../../components/music-control/MusicControl";

export default function Layout() {
  return (
    <>
      <div className="content">
        <Sidebar />
        <div className="main">
          <Header />
          <Outlet />
          <MusicControl />
        </div>
      </div>
    </>
  );
}
