import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <>
      <section className="my-5 about-section">
        <h2 className="text-center mb-4">About Albatsuki</h2>
        <Row className="about-albatsuki">
          <Col md={6} className="text-center">
            <Image
              src="https://img.freepik.com/premium-photo/anime-girl-watching-sunset-3d-illustration_717906-1411.jpg?w=2000"
              rounded
              fluid
              className="about-image"
            />
          </Col>
          <Col>
            <p>
              Albatsuki is a leading online retailer of anime clothes and
              accessories in Albania. We offer a wide range of products inspired
              by your favorite anime series, including t-shirts, hoodies,
              figurines, keychains, and more.
            </p>
            <p>
              Explore our collection and find the perfect merchandise to show
              off your love for anime.
            </p>
          </Col>
        </Row>
      </section>

      <section className="my-5 why-choose-section">
        <h2 className="text-center mb-4">Why Choose Albatsuki?</h2>
        <Row className="why-choose">
          <Col md={6} className="text-center">
            <Image
              src="https://images.hdqwalls.com/wallpapers/anime-girl-watching-sunset-4k-sz.jpg"
              rounded
              fluid
              className="about-image"
              y
            />
          </Col>
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

      <section className="my-5 contact-section">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row className="contact-us">
          <Col md={6} className="text-center">
            <Image
              src="https://artfiles.alphacoders.com/159/159848.png"
              rounded
              fluid
              className="about-image"
            />
          </Col>
          <Col>
            <p>
              If you have any questions or inquiries, feel free to contact us:
            </p>
            <ul>
              <li>Email: info@albatsuki.com</li>
              <li>Phone: +355 123 456 789</li>
              <li>Address: 123 Anime Street, Tirana, Albania</li>
            </ul>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
