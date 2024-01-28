import { useState } from "react";
import "./assets/index.css";
import { Home } from "./components/Home";
import { Content } from "./components/Content";

export const App = () => {
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
};
