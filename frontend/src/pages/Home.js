import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const Home = () => {
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
          <section className="my-5">
            <h2 className="text-center mb-4">About Albatsuki</h2>
            <Row className="about-albatsuki">
              <Col>
                <p>
                  Albatsuki is a leading online retailer of anime clothes and
                  accessories in Albania. We offer a wide range of products
                  inspired by your favorite anime series, including t-shirts,
                  hoodies, figurines, keychains, and more.
                </p>
                <p>
                  Explore our collection and find the perfect merchandise to
                  show off your love for anime.
                </p>
              </Col>
            </Row>
          </section>
          <section className="my-5">
            <h2 className="text-center mb-4">Why Choose Albatsuki?</h2>
            <Row className="why-choose">
              <Col>
                <ul>
                  <li>High-quality products with authentic anime designs</li>
                  <li>Fast and reliable shipping</li>
                  <li>Secure payment options</li>
                  <li>Responsive customer support</li>
                </ul>
              </Col>
            </Row>
          </section>
          <section className="my-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row className="contact-us">
              <Col>
                <p>
                  If you have any questions or inquiries, feel free to contact
                  us:
                </p>
                <ul>
                  <li>Email: info@albatsuki.com</li>
                  <li>Phone: +355 123 456 789</li>
                  <li>Address: 123 Anime Street, Tirana, Albania</li>
                </ul>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
      <footer className="text-center py-3">
        <p>&copy; 2023 Albatsuki. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
