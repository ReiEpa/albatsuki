import React, { useState } from "react";
import { URL } from "../apis/URL";

const AddProduct = ({ productsData, setProductsData }) => {
  const [newProduct, setNewProduct] = useState({
    productName: "",
    productPrice: "",
    productCategory: "",
    productAnime: "",
    productImg: "",
  });
  const addData = async () => {
    try {
      const response = await fetch(`${URL}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        const responseData = await response.json();
        const updatedData = [...productsData, responseData];
        setProductsData(updatedData);
        setNewProduct({
          productName: "",
          productPrice: "",
          productsCategory: "",
          productAnime: "",
          productImg: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={addData}>
      <input
        type="text"
        placeholder="product name"
        name="productName"
        value={newProduct.productName}
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="product price"
        name="productPrice"
        value={newProduct.productPrice}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="product Category"
        name="productCategory"
        value={newProduct.productCategory}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="product Anime"
        name="productAnime"
        value={newProduct.productAnime}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="product img"
        name="productImg"
        value={newProduct.productImg}
        onChange={handleInputChange}
      />
      <button type="submit">Add data</button>
    </form>
  );
};

export default AddProduct;
