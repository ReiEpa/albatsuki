import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Cart from "./components/Cart-Component/Cart";
import { ShopContextProvider } from "./cart-context/Shop-Context";

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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
