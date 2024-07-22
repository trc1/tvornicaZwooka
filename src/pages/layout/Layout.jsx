import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import MusicControl from "../../components/music-control/MusicControl";
import Login from "../login/Login";
import { useState } from "react";
export default function Layout() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const isPodcastPage = location.pathname.includes("podcast");

  return (
    <>
      {!isLogin ? (
        <Login setIsLogin={setIsLogin} isLogin={isLogin} />
      ) : (
        <div className="content">
          <Sidebar />
          <div className="main">
            <Header />
            <Outlet />
            {!isPodcastPage && <MusicControl />}
          </div>
        </div>
      )}
    </>
  );
}
