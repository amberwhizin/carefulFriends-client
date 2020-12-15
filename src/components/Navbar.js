import React from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";

const Navbar = () => {
  return (
    <BootstrapNavbar className="navbar" bg="light" sticky="top">
      <BootstrapNavbar.Brand href="/">Home</BootstrapNavbar.Brand>
    </BootstrapNavbar>
  );
};
export default Navbar;
