import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  let navigate = useNavigate();

  const handleCartClick = () => {
    setShowCart(!showCart); // Toggle the visibility of the shopping cart
  };

  const handleCloseCart = () => {
    setShowCart(false); // Close the shopping cart
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
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/accessories")}>
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/clothes")}>
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/popular")}>
                Popular Anime
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link onClick={handleCartClick}>
              <AiOutlineShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {showCart && (
        <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as a placeholder. In real life, you can have the elements
            you have chosen, like text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </Navbar>
  );
};

export default Header;
