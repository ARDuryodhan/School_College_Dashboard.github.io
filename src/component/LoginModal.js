import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="login_container">
      <Link onClick={handleShow}>
        <span className="fa-solid fa-user">&nbsp;</span>
        login
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontWeight:"bold"}}>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body className="loginBtn">
          <button onClick={handleClose}><Link to='/loginForm'>SCHOOL STUDENT</Link></button>
          <button onClick={handleClose}><Link to='/loginForm'>COLLGE STUDENT</Link></button>
          <button onClick={handleClose}><Link to='/loginForm'>UNIVERSITY STUDENT</Link></button>
          <button onClick={handleClose}><Link to='/loginForm'>CAOCHING STUDENT</Link></button>
          <button className="w-100"><Link to='/loginForm'>SCHOOL / COLLEGE</Link></button>
        </Modal.Body>
        
      </Modal>
    </div>
  );
}

export default LoginModal;