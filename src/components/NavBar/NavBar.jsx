import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const { state } = useContext(CartContext);
  const showQuantity = state.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  return (
    <>
      <Navbar className="NavBar" variant="dark" expand="lg" fixed="top">
        <div className="d-flex justify-content-between navbar-part">
          <Navbar.Brand href="/" className="navbar-brand">
            BotaniPure
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="hamburger-toggle"
          />

          {/* Menüyü açıp kapatan içerik */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About Our Products
              </NavLink>
              <NavLink to="/guidepage" className="nav-link">
                Skin Care Guide
              </NavLink>
              <NavLink to="/product" className="nav-link">
                Product
              </NavLink>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/shoppingcart" className="nav-link shopping-cart">
                <FaShoppingCart className="icon d-none d-lg-inline" />
                {showQuantity > 0 ? "(" + showQuantity + ")" : ""}
                <span className="d-lg-none">Shopping Cart</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
