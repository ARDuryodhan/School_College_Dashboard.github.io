import React from "react";
import { Link } from "react-router-dom";

import brandLogo from "../assets/footer-logo.png";

function FooterPage() {
  return (
    <footer>
      <div className="footer-container ">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Schools in India</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">International Schools</Link>
              </li>
              <li>
                <Link to="/">Public Schools</Link>
              </li>
              <li>
                <Link to="/">Christian Schools</Link>
              </li>
              <li>
                <Link to="/">Boarding Schools</Link>
              </li>
              <li>
                <Link to="/">Army Schools</Link>
              </li>
              <li>
                <Link to="/">CBSE Schools</Link>
              </li>
              <li>
                <Link to="/">ICSE Schools</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>College in India</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Management Colleges</Link>
              </li>
              <li>
                <Link to="/">Engineering Colleges</Link>
              </li>
              <li>
                <Link to="/">Medical Colleges</Link>
              </li>
              <li>
                <Link to="/">Hotel Management Colleges</Link>
              </li>
              <li>
                <Link to="/">Arts Colleges</Link>
              </li>
              <li>
                <Link to="/">Law Colleges</Link>
              </li>
              <li>
                <Link to="/">Design Colleges</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>University in India</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Indian Institute of Science</Link>
              </li>
              <li>
                <Link to="/">Jawaharlal Nehru University</Link>
              </li>
              <li>
                <Link to="/">Delhi University</Link>
              </li>
              <li>
                <Link to="/">University of Hyderabad</Link>
              </li>
              <li>
                <Link to="/">University of Kerala</Link>
              </li>
              <li>
                <Link to="/">Andhra University</Link>
              </li>
              <li>
                <Link to="/">University of Mumbai</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Coachings in India</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Allen Career Institute</Link>
              </li>
              <li>
                <Link to="/">Aakash Institute</Link>
              </li>
              <li>
                <Link to="/">Resonance</Link>
              </li>
              <li>
                <Link to="/">Career Point</Link>
              </li>
              <li>
                <Link to="/">FIITJEE</Link>
              </li>
              <li>
                <Link to="/">Bansal Classes</Link>
              </li>
              <li>
                <Link to="/">Super30</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/">Top Courses</Link>
              </li>
              <li>
                <Link to="/">Entrance Exams</Link>
              </li>
              <li>
                <Link to="/">Education Loan </Link>
              </li>
              <li>
                <Link to="/">Live Applications</Link>
              </li>
              <li>
                <Link to="/">Articles</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Summer Programs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-row footer-social">
          <div className="footer-brandName">
            <img src={brandLogo} alt="logo" />
          </div>
          <div className="social_links">
            <ul>
              <h5>Follow us</h5>
              <li>
                <Link to="https://www.whatsapp.com/">
                  <i
                    className="fa-brands fa-whatsapp"
                    style={{ color: "#fff" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/">
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#fff" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/login">
                  <i
                    className="fa-brands fa-x-twitter"
                    style={{ color: "#fff" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#fff" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/">
                  <i
                    className="fa-brands fa-youtube"
                    style={{ color: "#fff" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/">
                  <i
                    className="fa-brands fa-linkedin"
                    style={{ color: "#fff" }}
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>
          <p>
            <Link>List your School</Link> &nbsp;|&nbsp; <Link>List your College</Link>
          </p>
        </div>
        <p>Copyright © 2023 Academy Hub Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterPage;
