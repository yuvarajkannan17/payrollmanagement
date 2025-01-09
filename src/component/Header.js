import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";


const Header = () => {
  return (
    <Navbar  style={{ backgroundColor: "#1C2FBA" }} variant="dark" expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/assets/chiselonlogo.png"
            alt="Logo"
            className="header-logo"
          />
          <span className="header-title">Payroll Management System</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/employee-login" className="nav-link">
              Employee Login
            </NavLink>
            <NavLink to="/hr-login" className="nav-link">
              HR Login
            </NavLink>
            <NavLink to="/superadmin-login" className="nav-link">
              SuperAdmin Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
