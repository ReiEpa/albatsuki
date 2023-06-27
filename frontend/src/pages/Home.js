import React from "react";
import Container from "react-bootstrap/Container";
import About from "../components/About";
import ActionFigure from "../components/ActionFigure";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <div>
      <header className="py-5 text-center">
        <h1>Welcome to Albatsuki</h1>
        <p>Your one-stop shop for anime clothes and accessories in Albania</p>
      </header>
      <main>
        <Container>
          <Slideshow />
          <hr className="my-5" />
          <ActionFigure />
          <hr className="my-5" />
          <About />
        </Container>
      </main>
    </div>
  );
};

export default Home;
