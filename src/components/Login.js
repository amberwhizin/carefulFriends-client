import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const LoginUser = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://carefulfriends-api.herokuapp.com/activities",
        { name: user, password },
        {
          withCredentials: true,
          credentials: "same-origin",
          headers: {
            "Access-Control-Allow-Origin":
              "https://carefulfriends-api.herokuapp.com",
            "Access-Control-Allow-Header":
              "https://carefulfriends-api.herokuapp.com",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="enter-page">
      <Form onSubmit={LoginUser}>
        <p>Username</p>
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
        </Form.Label>
        <InputGroup className="mb-2 mr-sm-2">
          <FormControl
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
        </InputGroup>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Col>
            <p className="enter-text">Password</p>
            <FormControl
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 3 }}>
            <Button type="submit" className="enter-button" onClick={LoginUser}>
              Sign In
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <p>Don't have an account?</p>
      <Link to="/signup">
        <Button>Create New User</Button>
      </Link>
    </div>
  );
};
export default Login;
