import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

let PrevYPosition: GLfloat;
let CurrentYPosition: GLfloat;

function NavBar() {
  const [navbar, setNavbar] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (PrevYPosition != scrollY) {
        PrevYPosition = CurrentYPosition;
      }
      CurrentYPosition = scrollY;
      setNavbar(PrevYPosition >= CurrentYPosition); // Adjust the threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Navbar
      bg="light-nav"
      data-bs-theme="light"
      fixed="top"
      className={`navbar ${navbar ? "show" : "hide"}`}
      id="navbar"
    >
      <Navbar.Brand href="#home">
        <img
          src="./src/images/logo.png"
          style={{
            maxWidth: "100%",
            maxHeight: "40px",
            marginLeft: "3rem",
            marginRight: "3rem",
            scale: "3",
          }} // Adjust maxHeight as needed
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="navigation">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#showcase">Showcase</Nav.Link>
        <Nav.Link href="#prices">Prices</Nav.Link>
        {/* <Nav.Link href="#testimonials">Testimonials</Nav.Link> */}
        <Nav.Link href="#contact">Contact</Nav.Link>
        <img src="../src/images/logo.png"></img>
        <img src="./src/images/logo.png"></img>
        <img src="src/images/logo.png"></img>
        <img src="../images/logo.png"></img>
        <img src="./images/logo.png"></img>
        <img src="/images/logo.png"></img>
        <img src="/logo.png"></img>
        <img src="./logo.png"></img>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
