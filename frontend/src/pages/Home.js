import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

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
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.absoluteanime.com/articles/an-otakus-guide-to-collecting-anime-merchandise%5B2%5D.webp"
                  alt="First slide"
                  height="400px"
                />

                <Carousel.Caption>
                  <h3>Accessories</h3>
                  <p>Accessories from different animes.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2022/02/Crystal-1.jpg?fit=1280%2C721&ssl=1"
                  alt="Second slide"
                  height="400px"
                />

                <Carousel.Caption>
                  <h3>Clothes</h3>
                  <p>Clothes products from different anime.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://lifekash.com/wp-content/uploads/2022/11/naruto-shippuuden-shonen-jump-monkey-d-luffy-son-goku-wallpaper-preview.jpg"
                  alt="Third slide"
                  height="400px"
                />

                <Carousel.Caption>
                  <h3>Popular Anime products</h3>
                  <p>All products from the most popular animes.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </section>
          <section className="my-5">
            <h2 className="text-center mb-4">About Albatsuki</h2>
            <Row>
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
            <Row>
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
            <Row>
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
