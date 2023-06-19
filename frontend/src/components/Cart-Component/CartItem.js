import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../cart-context/Shop-Context";

const CartItem = ({ product }) => {
  const { productName, productPrice, productImg, id } = product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
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
        <button onClick={() => removeFromCart(id)}> - </button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}> + </button>
      </div>
    </div>
  );
};

export default CartItem;
