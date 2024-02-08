import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { currentUser, doLogout, isLoggedIn } from "../auth";

function HeaderTopSec() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const currentUserData = currentUser();

  const handleLogout = () => {
    // Perform logout actions
    doLogout();
    setLoggedIn(false);
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="headerTop_container">
      <Navbar expand="lg" style={{ alignItems: "center" }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="top_menu">
              <Link to="/">
                <i
                  className="fa-solid fa-house"
                  style={{ color: "#ffffff" }}
                ></i>
              </Link>
              <Link to="/findschool">find schools</Link>
              <Link to="/findcolleges">find colleges</Link>
              <Link to="/finduniversity">find University</Link>
              <Link to="/findcoachings">find coachings</Link>
              <Link to="/findcourses">find courses</Link>
              <Link to="/exams">exams</Link>
              <Link to="/freeCounselling">Get Free Counselling</Link>
              <Link to="/addschool+college">add school/college/...</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <NavDropdown
        title={<i className="fa-solid fa-id-card-clip idTitle"></i>}
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item style={{ textAlign: "center" }}>
          {loggedIn ? (
            <span>
              Hi ! <span style={{textTransform:"uppercase"}}>{currentUserData.sub}</span>
            </span>
          ) : (
            <LoginModal />
          )}
        </NavDropdown.Item>
        <NavDropdown.Item >
          <Link to="/myProfile">DASHBOARD</Link>
        </NavDropdown.Item>
        <NavDropdown.Item >
          {loggedIn ? (
            <span onClick={handleLogout}>SIGN-OUT</span>
          ) : (
            <Link to="/registration">SIGN-UP</Link>
          )}
        </NavDropdown.Item>
        
      </NavDropdown>
    </div>
  );
}

export default HeaderTopSec;
