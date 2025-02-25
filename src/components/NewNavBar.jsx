// Importações dos componentes do React Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NewNavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kQgQpqjNBuk_cmUCOtlGdXX3QEX3146jAQ&s"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="C&G logo"
          />
          <Navbar.Brand href="#home">C&G Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/cadastro">Cadastro</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <NavDropdown title="Unidades" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Vila Velha</NavDropdown.Item>
                <NavDropdown.Item href="#">Vitória</NavDropdown.Item>
                <NavDropdown.Item href="#">Serra</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Aracruz</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NewNavBar;
