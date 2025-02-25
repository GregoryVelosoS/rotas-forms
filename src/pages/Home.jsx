import React from "react";

import { Navigate } from "react-router-dom";

// Importa o componentes do Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
  const isAuth = true;

  return (
    <div>
      {isAuth ? <Navigate to="/" /> : <Navigate to="/login" />}
      <Container>
        <h1>Home</h1>
        <Carousel>
          <Carousel.Item >
            <Image
              src="https://tv.sbt.com.br/_next/image?url=https%3A%2F%2Fstatic.sbt.com.br%2Fnoticias%2Fimages%2F157868.jpg&w=1080&q=90"
              text="Cirilo"
              width={1080}
              height={500}
              
            />
            <Carousel.Caption>
              <h3>Cirilo</h3>
              <p>Ele é um menino muito inteligente e estudioso.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://ofuxico.com.br/img/upload/noticias/2012/10/15/151392_36.jpg"
              text="Maria Joaquina"
              width={1080}
              height={500}
            />
            <Carousel.Caption>
              <h3>Maria Joaquina</h3>
              <p>É uma menina muito rica e mimada.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRPR78OGAZ9KhJtbpWYgHWZG5nJ--Sa6kRw&s"
              text="Prof Helena"
              width={1080}
              height={500}
            />
            <Carousel.Caption>
              <h3>Prof Helena</h3>
              <p>É a professora da escola.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
