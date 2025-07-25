import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* <LinkContainer to="/"> */}
          <Navbar.Brand href="/">
            <img
              src={logo}
              alt="Proshop Logo"
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            ></img>
            Proshop
          </Navbar.Brand>
          {/* </LinkContainer> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <LinkContainer to="/cart"> */}
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              {/* </LinkContainer> */}

              {/* <LinkContainer to="/login"> */}
              <Nav.Link href="/login">
                <FaUser /> Login
              </Nav.Link>
              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
