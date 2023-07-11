import React, { useContext, useEffect } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../cart-context/Shop-Context";
import ProductFilters from "../components/ProductFilters";

const Products = () => {
  const { filteredProducts, productsData, handleFilters } =
    useContext(ShopContext);

  useEffect(() => {
    handleFilters();
  }, []);

  return (
    <Container>
      <hr className="my-2" />
      <ProductFilters productsData={productsData} />

      <hr className="my-2" />

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
