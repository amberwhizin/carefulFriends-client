import React from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    axios
      .delete("https://carefulfriends-api.herokuapp.com/logout")
      .then(() => {
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
