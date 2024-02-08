import React from "react";
import universitybanner from "../../assets/universitybanner.jpg";

function findcollege() {
  return (
    <div className="Findpage_container" style={{ backgroundColor: "white" }}>
      <div className="blackbox">
        <div className="findschoolBaner">
          <img src={universitybanner} alt="findschool" />
        </div>
      </div>
      <div className="findclgTitle">
        <p style={{ color: "white", textShadow: "1px 1px 2px black" }}>
          Find a best Universities
        </p>
      </div>
      <div className="findschl_statecard"></div>
      <h3>Browse by Category</h3>
      <div className="findschl_cards">
        <div className="row">
          <h4>Top University by Course Category</h4>
          <div className="row cards">
            <div className="col">
              <ul>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Indian Institute of Science (IISc), Bangalore
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Jawaharlal Nehru University (JNU), New Delhi
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Jamia Milia Islamia, New Delhi
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Jadavpur University, Kolkata
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Banaras Hindu University (BHU), Varanasi
                </li>

                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Manipal Academy of Higher Education-Manipal
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Amrita Vishwa Vidyapeetham, Coimbatore
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Vellore Institute of Technology, Tamil Nadu
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  University of Hyderabad (UoH), Hyderabad
                </li>
                <li className="siw1">
                  <i className="fa-solid fa-check">&nbsp;</i>
                  Calcutta University, Kolkata
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default findcollege;
