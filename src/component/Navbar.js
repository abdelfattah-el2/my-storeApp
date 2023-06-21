import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { fetahpost } from "../rtx-store/Slices/cart-Slice";
import { Badge } from "react-bootstrap";
import "../App.css";

function Navbars() {
  let dispatch = useDispatch();
  let render = useSelector((state) => state.ren);
  useEffect(() => {
    dispatch(fetahpost());
  }, [render]);
  let loc = useLocation();
  let { pathname } = loc;
  let spilt = pathname.split("/");
  let items = useSelector((state) => state.cart);

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <NavLink to={"/"} className=" nav-link navbar-brand fst-italic">
          My Store
        </NavLink>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav show"
          className="position-relative"
        >
          {items.length !== 0 && (
            <>
              <FontAwesomeIcon icon={faBars} />
              <Badge
                pill
                bg="primary"
                className="  !text-xs top-1/3   left-8 position-absolute  "
              >
                {items.length}
              </Badge>
            </>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          className="d-flex-lg justify-content-lg-end  "
          id="basic-navbar-nav"
        >
          <Nav className="align-items-center">
            <Link
              to={"/"}
              className={
                spilt[1] === "" || spilt[1] === "details"
                  ? "activ "
                  : "rounded-pill nav-link"
              }
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className={
                spilt[1] === "about" ? "activ " : "rounded-pill nav-link"
              }
            >
              About
            </Link>
            <Link
              to={"/contact-us"}
              className={
                spilt[1] === "contact-us" ? "activ " : "rounded-pill nav-link"
              }
            >
              Contact Us{" "}
            </Link>
            <Link
              to={"/my-cart"}
              className={
                spilt[1] === "my-cart" ? "activ " : "rounded-pill  nav-link"
              }
            >
              Cart
              <FontAwesomeIcon icon={faCartShopping} />
              {items.length !== 0 && (
                <Badge pill bg="primary">
                  {items.length}
                </Badge>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
