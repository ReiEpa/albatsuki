import { createContext, useState, useEffect } from "react";
import { URL } from "../apis/URL";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState({}); // Initialize cartItems as an empty object

  const fetchData = async () => {
    try {
      const res = await fetch(`${URL}/products`);
      const newProducts = await res.json();
      // Add a unique identifier to each product
      const productsWithIds = newProducts.map((product, index) => ({
        ...product,
        id: index + 1, // Start the IDs from 1 instead of 0
      }));
      setProductsData(productsWithIds);

      // Initialize cartItems with the correct keys and initial quantity of 0
      const defaultCart = {};
      for (let i = 1; i <= productsWithIds.length; i++) {
        defaultCart[i] = 0;
      }
      setCartItems(defaultCart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productsData.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.productPrice;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    productsData,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
