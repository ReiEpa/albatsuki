import React from "react";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import About from "../components/About";
import ActionFigure from "../components/ActionFigure";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <header className="py-5 text-center">
        <h1>Welcome to Albatsuki</h1>
        <p>Your one-stop shop for anime clothes and accessories in Albania</p>
        <Image
          src="https://wallpapercave.com/wp/wp8662873.jpg"
          roundedCircle
          height="150px"
        />
      </header>
      <main>
        <Container>
          <section className="my-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <div className="featured">
              <Card
                className="bg-secondary text-light"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => navigate("/popular")}
              >
                <Card.Body>
                  <Card.Title>Popular Anime Products</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Clothes/Accessories
                  </Card.Subtitle>
                  <Card.Text>
                    Here you can find all products from the most popular animes
                    around the world.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="bg-secondary text-light"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => navigate("/accessories")}
              >
                <Card.Body>
                  <Card.Title>Accessories</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Accessories
                  </Card.Subtitle>
                  <Card.Text>
                    Here you can find all accessories from the most popular
                    animes around the world.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card
                className="bg-secondary text-light"
                style={{ width: "18rem", cursor: "pointer" }}
                onClick={() => navigate("/clothes")}
              >
                <Card.Body>
                  <Card.Title>Clothes</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Clothes
                  </Card.Subtitle>
                  <Card.Text>
                    Here you can find all clothes from the most popular animes
                    around the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>

          <ActionFigure />
          <About />
        </Container>
      </main>
    </div>
  );
};

export default Home;
