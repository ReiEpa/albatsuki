import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { URL } from "../apis/URL";
import AddProduct from "../admin/AddProduct";

const Products = ({ category }) => {
  const [productsData, setProductsData] = useState([]);

  const fetchData = async () => {
    try {
      const url = category
        ? `${URL}/products?category=${category}`
        : `${URL}/products`;
      const res = await fetch(url);
      const newProducts = await res.json();
      setProductsData(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      {/* <AddProduct
        productsData={productsData}
        setProductsData={setProductsData}
      /> */}
      <Row className="grid g-3 ">
        {productsData.map((product, id) => (
          <Col key={id} xs={12} sm={6} md={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
