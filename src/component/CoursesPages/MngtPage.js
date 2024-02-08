import React from "react";

import StateList from "../StateList";
import { Link } from "react-router-dom";

import PharmaCourseList from "../SelectCourseList/PharmaCourseList";

/*logo img*/
import mngtimg1 from "../../assets/mngtimg1.png";
import mngtimg2 from "../../assets/mngtimg2.png";
import mngtimg3 from "../../assets/mngtimg3.jpeg";
import mngtimg4 from "../../assets/mngtimg4.png";
import mngtimg5 from "../../assets/mngtimg5.png";
import mngtimg6 from "../../assets/mngtimg6.jpeg";

/*clg-img*/
import mngtclgimg1 from "../../assets/mngtclgimg1.jpg";
import mngtclgimg2 from "../../assets/mngtclgimg2.png";
import mngtclgimg3 from "../../assets/mngtclgimg3.jpeg";
import mngtclgimg4 from "../../assets/mngtclgimg4.jpeg";
import mngtclgimg5 from "../../assets/mngtclgimg5.jpg";
import mngtclgimg6 from "../../assets/mngtclgimg6.png";

function MngtPage() {
  return (
    <>
      <div className="mngtPage_container">
        <div className="mngt_section">
          <div className="right_section">
            <h2>Refine Results</h2>
            <StateList />
            <PharmaCourseList />
          </div>

          <div className="left_section">
            <h5>Managemnt College Of India</h5>
            <hr />
            <h6>Best Managemnt College Of India</h6>
            <Link to="/GIBSmgtDetails">
              <div className="mngtClg_sec">
                <div className="clg">
                  <div className="clg_top_left">
                    <div className="logo_pic">
                      <img src={mngtimg1} alt="logo" />
                    </div>
                    <div className="clg_title">
                      <h3>Global Institute Business Studies </h3>
                      <small>
                        Location: Bengaluru, Karnantaka| Website:
                        http://gibs.edu.in | Estd:
                        <span>in 2014 </span>
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
                        <img src={mngtclgimg1} alt="my_img" />
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
            </Link>

            <Link to="/management">
              <div className="mngtClg_sec">
                <div className="clg">
                  <div className="clg_top_left">
                    <div className="logo_pic">
                      <img src={mngtimg2} alt="logo" />
                    </div>
                    <div className="clg_title">
                      <h3>Kalka Groups of Institutions </h3>
                      <small>
                        Location: Meerut, Uttar Pradesh | Website:
                        https://www.kalkaeducationsociety.com | Estd:
                        <span>in 1974 </span>
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
                        <img src={mngtclgimg2} alt="my_img" />
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
            </Link>
            <Link to="/management">
              <div className="mngtClg_sec">
                <div className="clg">
                  <div className="clg_top_left">
                    <div className="logo_pic">
                      <img src={mngtimg3} alt="logo" />
                    </div>
                    <div className="clg_title">
                      <h3>GNIOT institute of management studies(GIMS)</h3>
                      <small>
                        Location: Grater Noida , Uttar Pradesh | Website:
                        www.gims.net.in/ | Estd:
                        <span>in 2020 </span>
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
                        <img src={mngtclgimg3} alt="my_img" />
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
            </Link>
            <Link to="/management">
              <div className="mngtClg_sec">
                <div className="clg">
                  <div className="clg_top_left">
                    <div className="logo_pic">
                      <img src={mngtimg4} alt="logo" />
                    </div>
                    <div className="clg_title">
                      <h3>
                        International school of Managemnt excellence, bangalore{" "}
                      </h3>
                      <small>
                        Location: Bangalore, Karnataka | Website:
                        http://www.isme.in | Estd:<span>in 2006 </span>
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
                        <img src={mngtclgimg4} alt="my_img" />
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
            </Link>
            <Link to="/management">
              <div className="mngtClg_sec">
                <div className="clg">
                  <div className="clg_top_left">
                    <div className="logo_pic">
                      <img src={mngtimg5} alt="logo" />
                    </div>
                    <div className="clg_title">
                      <h3>Alliance Univesity </h3>
                      <small>
                        Location: Bangalore, Karnataka | Website:
                        https://www.alliacnce.edu.in/ | Estd:
                        <span>in 2010 </span>
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
                        <img src={mngtclgimg5} alt="my_img" />
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
            </Link>
            <Link to="/management">
              <div className="mngtClg_sec">
                <div className="clg">
                  <div className="clg_top_left">
                    <div className="logo_pic">
                      <img src={mngtimg6} alt="logo" />
                    </div>
                    <div className="clg_title">
                      <h3>Universal Business School </h3>
                      <small>
                        Location: Mumbai, Maharashtra | Website:
                        http://www.universalbusinessschool.com | Estd:
                        <span>in </span>
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
                        <img src={mngtclgimg6} alt="my_img" />
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
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MngtPage;
