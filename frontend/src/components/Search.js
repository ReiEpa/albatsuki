import React, { useContext } from "react";
import { ShopContext } from "../cart-context/Shop-Context";

const Search = () => {
  const { handleSearch } = useContext(ShopContext);

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
};
export default Search;
