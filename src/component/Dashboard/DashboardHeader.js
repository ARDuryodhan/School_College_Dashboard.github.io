import React from "react";
import { Link } from "react-router-dom";
// import DashboardSidebar from "./DashboardSidebar";

function DashboardHeader() {
  
  return (
    <div className="dashboard_header_container">
      <div className="dashboardTop_header">
        <nav className="navbar ">
          <Link className="navbar-brand" to="" style={{paddingLeft:"1rem", fontWeight:"bold", color:"gray"}}>
            DASHBOARD
          </Link>
          
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/#">
                  Username
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
        
      </div>
    </div>
  );
}

export default DashboardHeader;
