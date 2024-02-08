import React from "react";
import StateList from "../StateList";
import { Link } from "react-router-dom";

import PharmaCourseList from "../SelectCourseList/PharmaCourseList";

/*logo img*/
import medicalimg1 from "../../assets/medicalimg1.png";
import medicalimg2 from "../../assets/medicalimg2.png";
import medicalimg3 from "../../assets/medicalimg3.jpeg";
import medicalimg4 from "../../assets/medicalimg4.png";
import medicalimg5 from "../../assets/medicalimg5.png";
import medicalimg6 from "../../assets/medicalimg6.png";

/*clg-img*/
import medicalclgimg1 from "../../assets/medicalclgimg1.png";
import medicalclgimg2 from "../../assets/medicalclgimg2.jpg";
import medicalclgimg3 from "../../assets/medicalclgimg3.jpeg";
import medicalclgimg4 from "../../assets/medicalclgimg4.jpg";
import medicalclgimg5 from "../../assets/medicalclgimg5.jpg";
import medicalclgimg6 from "../../assets/medicalclgimg6.jpg";

function MedicalPage() {
  return (
    <>
      <div className="medicalPage_container">
        <div className="medical_section">
          <div className="right_section">
            <h2>Refine Results</h2>
            <StateList />
            <PharmaCourseList />
          </div>

          <div className="left_section">
            <h5>Medical College Of India</h5>
            <hr />
            <h6>Best Medical College Of India</h6>
            <div className="medicalClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={medicalimg1} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>All India Institute of Medical Sciences, Delhi </h3>
                    <small>
                      Location: Delhi | Website:
                      http://aiims.edu | Estd:
                      <span>in 1956 </span>
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
                      <img src={medicalclgimg1} alt="my_img" />
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
            <div className="medicalClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={medicalimg2} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Datta Meghe Institute of Higher Education and Research</h3>
                    <small>
                      Location: Chandigarh | Website:
                      https://www.dmiher.edu.in/ | Estd:<span>in 1988 </span>
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
                      <img src={medicalclgimg2} alt="my_img" />
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
            <div className="medicalClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={medicalimg3} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Christian Medical College</h3>
                    <small>
                      Location: Vellora , Tamil Nadu | Website:
                      www.cmch-vellora.edu | Estd:
                      <span>in 1900 </span>
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
                      <img src={medicalclgimg3} alt="my_img" />
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
                            MASTER OF medicalcY,<span> 2 Year</span>
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
            <div className="medicalClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={medicalimg4} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>National Institute of Mental Health & Neuro Sciences</h3>
                    <small>
                      Location: Bengaluru, Karnataka | Website:
                      http://www.nimhans.ac.in | Estd:<span>in 1847 </span>
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
                      <img src={medicalclgimg4} alt="my_img" />
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
            <div className="medicalClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={medicalimg5} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Madras Medical College & Government General Hospital </h3>
                    <small>
                      Location: Chennai , Tamil Nadu | Website:
                      https://www.tnmgrmu.ac.in | Estd:<span>in 1664 </span>
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
                      <img src={medicalclgimg5} alt="my_img" />
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
            <div className="medicalClg_sec">
              <div className="clg">
                <div className="clg_top_left">
                  <div className="logo_pic">
                    <img src={medicalimg6} alt="logo" />
                  </div>
                  <div className="clg_title">
                    <h3>Dr. D. Y. Patil Vidyapeeth</h3>
                    <small>
                      Location: Pune, Maharashtra | Website:
                      http://www.dpuedu.in | Estd:
                      <span>in 2003</span>
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
                      <img src={medicalclgimg6} alt="my_img" />
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

export default MedicalPage;
