import React, { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { URL } from "../apis/URL";
import { ShopContext } from "../cart-context/Shop-Context";
import ProductFilters from "../components/ProductFilters";

const Products = ({ category }) => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { searchQuery } = useContext(ShopContext);

  useEffect(() => {
    // Fetch products based on category (optional)
    const fetchData = async () => {
      try {
        const url = category
          ? `${URL}/products?category=${category}`
          : `${URL}/products`;
        const res = await fetch(url);
        const newProducts = await res.json();
        const productsWithIds = newProducts.map((product, index) => ({
          ...product,
          id: index + 1,
        }));
        setProductsData(productsWithIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    // Apply filters when filter values or products data change
    const applyFilters = () => {
      let filtered = productsData.filter(
        (product) =>
          searchQuery === "" ||
          product.productName.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
      );
      setFilteredProducts(filtered);
    };
    applyFilters();
  }, [searchQuery, productsData]);

  return (
    <Container>
      <ProductFilters
        productsData={productsData}
        setFilteredProducts={setFilteredProducts}
      />

      <hr className="my-3" />

      <Row className="grid g-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
              <Product product={product} id={product.id} />
            </Col>
          ))
        ) : (
          <Col>
            <h1>No items to be shown</h1>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Products;
