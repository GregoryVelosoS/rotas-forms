import React from "react";

// Importa o componentes do Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
const Login = () => {
  return (
    <div>
      <Container >
        <h1>Login</h1>
        <Form className="text-center">
          <Form.Group className="mb-3" controlId="formBasicEmail"  >
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted" >
              Vamos compartilhar seus dados na dark web :)
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha:</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
