import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Our Family Tree</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Family Trees" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hanson Family</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Amour Family
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Traxel Family</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Von Behren Family
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;