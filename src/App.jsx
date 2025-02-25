// Importa o css
import "./App.css";

// Importa o componente Outlet do react-router-dom
import { Outlet, Link } from "react-router-dom";

// Importação componentes
import NavBar from "./components/NavBar";
import NewNavBar from "./components/NewNavBar";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <>
      <Container>
        {/* <NavBar /> */}
        <NewNavBar />
        <Outlet />{" "}
        {/* Outlet é onde os componentes filhos das rotas são renderizados */}
        <Link to="/">Home</Link>
        <h1>Footer</h1>
      </Container>
    </>
  );
}

export default App;
