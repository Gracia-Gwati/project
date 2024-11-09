import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project was coded by Tinotenda Gracia Gwati and is open-sourced
          on{" "}
          <a href="https://github.com/Gracia-Gwati/project/tree/master">
            GitHub
          </a>{" "}
          and hosted on <a href="https://skyscout-tgg.netlify.app">Netlify</a> .
        </footer>
      </div>
    </div>
  );
}
