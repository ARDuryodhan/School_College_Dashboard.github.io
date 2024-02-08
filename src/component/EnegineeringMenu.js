import React, { useState } from "react";

// import ManagementList from "./ManagementList.json";
import { Link } from "react-router-dom";

function EngineeringMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="eng_container container-fluid">
      <div className="menuBtn">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          Engineering
          {!isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown_Menu">
          <div className="menuItems">
            <h3>be/b. tech colleges</h3>
            <h4>browse by courses</h4>
            <ul>
              <li>
                <Link to="/">civil engineering</Link>
              </li>
              <li>
                <Link to="/">computer science engineering</Link>
              </li>
              <li>
                <Link to="/">electrical & electronics engineering</Link>
              </li>
              <li>
                <Link to="/">electronics & communication engineering</Link>
              </li>
              <li>
                <Link to="/">information technology</Link>
              </li>
              <li>
                <Link to="/">mechanical engineering</Link>
              </li>
            </ul>
          </div>
          <div className="menuItems">
            <h3>
              <Link>see all colleges</Link>
            </h3>
            <h4>state wise colleges</h4>
            <ul>
              <li>
                <Link to="/">tamil nadu</Link>
              </li>
              <li>
                <Link to="/">uttar pradesh</Link>
              </li>
              <li>
                <Link to="/">karnataka</Link>
              </li>
              <li>
                <Link to="/">maharashtra</Link>
              </li>
              <li>
                <Link to="/">haryana</Link>
              </li>
              <li>
                <Link to="/">andhra pradesh</Link>
              </li>
              <li>
                <Link to="/">telangana</Link>
              </li>
            </ul>
          </div>
          <div className="menuItems">
            <h3>&nbsp;</h3>
            <h4>city wise colleges</h4>
            <ul>
              <li>
                <Link to="/">bangalore</Link>
              </li>
              <li>
                <Link to="/">mumbai</Link>
              </li>
              <li>
                <Link to="/">pune</Link>
              </li>
              <li>
                <Link to="/">chennai</Link>
              </li>
              <li>
                <Link to="/">jaipur</Link>
              </li>
              <li>
                <Link to="/">jaipur</Link>
              </li>
              <li>
                <Link to="/">hydrabad</Link>
              </li>
            </ul>
          </div>
          <div className="menuItems">
            <h3>me/m.tech colleges</h3>
            <h4>browse by courses</h4>
            <ul>
              <li>
                <Link to="/">control engineering</Link>
              </li>
              <li>
                <Link to="/">design engineering</Link>
              </li>
              <li>
                <Link to="/">industrial engineering </Link>
              </li>
              <li>
                <Link to="/">software engineering </Link>
              </li>
              <li>
                <Link to="/">nanotechnology</Link>
              </li>
              <li>
                <Link to="/">teallurgical engineering </Link>
              </li>
            </ul>
          </div>
          <div className="menuItems">
            <h3>
              <Link>see all colleges</Link>
            </h3>
            <h4>state wise colleges</h4>
            <ul>
              <li>
                <Link to="/">uttar pradesh</Link>
              </li>
              <li>
                <Link to="/">tamil nadu</Link>
              </li>
              <li>
                <Link to="/">maharashtra</Link>
              </li>
              <li>
                <Link to="/">karnataka</Link>
              </li>
              <li>
                <Link to="/">telangana</Link>
              </li>
              <li>
                <Link to="/">andhra pradesh</Link>
              </li>
            </ul>
          </div>
          <div className="menuItems">
            <h3>&nbsp;</h3>
            <h4>city wise colleges</h4>
            <ul>
              <li>
                <Link to="/">banglasesh</Link>
              </li>
              <li>
                <Link to="/">pune</Link>
              </li>
              <li>
                <Link to="/">hydrabad</Link>
              </li>
              <li>
                <Link to="/">chennai</Link>
              </li>
              <li>
                <Link to="/">rangareddi</Link>
              </li>
              <li>
                <Link to="/">bhopal</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default EngineeringMenu;
