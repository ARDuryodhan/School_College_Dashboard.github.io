import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

import mngtimg1 from "../../assets/mngtimg1.png";
import photogalleryimg1 from "../../assets/photogalleryimg1.jpg";
import photogalleryimg2 from "../../assets/photogalleryimg2.jpg";
import { Link } from "react-router-dom";
// import { StateSelect } from "react-country-state-city";
import StateList from "../StateList";

function GIBSmgtDetails() {
  const [isopen, setIsopen] = useState(false);

  const detailinfoStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <div className="GIBSmgtDetails_container">
      <div className="details_header">
        <div className="info-content">
          <div className="logo_pic">
            <img src={mngtimg1} alt="logo" />
          </div>
          <div className="clg_title">
            <h3>Global Institute Business Studies</h3>
            <small>
              Location: Bengaluru, Karnantaka| Website: http://gibs.edu.in{" "}
              <br />
              Estd:
              <span>in 2014 </span>
              <br />
              <button>Apply Now For Admission</button>
            </small>
          </div>
        </div>

        <div className="Detailsclg_links">
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
            <i className="fa-regular fa-pen-to-square"></i>Write a review
          </div>
        </div>
      </div>
      <div className="details_navbar">
        <ul>
          <li>
            <a href="#detailsabout">About</a>
          </li>
          <li>
            <a href="#detailscourse">Courses & Fees</a>
          </li>
          <li>
            <a href="#detailsPlacements">Placements</a>
          </li>
          <li>
            <a href="#detailsCampus">Campus Tour</a>
          </li>
          <li>
            <a href="#detailsHostel">Hostel</a>
          </li>
          <li>
            <a href="#detailsAwards">Awards</a>
          </li>
          <li>
            <a href="#detailsContact">Contact</a>
          </li>
        </ul>
        <button><Link to='/review'>Write Review</Link></button>
      </div>
      <div className="details_content">
        <main>
          <div id="detailsabout">
            <h2>about Global Institute Business Studies</h2>
            <div className="detailinfo">
              <div style={isopen ? null : detailinfoStyle} className="mb-5">
                <p>
                  Global Institute of Business Studies (GIBS) is where talents
                  are nurtured, ambitions cherished, ideas shared & dreams
                  fulfilled. An institute of international standards, we have
                  been recognized as one of the top business schools in India.
                  We have achieved this status of distinction by pioneering
                  refined quality of learning, moral upkeep and intellectual
                  support across the all-encompassing span of advanced education
                  in India. As envisioned by our founders, we strive to
                  transform our students into leaders of the future by providing
                  innovative and globally accepted programs in a congenial
                  atmosphere. Our programmes are designed for individuals who
                  endeavor to contribute to the sustained development and
                  inclusive growth of the nation and the world at large. We
                  create leaders imbued with a spirit of innovation and
                  entrepreneurship.
                </p>
                <h5>Why GIBS?</h5>
                <p>
                  Our programs, hand in hand with our world-class
                  infrastructure, are the perfect platform for a massive
                  transformation in a student’s life in terms of leadership,
                  excellent communication skills, latest additional skills and
                  overall personality development.
                </p>
                <h5>GIBS VALUE CREDO (QUEST)</h5>
                <p>
                  Specific ways to support student-centric outcomes include
                  allowing students to set their own learning goals, using
                  diverse teaching methods and assessments, fostering a positive
                  and inclusive learning environment, providing regular
                  feedback, and encouraging self-reflection and metacognitive
                  skills development. Pursuing student-centric outcomes has the
                  potential to revolutionize education and benefit all students
                  in building a brighter future.
                  <br />
                  In short, student-centered education is all about putting the
                  student first. It’s about giving students the opportunity to
                  learn in a way that is best for them, and to take ownership of
                  their own education.
                </p>
                <h5>LEARNING BY DOING (LBD)</h5>
                <p>
                  The “Learning by Doing” Model is an educational philosophy
                  that emphasizes the importance of hands-on experiences in the
                  learning process. In the context of colleges and universities,
                  a variety of activities can be incorporated to bring this
                  model to life. These activities are often aimed at making
                  abstract or theoretical knowledge more concrete and relevant
                  by letting students experience it directly. Here are some
                  activities and programs that can come under the “Learning by
                  Doing” model.
                </p>
                <h5>CORPORATE IS CUSTOMER</h5>
                <p>
                  The CIC (Corporate is Customer) Model is a transformative
                  approach to education and training, positioning corporations
                  as primary customers. In this paradigm, educational
                  institutions like GIBS view their faculties as the machinery,
                  geared to equip and refine students, who are seen as the
                  products. These ‘products’, once honed and polished, are then
                  presented to corporations. GIBS places its highest focus on
                  corporates because they are not just recruiters but customers,
                  investing in the form of fees. Recognizing this dynamic, GIBS
                  ensures that its curriculum, training, and offerings are
                  tailored to meet the evolving needs and expectations of the
                  corporate world, guaranteeing a premium, industry-ready
                  product.
                </p>
                <h5>VMOSA MODEL</h5>
                <p>
                  In GIBS, VMOSA Model resonates with everyone. Vision and
                  Mission are communicated, integrated and adopted by all parts
                  of the organisation.
                  <br />
                  The Vision (V) provides us an overview of where we are going
                  to reach according to our long term idealistic goals.
                  <br />
                  The Mission (M) presents the picture of why we have a vision
                  and what we will do to achieve it.
                  <br />
                  The Objective (O) gives us clarity of the end result we are
                  going to achieve and when it will be achieved.
                  <br />
                  Strategy (S) is what drives the mission to reach the vision
                  and where our efforts and resources are best spent.
                  <br />
                  Action Plan (A) states how our VMOS will be actionable to
                  accomplish our goals.
                </p>
              </div>
              <button onClick={() => setIsopen(!isopen)}>
                {isopen ? "Show Less" : "Shore More"}
                {!isopen && <i className="fa-solid fa-angles-right"></i>}
              </button>
            </div>
          </div>
          <div id="detailscourse">
            <h2>
              IIFA Multimedia Best Design College Bangalore Courses &amp; Fee
            </h2>
            <div className="feesSection">
              <h6 style={{ fontWeight: "bold" }}>
                IIFA Multimedia Best Design College Bangalore UG Courses{" "}
              </h6>
              <Table striped hover>
                <thead>
                  <tr>
                    <th className="table-left">Course</th>
                    <th className="table-center">Specialization</th>
                    <th className="table-right">Avg. Fees Per Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-left">
                      B.Sc <small>, 3 Year, Full Time</small>
                    </td>
                    <td className="table-center">Animation and Multimedia</td>
                    <td className="table-right">
                      {" "}
                      Tuition Fee : ₹1,50,000 /Yr. <br />
                      <button>Apply</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-left">
                      B.Sc <small>, 3 Year, Full Time</small>
                    </td>
                    <td className="table-center">Visual Communication</td>
                    <td className="table-right">
                      {" "}
                      Tuition Fee : ₹1,50,000 /Yr. <br />
                      <button>Apply</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-left">
                      Diploma <small>, 1 Year</small>
                    </td>
                    <td className="table-center">
                      Game Designing and Development
                    </td>
                    <td className="table-right">
                      {" "}
                      Tuition Fee : ₹1,50,000 /Yr. <br />
                      <button>Apply</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-left">
                      M.Sc <small>, 2 Year</small>
                    </td>
                    <td className="table-center">Fashion Designing</td>
                    <td className="table-right">
                      {" "}
                      Tuition Fee : ₹1,50,000 /Yr. <br />
                      <button>Apply</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-left">
                      PGD <small>, 1 Year Full Time</small>
                    </td>
                    <td className="table-center">
                      Interior Design and Decoration
                    </td>
                    <td className="table-right">
                      {" "}
                      Tuition Fee : ₹1,50,000 /Yr. <br />
                      <button>Apply</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="feesSection">
              <h2 style={{ fontWeight: "bold" }}>
                Campus Tour IIFA Multimedia Best Design College Bangalore
              </h2>
              <h6 style={{ color: "0098a2" }}>Photo Gallery</h6>
              <section id="detailsCampus" className="photo-gallery">
                <img src={photogalleryimg1} alt="photogallery" />
                <img src={photogalleryimg2} alt="photogallery" />
                <img src={photogalleryimg1} alt="photogallery" />
                <img src={photogalleryimg2} alt="photogallery" />
                <img src={photogalleryimg1} alt="photogallery" />
                <img src={photogalleryimg2} alt="photogallery" />
                <img src={photogalleryimg1} alt="photogallery" />
                <img src={photogalleryimg2} alt="photogallery" />
              </section>
            </div>
            <div className="feesSection">
              <h2 style={{ fontWeight: "bold" }}>
                IIFA Multimedia Best Design College Bangalore Hostel Facilities
                & Fee
              </h2>
              <h6 style={{ color: "0098a2" }}>facilities:</h6>
              <section id="detailsHostel" className="facilities-icon">
                <i className="fa-solid fa-bed"></i>
                <i className="fa-solid fa-laptop-medical"></i>
                <i className="fa-solid fa-chalkboard-user"></i>
                <i className="fa-solid fa-globe"></i>
                <i className="fa-solid fa-medal"></i>
                <i className="fa-solid fa-swatchbook"></i>
              </section>
            </div>
            <div id="detailsPlacements" className="feesSection">
              <h2 style={{ fontWeight: "bold" }}>
                IIFA Multimedia Best Design College Bangalore Placement
                Companies
              </h2>
              <ul>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/271467117169.jpg"
                    alt="Flipkart"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/361533022057.jpg"
                    alt="Microsoft"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/981682939705.jpg"
                    alt="ZeniMax Media ING."
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/881682939817.jpg"
                    alt="Sega"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/341682939892.jpg"
                    alt="Gameloft"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/991682939998.jpg"
                    alt="Mojang"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/461682940082.jpg"
                    alt="Nexon"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/221682940124.jpg"
                    alt="Nintendo"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/601682940166.jpg"
                    alt="Ubisoft"
                  />
                </li>
                <li>
                  <img
                    src="https://www.allschoolscolleges.com/images/company_logo/961682940210.jpg"
                    alt="Unity"
                  />
                </li>
              </ul>
            </div>
          </div>
        </main>
        <aside >
          <Form>
            <h5>
              Online Registration
              <br />
              <small>Fill Your Details for Admission Help</small>
            </h5>
            <input type="text" placeholder="Enter your Ful name *" />
            <input type="email" placeholder="Enter your Email Id *" />
            <input type="number" placeholder="Enter Mobile No. *" />
            <input type="date" placeholder="Enter your DOB " />
            <select name="gender" id="gender">
              <option disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Transgender">Transgender</option>
            </select>
            <input type="text" placeholder="Enter Father name" />
            <input type="text" placeholder="Enter Mother name" />
            <select name="caste" id="caste">
              <option value="Select caste" disabled>
                Select Caste
              </option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
            <div className="enquiryState mb-3">
              <StateList style={{border:"none"}}/>
            </div>
            <select name="course" id="course" >
              <option value="">Course</option>
              <option value="31336">B.Sc- [Animation and Multimedia]</option>
              <option value="35522">B.Sc- [Visual Communication]</option>
              <option value="35523">
                B.Sc- [Game Designing and Development]
              </option>
              <option value="35524">B.Sc- [Fashion Designing]</option>
              <option value="35525">BVA- [Animation and Multimedia]</option>
              <option value="35526">BVA- [Graphic Designing]</option>
              <option value="35527">
                B.Sc- [Interior Design and Decoration]
              </option>
              <option value="35528">M.Sc- [Animation]</option>
              <option value="35529">
                M.Sc- [Interior Designing and Management]
              </option>
              <option value="35530">M.Sc- [Fashion Designing]</option>
              <option value="35531">Diploma- [Animation]</option>
              <option value="35532">Diploma- [Game Designing]</option>
              <option value="35533">Diploma- [Interior Design]</option>
              <option value="35534">Diploma- [Fashion Designing]</option>
              <option value="35535">Diploma- [Visual Effects (VFX)]</option>
              <option value="35536">Diploma- [UI/UX Design]</option>
              <option value="35537">Diploma- [Digital Photography]</option>
              <option value="35538">Diploma- [Digital Cinematography]</option>
              <option value="35539">Diploma- [Sound Engineering]</option>
              <option value="35540">
                Diploma- [Graphic and Web Design and Development]
              </option>
              <option value="35541">Diploma- [Acting]</option>
              <option value="35542">Diploma- [Architecture]</option>
              <option value="35543">Advance Diploma- [Animation]</option>
              <option value="35544">
                Advance Diploma- [Interior Designing]
              </option>
              <option value="35545">
                Advance Diploma- [Fashion Designing]
              </option>
              <option value="35546">PGD- [Event Management]</option>
              <option value="35547">PGD- [Fashion Design management]</option>
              <option value="35548">PGD- [Advertising Design]</option>
            </select>
            <input type="password" placeholder="Enter password min 6 char." />
          </Form>
          <label>
            <input type="checkbox" /> <Link>I accept Terms & Conditions.</Link>
            <button>Enquiry Now</button>
          </label>
        </aside>
      </div>
    </div>
  );
}

export default GIBSmgtDetails;
