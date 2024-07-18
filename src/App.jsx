import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import MusicControl from "./components/music-control/MusicControl";
import Album from "./pages/Album";
import "./styles/style.scss";
import Podcast from "./pages/Podcast";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="content">
        <Sidebar />
        <div className="main">
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Dashboard />} />
              <Route path="/album" element={<Album />} />
              <Route path="/podcast" element={<Podcast />} />
            </Route>
          </Routes>
          <MusicControl />
        </div>
      </div>
    </>
  );
}

export default App;
