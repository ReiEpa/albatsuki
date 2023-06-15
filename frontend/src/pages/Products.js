import React from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";

const products = [
  {
    id: 1,
    title: "Itachi Uchiha Headband",
    price: 20,
    category: "Accessories",
    anime: "Naruto Shippuden",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 2,
    title: "Itachi Uchiha Headband",
    price: 20,
    category: "Accessories",
    anime: "Naruto Shippuden",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 3,
    title: "Itachi Uchiha Headband",
    price: 20,
    category: "Accessories",
    anime: "Naruto Shippuden",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 4,
    title: "Itachi Uchiha Headband",
    price: 20,
    category: "Accessories",
    anime: "Naruto Shippuden",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 5,
    title: "Itachi Uchiha Headband",
    price: 20,
    category: "Accessories",
    anime: "Naruto Shippuden",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg",
  },
  {
    id: 6,
    title: "Itachi Uchiha Headband",
    price: 20,
    category: "Accessories",
    anime: "Naruto Shippuden",
    imageSrc:
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
