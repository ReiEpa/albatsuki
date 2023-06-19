import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Accessories from "./pages/Accessories";
import Clothes from "./pages/Clothes";
import Popular from "./pages/Popular";

const App = () => {
  return (
    <Router>
      <div style={{ marginTop: "5rem" }}>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </Router>
  );
};

export default App;
