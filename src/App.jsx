import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Playlist from "./pages/playlist/Playlist";
import Podcast from "./pages/podcast/Podcast";
import Layout from "./pages/layout/Layout";
import "./styles/style.scss";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
