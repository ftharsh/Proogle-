import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Routes } from "./components/routes";

function App() {
  const [darkTheme, setdarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
