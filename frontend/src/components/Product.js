import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images-na.ssl-images-amazon.com/images/I/51POWVOfprL.jpg"
      />
      <Card.Body>
        <Card.Title>Itachi Uchiha Headband</Card.Title>
        <Card.Text>
          <p className="m-0">Price: 20$</p>
          <p className="m-0">Category: Accessories</p>
          <p className="m-0">Anime: Naruto Shippuden</p>
        </Card.Text>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
