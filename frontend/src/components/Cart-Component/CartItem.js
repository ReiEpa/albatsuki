import React, { useContext, useState, useEffect } from "react";
import "./cart.css";
import { ShopContext } from "../../cart-context/Shop-Context";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CartItem = ({ product }) => {
  const { productName, productPrice, productImg, id } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(cartItems[id]);

  useEffect(() => {
    setCount(cartItems[id]);
  }, [cartItems, id]);

  const handleDecrement = () => {
    if (count === 1) {
      setShowModal(true);
    } else {
      removeFromCart(id);
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleDiscardConfirm = () => {
    removeFromCart(id);
    setCount(0);
    setShowModal(false);
  };

  return (
    <div className="cartItem">
      <img src={productImg} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{productPrice}$</p>
      </div>
      <div className="countHandler">
        <button onClick={handleDecrement}> - </button>
        <input
          value={count}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to discard this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDiscardConfirm}>
            Discard
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartItem;
