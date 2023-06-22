import React, { useEffect, useState } from "react";
import albatsuki from "../assets/Albatsuki.jpg";
import Form from "react-bootstrap/Form";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/products");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
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
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
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
            <Button type="submit" variant="danger">
              Login
            </Button>
          </Form>
          <Row className="mt-3">
            <Col>
              Don't have an account? /
              <span
                className="text-success login-register"
                onClick={() => navigate("/register")}
              >
                {" "}
                Register here
              </span>
              .
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
