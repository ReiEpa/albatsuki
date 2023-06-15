import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  const {
    productName,
    productPrice,
    productCategory,
    productAnime,
    productImg,
  } = product;

  return (
    <Card>
      <Card.Img variant="top" src={productImg} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          Price: {productPrice}$ <br />
          Category: {productCategory} <br />
          Anime: {productAnime}
        </Card.Text>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
