import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { NotFound } from "./components/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/reflection/" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
