import React from "react";
import StateList from "../StateList";
import { Link } from "react-router-dom";

import PharmaCourseList from "../SelectCourseList/PharmaCourseList";

/*logo img*/
import artimg1 from "../../assets/pharamacyimg1.jpeg";
import artimg2 from "../../assets/pharamacyimg2.jpeg";
import artimg3 from "../../assets/pharamacyimg3.png";
import artimg4 from "../../assets/pharamacyimg4.jpeg";
import artimg5 from "../../assets/pharamacyimg5.jpg";
import artimg6 from "../../assets/pharamacyimg6.jpg";

/*clg-img*/
import pharmaclgimg1 from "../../assets/pharmaclgimg1.jpg";
import pharmaclgimg2 from "../../assets/pharmaclgimg2.png";
import pharmaclgimg3 from "../../assets/pharmaclgimg3.jpg";
import pharmaclgimg4 from "../../assets/pharmaclgimg4.png";
import pharmaclgimg5 from "../../assets/pharmaclgimg5.png";
import pharmaclgimg6 from "../../assets/pharmaclgimg6.png";

function EngnrPage() {
  return (
    <>
      <div className="engnrPage_container">
        <div className="engnr_section">
          <div className="right_section">
            <h2>Refine Results</h2>
            <StateList />
            <PharmaCourseList />
          </div>

          <div className="left_section">
            <h5>Engineering College Of India</h5>
            <hr />
            <h6>Best Engineering College Of India</h6>
            <div className="engnrClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={artimg1} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>desh bhagat university </h3>
                    <small>
                      Location: Fatehgarh Sahib , Punjab | Website:
                      http://deshbhagatuniversity.in/ | Estd:
                      <span>in 2012 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>224
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 88919
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>Write a
                        review
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clg_bottom_right ">
                  <div className="university_detail ">
                    <Link to="/">
                      <img src={pharmaclgimg1} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.A,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 23,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.-LL.B.(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 49,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.COM,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 43,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.ED,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 49,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.LIB,<span> 1 Year</span>
                            <small className="fees">
                              (Fee: Rs. 39,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li className="visit_link">
                          <Link to="/">View All Courses</Link>
                        </li>
                      </ul>
                      <div className="fullcourse">
                        <ul>
                          <li>Facilities:</li>
                          <i className="fa-solid fa-bed"></i>
                          <i className="fa-solid fa-laptop-medical"></i>
                          <i className="fa-solid fa-chalkboard-user"></i>
                          <i className="fa-solid fa-globe"></i>
                          <i className="fa-solid fa-medal"></i>
                          <i className="fa-solid fa-swatchbook"></i>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="engnrClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={artimg2} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Om Sterling Global University </h3>
                    <small>
                      Location: Hisar , Haryana | Website:
                      https://www.osgu.ac.in/ | Estd:<span>in 2019 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i> 213
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 40800
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>Write a
                        review
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clg_botto_right">
                  <div className="university_detail">
                    <Link to="/">
                      <img src={pharmaclgimg2} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B. PLANNING,<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 55,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.COM,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.COM (HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 45,000 /Yr.)
                            </small>
                          </p>
                        </li>

                        <li className="visit_link">
                          <Link to="/">View All Courses</Link>
                        </li>
                      </ul>
                      <div className="fullcourse">
                        <ul>
                          <li>Facilities:</li>
                          <i className="fa-solid fa-bed"></i>
                          <i className="fa-solid fa-laptop-medical"></i>
                          <i className="fa-solid fa-chalkboard-user"></i>
                          <i className="fa-solid fa-globe"></i>
                          <i className="fa-solid fa-medal"></i>
                          <i className="fa-solid fa-swatchbook"></i>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="engnrClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={artimg3} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Bihar College of Pharmacy</h3>
                    <small>
                      Location: Patna , Bihar | Website:
                      www.biharcollegeofpharmacy.com | Estd:
                      <span>in 1979 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>214
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 1584
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>Write a
                        review
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clg_botto_right">
                  <div className="university_detail">
                    <Link to="/">
                      <img src={pharmaclgimg3} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.PHARM,<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,00,000/- /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            M.PHARM,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,25,000/- /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            MASTER OF PHARMACY,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 43,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.ED,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 49,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.LIB,<span> 1 Year</span>
                            <small className="fees">
                              (Fee: Rs. 39,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li className="visit_link">
                          <Link to="/">View All Courses</Link>
                        </li>
                      </ul>
                      <div className="fullcourse">
                        <ul>
                          <li>Facilities:</li>
                          <i className="fa-solid fa-bed"></i>
                          <i className="fa-solid fa-laptop-medical"></i>
                          <i className="fa-solid fa-chalkboard-user"></i>
                          <i className="fa-solid fa-globe"></i>
                          <i className="fa-solid fa-medal"></i>
                          <i className="fa-solid fa-swatchbook"></i>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="engnrClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={artimg4} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Gayatri College of Pharmacy </h3>
                    <small>
                      Location: Sambalpur , Orissa | Website:
                      http://www.gayatripharma.org/ | Estd:<span>in 1986 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>227
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 1014
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>Write a
                        review
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clg_botto_right">
                  <div className="university_detail">
                    <Link to="/">
                      <img src={pharmaclgimg4} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            M.PHARM,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 90,000 /Yr.)
                            </small>
                          </p>
                        </li>

                        <li className="visit_link">
                          <Link to="/">View All Courses</Link>
                        </li>
                      </ul>
                      <div className="fullcourse">
                        <ul>
                          <li>Facilities:</li>
                          <i className="fa-solid fa-bed"></i>
                          <i className="fa-solid fa-laptop-medical"></i>
                          <i className="fa-solid fa-chalkboard-user"></i>
                          <i className="fa-solid fa-globe"></i>
                          <i className="fa-solid fa-medal"></i>
                          <i className="fa-solid fa-swatchbook"></i>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="engnrClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={artimg5} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>ERA University </h3>
                    <small>
                      Location: Lucknow , Uttar Pradesh | Website:
                      https://www.erauniversity.in/ | Estd:<span>in 2016 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>289
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 5165
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>Write a
                        review
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clg_botto_right">
                  <div className="university_detail">
                    <Link to="/">
                      <img src={pharmaclgimg5} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.PHARM,<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 130000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.SC,<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 120000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            BCA,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 50,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            DIPLOMA,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 150000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            M.SC,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 90,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li className="visit_link">
                          <Link to="/">View All Courses</Link>
                        </li>
                      </ul>
                      <div className="fullcourse">
                        <ul>
                          <li>Facilities:</li>
                          <i className="fa-solid fa-bed"></i>
                          <i className="fa-solid fa-laptop-medical"></i>
                          <i className="fa-solid fa-chalkboard-user"></i>
                          <i className="fa-solid fa-globe"></i>
                          <i className="fa-solid fa-medal"></i>
                          <i className="fa-solid fa-swatchbook"></i>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="engnrClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={artimg6} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>desh bhagat university </h3>
                    <small>
                      Location: Mohali , Punjab | Website:
                      http://www.niper.ac/in/welcome.html| Estd:
                      <span>in 2007</span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>232
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 820
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-regular fa-pen-to-square"></i>Write a
                        review7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clg_botto_right">
                  <div className="university_detail">
                    <Link to="/">
                      <img src={pharmaclgimg6} alt="my_img" />
                    </Link>
                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            M.PHARM,<span> 2 Year</span>
                            <small className="fees">
                              (Fee: Rs. 47,000 /Yr.)
                            </small>
                          </p>
                        </li>

                        <li className="visit_link">
                          <Link to="/">View All Courses</Link>
                        </li>
                      </ul>
                      <div className="fullcourse">
                        <ul>
                          <li>Facilities:</li>
                          <i className="fa-solid fa-bed"></i>
                          <i className="fa-solid fa-laptop-medical"></i>
                          <i className="fa-solid fa-chalkboard-user"></i>
                          <i className="fa-solid fa-globe"></i>
                          <i className="fa-solid fa-medal"></i>
                          <i className="fa-solid fa-swatchbook"></i>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngnrPage;
