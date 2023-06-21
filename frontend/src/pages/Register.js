import React from "react";
import albatsuki from "../assets/Albatsuki.jpg";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Container style={{ height: "85vh" }}>
      <Row style={{ height: "100%" }} className="align-items-center">
        <Col md={6}>
          <img src={albatsuki} alt="Logo" />
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Create Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter a Unique Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="danger" type="submit">
              Register
            </Button>
          </Form>
          <Row className="mt-3">
            <Col>
              Already have an account? /
              <span className="text-success login-register"> Sign In</span>.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
