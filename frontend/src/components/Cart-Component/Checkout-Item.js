import { MDBTableBody } from "mdb-react-ui-kit";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext, useState, useEffect } from "react";

import { ShopContext } from "../../cart-context/Shop-Context";
const CheckoutItem = ({ product }) => {
  const { productName, productPrice, productImg, id } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(cartItems[id] || 0);

  useEffect(() => {
    setCount(cartItems[id]);
  }, [cartItems, id]);

  const handleDecrement = () => {
    if (count === 1) {
      console.log("count:", count);
      console.log("cartItems:", cartItems);
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

  console.log("showModal:", showModal);
  return (
    <MDBTableBody>
      <tr>
        <th scope="row">
          <div className="d-flex align-items-center">
            <img
              src={productImg}
              fluid="true"
              className="rounded-3"
              style={{ width: "120px" }}
              alt={productName}
            />
            <div className="flex-column ms-4">
              <p className="mb-2">{productName}</p>
            </div>
          </div>
        </th>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>
            Digital
          </p>
        </td>
        <td className="align-middle">
          <div className="d-flex flex-row align-items-center">
            <button className="btn-checkout" onClick={handleDecrement}>
              -
            </button>

            <input
              style={{ width: "30px" }}
              value={count}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />

            <button className="btn-checkout" onClick={() => addToCart(id)}>
              +
            </button>
          </div>
        </td>
        <td className="align-middle">
          <p className="mb-0" style={{ fontWeight: "500" }}>
            ${productPrice}
          </p>
        </td>
      </tr>

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
    </MDBTableBody>
  );
};

export default CheckoutItem;
