import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const SignUpUser = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      body: JSON.stringify({
        name: user,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Form onSubmit={SignUpUser}>
        <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
          Username
        </Form.Label>
        <InputGroup className="mb-2 mr-sm-2">
          <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inlineFormInputGroupUsername2"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
        </InputGroup>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          {/* <Form.Label column sm={2}>
            Password
          </Form.Label> */}
          <Col sm={4}>
            <FormControl
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={SignUpUser}>
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <p>Already have an account?</p>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};
export default SignUp;
