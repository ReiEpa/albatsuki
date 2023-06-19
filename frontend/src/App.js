import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Cart from "./components/Cart-Component/Cart";
import { ShopContextProvider } from "./cart-context/Shop-Context";
import Accessories from "./pages/Accessories";
import Clothes from "./pages/Clothes";
import Popular from "./pages/Popular";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <ShopContextProvider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
