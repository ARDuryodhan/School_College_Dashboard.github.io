import React from 'react'
import { Link } from 'react-router-dom';
import StateList from '../StateList';
import DesignCourseList from '../SelectCourseList/DesignCourseList';

import designimg1 from "../../assets/designimg1.png";
import designimg2 from "../../assets/designimg2.png";
import designimg3 from "../../assets/designimg3.png";
import designimg4 from "../../assets/designimg4.png";
import designimg5 from "../../assets/designimg5.png";
import designimg6 from "../../assets/designimg6.jpg";

import designclgimg1 from "../../assets/designclgimg1.jpg";
import designclgimg2 from "../../assets/designclgimg2.jpg";
import designclgimg3 from "../../assets/designclgimg3.jpg";
import designclgimg4 from "../../assets/designclgimg4.jpg";
import designclgimg5 from "../../assets/designclgimg5.jpg";
import designclgimg6 from "../../assets/designclgimg6.jpg";


function DesignPage() {
  return (
    <>
      <div className="designPage_container">
        <div className="design_section">
          <div className="right_section">
            <h2>Refine Results</h2>
            <StateList />
            <DesignCourseList />
          </div>

          <div className="left_section">
            <h5>Design College Of India</h5>
            <hr />
            <h6>Best Design College Of India</h6>
            <div className="designClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={designimg1} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>National Institute of Design </h3>
                    <small>
                      Location: Noida, Uttar Pradesh | Website:
                      http://www.nid.edu | Estd:
                      <span>in  1961</span>
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
                      <img src={designclgimg1} alt="my_img" />
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
            <div className="designClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={designimg2} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Srishti Institute of Art, Design and Technology </h3>
                    <small>
                      Location: Bangalore , Karnantaka | Website:
                      https://srishtimanipalinstitute.in/ | Estd:<span>in 2005 </span>
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
                      <img src={designclgimg2} alt="my_img" />
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
            <div className="designClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={designimg3} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Arch College of Design & Business</h3>
                    <small>
                      Location: Jaipur, Rajasthan | Website:
                      http://www.archedu.org | Estd:
                      <span>in 2000 </span>
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
                      <img src={designclgimg3} alt="my_img" />
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
            <div className="designClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={designimg4} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Karnavati University</h3>
                    <small>
                      Location: Uvarsad , Gujrat | Website:
                      http://www.karnavatiuniversity.edu.in | Estd:<span>in 2017 </span>
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
                      <img src={designclgimg4} alt="my_img" />
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
            <div className="designClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={designimg5} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>IDC School of Design </h3>
                    <small>
                      Location: Mumbai , Maharashtra | Website:
                      https://www.idc.iitb.ac.in/ | Estd:<span>in 1969 </span>
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
                      <img src={designclgimg5} alt="my_img" />
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
            <div className="designClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={designimg6} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Indian Institute of Information Technology, Design and Manufacturing</h3>
                    <small>
                      Location: kancheepuram, kanchipuram | Website:
                      https://www.iiitdm.ac.in | Estd:
                      <span>in 2005</span>
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
                      <img src={designclgimg6} alt="my_img" />
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

export default DesignPage;
