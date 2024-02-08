import React, { useState } from "react";

// import ManagementList from "./ManagementList.json";
import { Link } from "react-router-dom";

function OtherMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="other_container container-fluid">
      <div className="menuBtn">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          Other
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
            <h3>ba colleges</h3>
            <h4>browse by courses</h4>
            <ul>
              <li>
                <Link to="/">general</Link>
              </li>
              <li>
                <Link to="/">economics</Link>
              </li>
              <li>
                <Link to="/">english</Link>
              </li>
              <li>
                <Link to="/">hindi</Link>
              </li>
              <li>
                <Link to="/">history</Link>
              </li>
              <li>
                <Link to="/">political science</Link>
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
                <Link to="/">chennai</Link>
              </li>
              <li>
                <Link to="/">pondicherry</Link>
              </li>
            </ul>
          </div>
          <div className="menuItems">
            <h3>ma colleges</h3>
            <h4>browse by courses</h4>
            <ul>
              <li>
                <Link to="/">anthropology</Link>
              </li>
              <li>
                <Link to="/">bengali</Link>
              </li>
              <li>
                <Link to="/">marathi</Link>
              </li>
              <li>
                <Link to="/">religious studies</Link>
              </li>
              <li>
                <Link to="/">social wrok</Link>
              </li>
              <li>
                <Link to="/">telugu</Link>
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
                <Link to="/">mumbai</Link>
              </li>
              <li>
                <Link to="/">coimvatore</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtherMenu;
