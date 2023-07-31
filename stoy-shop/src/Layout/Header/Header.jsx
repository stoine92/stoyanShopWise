import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderImage from '../../Images/header.png';
import { Link } from 'react-router-dom';
import {CATEGORIES} from "../../Data/CATEGORIES"
function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
      <img
              src={HeaderImage}
              width="75"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
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
      </Container>
    </Navbar>
  );
}

export default Header;