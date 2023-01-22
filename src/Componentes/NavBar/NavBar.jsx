import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Buscador } from '../Buscador/Buscador';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const navBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">TocaDiscos</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">60s</Nav.Link>
          <Nav.Link href="#pricing">70s</Nav.Link>
          <Nav.Link href="#pricing">80s</Nav.Link>
          <Nav.Link href="#pricing">90s</Nav.Link>
          <Nav.Link href="#pricing">Actualidad</Nav.Link>
        </Nav>
        <Nav>
          <CartWidget />
          <ItemListContainer />
          <Buscador />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default navBar