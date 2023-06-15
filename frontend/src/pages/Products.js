import React from "react";
import Product from "../components/Product";
import "../styles/products.css";
import { Container } from "react-bootstrap";

const Products = () => {
  return (
    <Container>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Container>
  );
};

export default Products;
