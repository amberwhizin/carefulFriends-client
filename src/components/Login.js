import React, { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("in the login room");
    getLogin();
  }, []);

  const getLogin = (setError) => {
    fetch("/user", {
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
        setError("something wrong with response");
      })
      .catch((error) => {
        console.log(error);
        setError("something wrong with response");
      });
  };
  return <div>hi</div>;
};
export default Login;
