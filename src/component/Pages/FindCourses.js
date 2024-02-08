import React from "react";
import { Link } from "react-router-dom";

import coursesBanner from "../../assets/coursesBanner.jpg"


function FindCourses() {
  return (
    <div className="Coursepage_container" style={{ backgroundColor: "white" }}>
      <div className="findschoolBaner">
        <img style={{opacity:"1",borderRadius:"5px"}} src={coursesBanner} alt="coursesBanner" />
      </div>
      <h3>Best Courses in India</h3>
      <div className="cours-list">
        <ul>
          <li>
            <Link>Management</Link>
          </li>
          <li>
            <Link>Engineering</Link>
          </li>
          <li>
            <Link>Medical</Link>
          </li>
          <li>
            <Link>Hotel Management</Link>
          </li>
          <li>
            <Link>Arts</Link>
          </li>
          <li>
            <Link>Law</Link>
          </li>
          <li>
            <Link>Films Making & Journalism</Link>
          </li>
          <li>
            <Link>Computer Applications</Link>
          </li>
          <li>
            <Link>Animation</Link>
          </li>
          <li>
            <Link>Design</Link>
          </li>
          <li>
            <Link>Professional/Vocational</Link>
          </li>
          <li>
            <Link>Science</Link>
          </li>
          <li>
            <Link>Education</Link>
          </li>
          <li>
            <Link>Pharmacy</Link>
          </li>
          <li>
            <Link>Courses after 12th</Link>
          </li>
          <li>
            <Link>Other</Link>
          </li>
          <li>
            <Link>Aviation</Link>
          </li>
          <li>
            <Link>Commerce</Link>
          </li>
          <li>
            <Link>Dental</Link>
          </li>
          <li>
            <Link>Architecture</Link>
          </li>
          <li>
            <Link>Agriculture</Link>
          </li>
          <li>
            <Link>Veterinary Science</Link>
          </li>
          <li>
            <Link>Paramedical</Link>
          </li>
          <li>
            <Link>Diploma</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FindCourses;
