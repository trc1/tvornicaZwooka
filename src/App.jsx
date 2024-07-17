import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./styles/style.scss";

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
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
