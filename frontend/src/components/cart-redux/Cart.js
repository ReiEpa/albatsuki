import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../actions/userActions";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  console.log(cartItems);
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is bosh</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              removeFromCart={handleRemoveFromCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
