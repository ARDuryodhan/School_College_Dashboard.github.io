import React from "react";

import findschoolBanner from "../../assets/findschl.png";
function findschool() {
  return (
    <div className="Findpage_container" >
      <div className="findschoolBaner">
        <img src={findschoolBanner} alt="findschool" />
      </div>
      <div className="findschlTitle">
        <h1>School In India</h1>
        <p>Find a best School</p>
      </div>
      <div className="findschl_statecard"></div>
      <h3>Browse by Category</h3>
      <div className="findschl_cards">
        <div className="row">
          <h4>Public School</h4>
          <div className="row cards">
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i>  Braeside School, Ooty</li>
                <li><i className="fa-solid fa-check"></i>  Delhi world public school</li>
                <li><i className="fa-solid fa-check"></i>  Satluj Public School, Haryana</li>
                <li><i className="fa-solid fa-check"></i>  Allenhouse Public School, Kanpur</li>
                <li><i className="fa-solid fa-check"></i>  Heritage Public School, Uttar Pradesh</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i>  Salwan Public School, Delhi</li>
                <li><i className="fa-solid fa-check"></i>  Delhi Public School, Gujrat</li>
                <li><i className="fa-solid fa-check"></i>  Bloom Public School, Delhi</li>
                <li><i className="fa-solid fa-check"></i>  D.A.V. Public School, Bihar</li>
                <li><i className="fa-solid fa-check"></i>  Gautam Public Sr. Sec. School, Uttar Prdesh</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <h4>international school</h4>
          <div className="row cards">
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i> Ecole Globale International Girls’ School, Dehradun</li>
                <li><i className="fa-solid fa-check"></i> The Banyan Tree IB World School, Delhi</li>
                <li><i className="fa-solid fa-check"></i> Rustomjee Cambridge International School, Mumbai</li>
                <li><i className="fa-solid fa-check"></i> Ecole Mondiale World School Mumbai</li>
                <li><i className="fa-solid fa-check"></i> Victorious Kids Educares, Pune</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i> Dr Pillai Global Academy, Mumbai</li>
                <li><i className="fa-solid fa-check"></i> The British School, Delhi</li>
                <li><i className="fa-solid fa-check"></i> Manav Rachna International School, Delhi</li>
                <li><i className="fa-solid fa-check"></i> Pathways School, Noida</li>
                <li><i className="fa-solid fa-check"></i> Indus International School, Pune</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <h4>boarding School</h4>
          <div className="row cards">
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i> Tula’s International School Dehradun</li>
                <li><i className="fa-solid fa-check"></i> The Doon School Dehradun</li>
                <li><i className="fa-solid fa-check"></i> JAIN International Residential School Bangalore</li>
                <li><i className="fa-solid fa-check"></i> Welham Girls School Dehradun</li>
                <li><i className="fa-solid fa-check"></i> Rishi Valley School Chittoor</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i> The Lawrence School Sanawar</li>
                <li><i className="fa-solid fa-check"></i> UWC Mahindra College Pune</li>
                <li><i className="fa-solid fa-check"></i> Woodstock School Mussoorie</li>
                <li><i className="fa-solid fa-check"></i> Scindia Kanya Vidyalaya Gwalior</li>
                <li><i className="fa-solid fa-check"></i> Kodaikanal International School Tamil Nadu</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <h4>Army School</h4>
          <div className="row cards">
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i> APS Dhaula Kuan (DK), New Delhi</li>
                <li><i className="fa-solid fa-check"></i> Army Public School Nehru Road (LAPS), Lucknow</li>
                <li><i className="fa-solid fa-check"></i> Army Public School, Dagshai</li>
                <li><i className="fa-solid fa-check"></i> Army Public School , Pune</li>
                <li><i className="fa-solid fa-check"></i> Army Public School, Bangalore</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li><i className="fa-solid fa-check"></i> Army Public School, Narangi</li>
                <li><i className="fa-solid fa-check"></i> Army Public School, Shankar Vihar, Delhi</li>
                <li><i className="fa-solid fa-check"></i> Army Public School, Jaipur</li>
                <li><i className="fa-solid fa-check"></i> Army Public School, Chandimandir</li>
                <li><i className="fa-solid fa-check"></i> Army Public School, Delhi Cantt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default findschool;
