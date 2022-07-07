import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
