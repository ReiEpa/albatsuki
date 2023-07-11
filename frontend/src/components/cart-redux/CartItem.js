import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.productImg} alt={item.productName} />
      <div className="item-details">
        <p className="item-name">{item.productName}</p>
        <p className="item-price">${item.productPrice}</p>
      </div>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;
