import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  const [newProduct, setNewProduct] = useState({
    id: "",
    productName: "",
    productPrice: "",
    productCategory: "",
    productAnime: "",
    productImg: "",
  });

  const URL = "http://localhost:5000/products";
  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const newProducts = await res.json();
      console.log(newProducts);
      setProductsData(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const addData = async () => {
    try {
      const response = await fetch(URL, {
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
          id: "",
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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <form onSubmit={addData}>
        <input
          type="number"
          placeholder="product Id"
          name="id"
          value={newProduct.id}
          onChange={handleInputChange}
        />
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
      <Row className="grid g-3 ">
        {productsData.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
