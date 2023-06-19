import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../cart-context/Shop-Context";

const Product = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const {
    id,
    productName,
    productPrice,
    productCategory,
    productAnime,
    productImg,
  } = product;
  const cartItemAmount = cartItems[id] || 0;

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <Card>
      <Card.Img variant="top" src={productImg} height="300px" />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          Price: {productPrice}$ <br />
          Category: {productCategory} <br />
          Anime: {productAnime}
        </Card.Text>
        <Button variant="dark" onClick={handleAddToCart}>
          Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
