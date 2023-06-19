import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ShopContext } from "../cart-context/Shop-Context";

const Product = ({ product, id }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const {
    productName,
    productPrice,
    productCategory,
    productAnime,
    productImg,
  } = product;

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
        <Button variant="dark" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
