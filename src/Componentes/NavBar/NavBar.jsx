import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Buscador } from '../Buscador/Buscador';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const navBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#TocaDiscos">TocaDiscos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#60s">60s</Nav.Link>
            <Nav.Link href="#70s">70s</Nav.Link>
            <Nav.Link href="#80s">80s</Nav.Link>
            <Nav.Link href="#90s">90s</Nav.Link>
            <Nav.Link href="#Actualidad">Actualidad</Nav.Link>
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