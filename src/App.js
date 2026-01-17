// import './App.css';\

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
    <Router>
      <Navbar title="RKMRC ATTENDANCE" />
      <Routes>
        <Route path="/" element={<Home dept="Department of Life Sciences" />} />
        <Route path="/about" element={<About dept="Department of Life Sciences" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register dept="Department of Life Sciences" />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
 