import { createContext, useState, useEffect, useCallback } from "react";
import { URL } from "../apis/URL";
export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [animeFilter, setAnimeFilter] = useState("");
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${URL}/products`);
        const newProducts = await res.json();
        const productsWithIds = newProducts.map((product, index) => ({
          ...product,
          id: index + 1,
        }));
        setProductsData(productsWithIds);

        const defaultCart = {};
        for (let i = 1; i <= productsWithIds.length; i++) {
          defaultCart[i] = 0;
        }
        setCartItems(defaultCart);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleFilters = useCallback(() => {
    // Apply filters and update filteredProducts

    const filteredProducts = productsData.filter((product) => {
      return (
        (searchQuery === "" ||
          product.productName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        (animeFilter === "" || product.productAnime === animeFilter) &&
        (minPriceFilter === "" ||
          product.productPrice >= parseInt(minPriceFilter)) &&
        (maxPriceFilter === "" ||
          product.productPrice <= parseInt(maxPriceFilter)) &&
        (categoryFilter === "" || product.productCategory === categoryFilter)
      );
    });

    setFilteredProducts(filteredProducts);
  }, [
    productsData,
    searchQuery,
    animeFilter,
    minPriceFilter,
    maxPriceFilter,
    categoryFilter,
  ]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
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

  const handleResetFilters = () => {
    setAnimeFilter("");
    setMinPriceFilter("");
    setMaxPriceFilter("");
    setCategoryFilter("");
    setSearchQuery(""); // Reset search query
    handleFilters(); // Apply filters again to show all products
    setFilteredProducts(productsData);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    productsData,
    updateCartItemCount,
    getTotalCartAmount,
    searchQuery,
    setSearchQuery,
    animeFilter,
    setAnimeFilter,
    minPriceFilter,
    setMinPriceFilter,
    maxPriceFilter,
    setMaxPriceFilter,
    handleSearch,
    filteredProducts,
    setFilteredProducts,
    handleFilters,
    handleResetFilters,

    categoryFilter,
    setCategoryFilter,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
