import React, { useContext } from "react";
import { ShopContext } from "../../cart-context/Shop-Context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { productsData, cartItems, getTotalCartAmount } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      {totalAmount > 0 && (
        <div>
          <h1>Your Cart Items</h1>
        </div>
      )}
      <div className="cartItems">
        {productsData.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem product={product} />;
          } else {
            return null;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal:{totalAmount} $</p>
          <button onClick={() => navigate("/products")}>
            Continue Shopping
          </button>
          <button>Checkout</button>
        </div>
      ) : (
        <div>
          <h1>Your Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
