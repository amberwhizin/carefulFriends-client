import React from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <BootstrapNavbar className="color-nav" varient="light" sticky="top">
      <BootstrapNavbar.Brand href="/">Home</BootstrapNavbar.Brand>
      <Button id="logout-button" className="ml-auto" onClick={logout}>
        Logout
      </Button>
    </BootstrapNavbar>
  );
};
export default Navbar;
