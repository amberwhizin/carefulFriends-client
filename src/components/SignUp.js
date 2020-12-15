import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = (e) => {
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
      .then((res) => {
        res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Form onSubmit={LoginUser}>
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
            <Button type="submit">Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
      {/* come back to this!!! */}
      <Button onClick={LoginUser}>Create New User</Button>
    </div>
  );
};
export default Login;
