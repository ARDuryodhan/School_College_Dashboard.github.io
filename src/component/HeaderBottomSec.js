import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import ManagmentMenu from "./ManagmentMenu";
import EngineeringMenu from "./EnegineeringMenu";
import MedicalMenu from "./Medical";
import ArtsMenu from "./ArtsMenu";
import LawMenu from "./LawMenu";
import PharmacyMenu from "./PharmacyMenu";
import DesignMenu from "./DesignMenu";
import OtherMenu from "./OtherMenu";
import brandName from "../assets/brandName.png";

function HeaderBottomSec() {
  return (
    <div className="headerBottom_container">
      <div className="brand_name">
        <Link to="/">
          <img src={brandName} alt="brandlogo" />
        </Link>
      </div>
      <div className="bottom_menu">
        <Navbar expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Link to="/management">
                
                  <ManagmentMenu />
                
              </Link>
              <Link to="/engineering">
                
                  <EngineeringMenu />
                
              </Link>
              <Link to="/medical">
                
                  <MedicalMenu />
                
              </Link>
              <Link to="/arts">
                
                  <ArtsMenu />
                
              </Link>
              <Link to="/law">
                
                  <LawMenu />
                
              </Link>
              <Link to="/phamacy">
                
                  <PharmacyMenu />
                
              </Link>
              <Link to="/design">
                
                  <DesignMenu />
                
              </Link>
              <Link to="/other">
                
                  <OtherMenu />
                
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderBottomSec;
