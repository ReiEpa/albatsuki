import React, { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../cart-context/Shop-Context";
import Cart from "./Cart-Component/Cart";
import MusicPlayer from "../features/MusicPlayer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleCartClick = () => {
    setShowCart(!showCart); // Toggle the visibility of the shopping cart
  };

  const handleCloseCart = () => {
    setShowCart(false); // Close the shopping cart
  };

  const getCartItemCount = () => {
    // Calculate the total number of items in the cart
    const itemCount = Object.values(cartItems).reduce(
      (total, count) => total + count,
      0
    );
    return itemCount;
  };

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <span id="brand">Albatsuki</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/products")}>Products</Nav.Link>
          </Nav>

          <Nav>
            {userInfo ? (
              <>
                <Nav.Link onClick={() => navigate("/profile")}>
                  {userInfo.name}
                </Nav.Link>
                <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
                <Nav.Link onClick={() => navigate("/register")}>
                  Register
                </Nav.Link>
              </>
            )}

            <Nav.Link onClick={handleCartClick}>
              <div className="cart-icon">
                <AiOutlineShoppingCart />
                {getCartItemCount() > 0 && (
                  <span className="cart-count">{getCartItemCount()}</span>
                )}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <MusicPlayer />
      {showCart && (
        <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </Navbar>
  );
};

export default Header;
