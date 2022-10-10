import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./NavBar.scss"

const NavBar = () => {
  return (
    <Container>
      <Navbar className="App-navbar" expand="lg">
        <Container className="flex-lg-column">
          <Navbar.Brand className='App-logo' href="#home">SMARTER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="App-navbar-items me-auto">
              <Nav.Link href="#relojes">Relojes</Nav.Link>
              <Nav.Link href="#auriculares">Auriculares</Nav.Link>
              <Nav.Link href="#accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#accesorios">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;