import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doLogout } from "../../auth";

function DashboardSidebar({ handleSectionChange }) {
  const [isCollapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    doLogout();
    navigate("/");
  };

  return (
    <div className={`sidebar_container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="menu_icon" onClick={handleToggle}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="sidebar_content">
        <Link to="/my-profile">
          <div className="sidebar_item" title="profile">
            <i className="fa-solid fa-circle-user"></i>
            {!isCollapsed && <span>My Profile</span>}
          </div>
        </Link>
        <Link to="/uploadDoc">
          <div className="sidebar_item" title="Upload Documents">
            <i className="fa-solid fa-file"></i>
            {!isCollapsed && <span>Upload Documents</span>}
          </div>
        </Link>
        <Link to="/my-query">
          <div className="sidebar_item" title="My Query">
            <i className="fa-solid fa-circle-question"></i>
            {!isCollapsed && <span>My Query</span>}
          </div>
        </Link>
        <Link to="/my-review">
          <div className="sidebar_item" title="My Review">
            <i className="fa-solid fa-star"></i>
            {!isCollapsed && <span>My Review</span>}
          </div>
        </Link>
        <Link to="/changePassword">
          <div className="sidebar_item" title="Change Password">
            <i className="fa-solid fa-lock"></i>
            {!isCollapsed && <span>Change Password</span>}
          </div>
        </Link>
        <Link to="/bankDetails">
          <div className="sidebar_item" title="Bank Details">
            <i className="fa-solid fa-building-columns"></i>
            {!isCollapsed && <span>Bank Details</span>}
          </div>
        </Link>

        <Link onClick={handleLogout}>
          <div className="sidebar_item" title="Logout">
            <i className="fa-solid fa-right-from-bracket"></i>
            {!isCollapsed && <span>Logout</span>}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashboardSidebar;
