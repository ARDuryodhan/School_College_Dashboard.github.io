import React from 'react'
import { Link } from 'react-router-dom';
import LawCourseList from '../SelectCourseList/LawCourseList';
import StateList from '../StateList';

import lawimg1 from "../../assets/lawimg1.png";
import lawimg2 from "../../assets/lawimg2.jpg";
import lawimg3 from "../../assets/lawimg3.png";
import lawimg4 from "../../assets/lawimg4.png";
import lawimg5 from "../../assets/lawimg5.png";
import lawimg6 from "../../assets/lawimg6.png";

import lawclgimg1 from "../../assets/lawclgimg1.jpg";
import lawclgimg2 from "../../assets/lawclgimg2.png";
import lawclgimg3 from "../../assets/topclg-img1.png";
import lawclgimg4 from "../../assets/lawclgimg4.jpg";
import lawclgimg5 from "../../assets/lawclgimg5.jpg";
import lawclgimg6 from "../../assets/lawclgimg6.jpg";


function LawPage() {
  return (
    <>
      <div className="lawPage_container">
        <div className="law_section">
          <div className="right_section">
            <h2>Refine Results</h2>
            <StateList />
            <LawCourseList />
          </div>

          <div className="left_section">
            <h5>Law College Of India</h5>
            <hr />
            <h6>Best Law College Of India</h6>
            <div className="lawClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={lawimg1} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>IILM UNIVERSITY, GURUGRAM</h3>
                    <small>
                      Location: Gurgaon, Haryana | Website:
                      http://iilm.edu.in | Estd:
                      <span>in 1993 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>273
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 5287
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
                      <img src={lawclgimg1} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.A (HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.-LL.B.(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.B.A. LLB(HONS.),<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.DES,<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.TECH,<span> 4 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
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
            <div className="lawClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={lawimg2} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>WOXSEN University </h3>
                    <small>
                      Location: Hydrabad , Telangana | Website:
                      https://www.woxsen.edu.in/ | Estd:<span>in 2014 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i> 278
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 91034
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
                      <img src={lawclgimg2} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.A.,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 2,43,400 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.LLB(HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 2,20,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.Arch,<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 2,20,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.B.A. LLB(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 2,20,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.COM(HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 2,60,000 /Yr.)
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
            <div className="lawClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={lawimg3} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>K.R. Mangalam university, gurgaon</h3>
                    <small>
                      Location: Gurgaon, Haryana | Website:
                      www.krmangalam.edu.in | Estd:
                      <span>in 2013 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>258
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 7833
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
                      <img src={lawclgimg3} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.A.,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,35,000/- /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.(HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,05,000/- /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A. LLB(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,55,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B. ARCH,<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,45,500 /Yr.)
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
            <div className="lawClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={lawimg4} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Shadha University </h3>
                    <small>
                      Location: Noida , Uttar Pradesh | Website:
                      http://www.sharda.ac.in/ | Estd:<span>in 2009 </span>
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
                        <i className="fa-solid fa-eye"></i> 2356
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
                      <img src={lawclgimg4} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.TECH + M.TECH,<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 47,500 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            LLM,<span> 1 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,47,500 /Yr.)
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
            <div className="lawClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={lawimg5} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>AMITY University </h3>
                    <small>
                      Location: Raipur , Chhattisgarh | Website:
                      https://www.amity.edu/raipur | Estd:<span>in 2014 </span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>234
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 6659
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
                      <img src={lawclgimg5} alt="my_img" />
                    </Link>

                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.A,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 76,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.(HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 48,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A. LLB(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,36,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.ARCH,<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,02,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.B.A. LLB(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,36,000 /Yr.)
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
            <div className="lawClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={lawimg6} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Bennett University,Greater Noida</h3>
                    <small>
                      Location: Greater Noida , Uttar Pradesh | Website:
                      http://www.bennett.edu.in | Estd:
                      <span>in 2016</span>
                    </small>
                    <div className="clg_links">
                      <div
                        style={{
                          backgroundColor: "indianred",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        Follow <i className="fa-solid fa-user-plus"></i>276
                      </div>
                      <div
                        style={{
                          backgroundColor: "#01427a",
                          padding: "0.2rem 0.5rem",
                          color: "white",
                        }}
                      >
                        <i className="fa-solid fa-eye"></i> 10857
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
                      <img src={lawclgimg6} alt="my_img" />
                    </Link>
                    <div className="university_found">
                      <ul>
                        <li>
                          <p>
                            B.A.,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,25,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.LIBREAL ARTS,<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 4,27,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.A.LLB(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.B.A.LLB(HONS.),<span> 5 Year</span>
                            <small className="fees">
                              (Fee: Rs. 3,40,000 /Yr.)
                            </small>
                          </p>
                        </li>
                        <li>
                          <p>
                            B.SC.(HONS.),<span> 3 Year</span>
                            <small className="fees">
                              (Fee: Rs. 1,70,000 /Yr.)
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
  )
}

export default LawPage;
