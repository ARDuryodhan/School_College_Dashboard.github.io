import React from "react";

import coachingbanner from "../../assets/coachingBanner.jpg";
function findschool() {
  return (
    <div className="Findpage_container">
      <div className="findschoolBaner">
        <img src={coachingbanner} alt="findschool" />
      </div>
      <div className="findschlTitle">
        {/* <h1>School In India</h1> */}
        <p style={{textShadow:"2px 2px 2px whitesmoke"}}>Find a best Coaching</p>
      </div>
      <div className="findschl_statecard"></div>
      <h3>Browse by Category</h3>
      <div className="findschl_cards">
        <div className="row">
          <h4>COACHING</h4>
          <div className="row cards">
            <div className="col">
              <ul>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Allen Career Institute
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Aakash Institute
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Resonance
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Career Point
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  FIITJEE
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Vibrant Academy
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Bansal Classes
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Bansal Classes
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Motion Kota
                </li>
                <li>
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Motion Kota
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default findschool;
