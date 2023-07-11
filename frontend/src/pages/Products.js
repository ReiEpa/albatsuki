import React, { useContext, useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { ShopContext } from "../cart-context/Shop-Context";
import ProductFilters from "../components/ProductFilters";
import { Button } from "react-bootstrap";

const Products = () => {
  const [loadMore, setLoadMore] = useState(8);
  const { filteredProducts, productsData, handleFilters } =
    useContext(ShopContext);

  useEffect(() => {
    handleFilters();
  }, []);
  const handleLoad = () => {
    setLoadMore(loadMore + 4);
  };

  return (
    <Container>
      <hr className="my-2" />
      <ProductFilters productsData={productsData} />

      <hr className="my-2" />

      <Row className="grid g-3">
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.slice(0, loadMore).map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
                <Product product={product} id={product.id} />
              </Col>
            ))}
            {loadMore < filteredProducts.length && (
              <Button onClick={handleLoad}>Load More</Button>
            )}
          </>
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
