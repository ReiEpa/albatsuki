import React from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";

const products = [
  {
    id: 1,
    productName: "Itachi Uchiha Headband",
    productPrice: 20,
    productCategory: "Accessories",
    productAnime: "Naruto Shippuden",
    productImg:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 2,
    productName: "Itachi Uchiha Headband",
    productPrice: 20,
    productCategory: "Accessories",
    productAnime: "Naruto Shippuden",
    productImg:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 3,
    productName: "Itachi Uchiha Headband",
    productPrice: 20,
    productCategory: "Accessories",
    productAnime: "Naruto Shippuden",
    productImg:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 4,
    productName: "Itachi Uchiha Headband",
    productPrice: 20,
    productCategory: "Accessories",
    productAnime: "Naruto Shippuden",
    productImg:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 5,
    productName: "Itachi Uchiha Headband",
    productPrice: 20,
    productCategory: "Accessories",
    productAnime: "Naruto Shippuden",
    productImg:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 6,
    productName: "Itachi Uchiha Headband",
    productPrice: 20,
    productCategory: "Accessories",
    productAnime: "Naruto Shippuden",
    productImg:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },

  // Add more product objects here
];

const Products = () => {
  return (
    <Container>
      <Row className="grid g-3 ">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
