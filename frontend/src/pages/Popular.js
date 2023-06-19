import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { URL } from "../apis/URL";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const animeList = [
          "Dragon Ball Z",
          "Naruto Shippuden",
          "Naruto",
          "Dragon Ball",
          "Dragon Ball Super",
          "One Piece",
        ];
        const animeQuery = animeList.join(",");
        const res = await fetch(`${URL}/products?anime=${animeQuery}`);
        const products = await res.json();
        setPopularProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPopularProducts();
  }, []);

  return (
    <Container>
      <h1>Popular Products</h1>
      <Row className="grid g-3">
        {popularProducts.map((product, id) => (
          <Col key={id} xs={12} sm={6} md={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Popular;
