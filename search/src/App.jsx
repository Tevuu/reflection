import "./assets/index.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Content } from "./components/Content";
import { useState } from "react";

function App() {
  const open = () => {
    setShowModal(true);
    var body = document.querySelector("body");
    body.style.setProperty("--var-overflow", "hidden");
  };
  const [modal, setShowModal] = useState(false);
  return (
    <>
      <Home open={open} />
      <Content modal={modal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
