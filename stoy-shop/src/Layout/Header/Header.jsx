import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import {Container, Nav, Navbar, NavDropdown }from 'react-bootstrap';
import HeaderImage from '../../Images/header.png';
import { Link } from 'react-router-dom';
import {CATEGORIES} from "../../Data/CATEGORIES";
import { StoreContext } from '../../context/Context';
import { useContext } from 'react';
import {
  MDBIcon,
  MDBBadge
} from 'mdb-react-ui-kit';



function Header() {
const {itemsCount} = useContext(StoreContext)
const {getTotalPrice} = useContext(StoreContext);
const totalPrice = getTotalPrice();

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
      <img
              src={HeaderImage}
              width="75"
              height="45"
              className="d-inline-block align-top"
              alt="Header company logo"
            />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              {/* Converting to Link from react router to avoid default behaviour and make it SPA */}
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/'>All Categories</NavDropdown.Item>
              <NavDropdown.Divider />
              {CATEGORIES.map((category) => (
                  <NavDropdown.Item key={category.id} as={Link} to={`/${category.path}`}>
                  {category.categoryName}
                </NavDropdown.Item>
              ))}
              
            </NavDropdown>
            <Nav.Link as={Link} to='/about-us'>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart">
        <div>  
        {itemsCount > 0 && <MDBBadge pill color='danger'>{itemsCount}</MDBBadge>}
              <span>
                  <MDBIcon size='lg' fas icon='shopping-cart' color="white"></MDBIcon>
              </span>
              </div>
              </Link>
        <p className="cartPHeader">Total: £{totalPrice.toFixed(2)}</p>
      </Container>
    </Navbar>
  );
}

export default Header;

