// import React, { useContext } from "react";
// import { ShopContext } from "../../cart-context/Shop-Context";
// import { useNavigate } from "react-router-dom";

import { Container } from "react-bootstrap";

const Checkout = () => {
  //   const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  //   const navigate = useNavigate();

  //   const handleCheckout = () => {
  //     // Perform the checkout process here
  //     // This could involve making an API call or updating the backend database

  //     // After the checkout is completed, you can clear the cart or perform any necessary actions
  //     // For example, you can set the cartItems to an empty object to clear the cart
  //     // setCartItems({});

  //     // Redirect the user to a confirmation page or any other desired destination
  //     navigate("/confirmation");
  //   };

  return (
    <Container>
      <h1>Checkout</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nostrum
        odit aperiam, perspiciatis nam a quam quas praesentium iure, ut
        consequatur vel dicta possimus architecto maiores similique quod
        dolorem! Assumenda?
      </p>
    </Container>
  );
};

export default Checkout;
