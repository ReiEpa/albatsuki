import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ product }) => {
  const { title, price, category, anime, imageSrc } = product;

  return (
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price: {price}$ <br />
          Category: {category} <br />
          Anime: {anime}
        </Card.Text>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
