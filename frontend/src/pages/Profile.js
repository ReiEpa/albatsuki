import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { deleteUserAction, updateProfile } from "../actions/userActions";
import Loading from "../components/Loading";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [navigate, userInfo]);

  const handleDeleteUser = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      dispatch(deleteUserAction(userInfo._id))
        .then(() => {
          // After successful deletion, clear user info and navigate to the home page
          dispatch({ type: "USER_LOGOUT" }); // Clear user info
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password }));
  };

  return (
    <Container>
      <Row className="profileContainer">
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            {loading && <Loading />}
            {success && (
              <ErrorMessage variant="success">
                Updated Successfully
              </ErrorMessage>
            )}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="success">
              Update
            </Button>
            <Button
              onClick={handleDeleteUser}
              variant="danger"
              className="mx-2"
            >
              Delete Account
            </Button>
          </Form>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Col>
      </Row>
    </Container>
  );
};

export default Profile;
