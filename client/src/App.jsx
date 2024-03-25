import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/navBar/NavBar";
import Sections from "./components/sections/Sections";
import User from "./views/user";

function App() {
  return (
    <div className="bg-zinc-900 flex flex-col justify-center items-center p-12 scrollbar-thin  ">
      <NavBar onUserClick={() => setShowUser(true)} />
      <div>
        <Sections />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
