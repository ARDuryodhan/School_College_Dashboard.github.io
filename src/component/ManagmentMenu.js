import React, { useState } from "react";

// import ManagementList from "./ManagementList.json";
import { Link } from "react-router-dom";

function ManagmentMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mngt_container container-fluid">
      <div className="menuBtn">
        <button onClick={() => setIsOpen((prev) => !prev)}>
          MANAGEMENT
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
            <h3>bba/bbm colleges</h3>
            <h4>browse by courses</h4>
            <ul>
              <li>
                <Link to="/">general</Link>
              </li>
              <li>
                <Link to="/">banking</Link>
              </li>
              <li>
                <Link to="/">business administration</Link>
              </li>
              <li>
                <Link to="/">corporate law</Link>
              </li>
              <li>
                <Link to="/">Design management</Link>
              </li>
              <li>
                <Link to="/">tourism management</Link>
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
                <Link to="/">panjab</Link>
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
                <Link to="/">kolkata</Link>
              </li>
            </ul>
          </div>
          
          <div className="menuItems">
            <h3>mba/pgdm colleges</h3>
            <h4>browse by courses</h4>
            <ul>
              <li>
                <Link to="/">finance</Link>
              </li>
              <li>
                <Link to="/">hospitality management</Link>
              </li>
              <li>
                <Link to="/">human resources management</Link>
              </li>
              <li>
                <Link to="/">information technologies</Link>
              </li>
              <li>
                <Link to="/">marketing</Link>
              </li>
              <li>
                <Link to="/">opration management</Link>
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

export default ManagmentMenu;
