import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { Buscador } from '../Buscador/Buscador';
import CartWidget from '../CartWidget/CartWidget';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const navBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to='/' > TocaDiscos </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/categoria/60y70s" className={({ isActive })=> isActive ? 'btn btn-secondary':'btn btn-outline-secondary' } >60y70s</NavLink>
            <NavLink to="/categoria/80s" className={({ isActive })=> isActive ? 'btn btn-outline-secondary':'btn btn-secondary' } >80s</NavLink>
            <NavLink to="/categoria/90s" className={({ isActive })=> isActive ? 'btn btn-secondary':'btn btn-outline-secondary' } >90s</NavLink>
            <NavLink to="/categoria/actualidad" className={({ isActive })=> isActive ? 'btn btn-outline-secondary':'btn btn-secondary' } >actualidad</NavLink>
          </Nav>
          <Nav>
            <Link to='/CartWidget'>
              <CartWidget/>
            </Link>
            <Link to='/Buscador'>
              <Buscador />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default navBar