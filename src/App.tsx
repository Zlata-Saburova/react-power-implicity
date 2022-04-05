import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav></Nav>
    </div>
  );
};

export default App;
