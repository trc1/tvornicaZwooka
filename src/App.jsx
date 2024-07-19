import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Album from "./pages/album/Album";
import Podcast from "./pages/podcast/Podcast";
import Layout from "./pages/layout/Layout";
import "./styles/style.scss";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="album" element={<Album />} />
          <Route path="podcast" element={<Podcast />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
