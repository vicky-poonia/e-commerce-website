import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navbarr.css";
import { useSelector } from "react-redux";

function Navbarr() {
  const state = useSelector((state) => state.handleCart);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4">
          <NavLink to="/" className="textd">
            E-Comm Store
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="maxh mx-auto my-2 my-lg-0" navbarScroll>
            <div className="nav-opt d-flex justify-content-center align-items-center">
              <NavLink
                to="/"
                className="nav-link navbar-option text-success mt-1 me-2 fw-bold ms-4"
              >
                Home
              </NavLink>
            </div>
            <div className="nav-opt">
              <NavLink
                to="/products"
                className="nav-link text-success mt-1 me-2 fw-bold ms-4"
              >
                Products
              </NavLink>
            </div>
            <div className="nav-opt">
              <NavLink to="/about" className="nav-link text-success mt-1 me-2">
                About us
              </NavLink>
            </div>
            <div className="nav-opt">
              <NavLink
                to="/contact"
                className="nav-link text-success mt-1 me-2"
              >
                Contact
              </NavLink>
            </div>
          </Nav>
          <div className="buttons">
            <a href="/" className="btn btn-outline-dark">
              <i className="fa-sharp fa-solid fa-right-to-bracket me-1"></i>
              Login
            </a>
            <a href="/" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-user me-1"></i>Register
            </a>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-cart-shopping me-1"></i>Cart (
              {state.length})
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
