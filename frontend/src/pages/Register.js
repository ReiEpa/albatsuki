import React, { useEffect, useState } from "react";
import albatsuki from "../assets/Albatsuki.jpg";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/products");
    }
  }, [navigate, userInfo]);

  return (
    <Container style={{ height: "85vh" }}>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <Row style={{ height: "100%" }} className="align-items-center">
        <Col md={6}>
          <img src={albatsuki} alt="Logo" />
        </Col>
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter an unique email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Register
            </Button>
          </Form>
          <Row className="mt-3">
            <Col>
              Already have an account? /
              <span
                className="text-success login-register"
                onClick={() => navigate("/login")}
              >
                {" "}
                Sign In
              </span>
              .
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
