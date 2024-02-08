import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";

import eduimg1 from "../assets/eduimg1.png";
import eduimg2 from "../assets/eduimg2.jpg";
import eduimg3 from "../assets/eduimg3.jpeg";
import eduimg4 from "../assets/eduimg4.png";
import eduimg5 from "../assets/eduimg5.png";
import eduimg6 from "../assets/eduimg6.png";
import eduimg7 from "../assets/eduimg7.png";
import eduimg8 from "../assets/eduimg8.png";
import eduimg9 from "../assets/eduimg9.jpg";
import eduimg10 from "../assets/eduimg10.jpeg";

import clgimg1 from "../assets/clgimg1.png";
import clgimg2 from "../assets/clgimg2.png";
import clgimg3 from "../assets/clgimg3.jpg";
import clgimg4 from "../assets/clgimg4.png";
import clgimg5 from "../assets/clgimg5.png";
import clgimg6 from "../assets/clgimg6.png";
import clgimg7 from "../assets/clgimg7.png";
import clgimg8 from "../assets/clgimg8.jpg";
import clgimg9 from "../assets/clgimg9.png";
import clgimg10 from "../assets/clgimg10.png";
import clgimg11 from "../assets/clgimg11.png";
import clgimg12 from "../assets/clgimg12.png";

import uniimg1 from "../assets/uni-img1.png";
import uniimg2 from "../assets/uni-img2.png";
import uniimg3 from "../assets/uni-img3.png";
import uniimg4 from "../assets/uni-img4.jpg";
import uniimg5 from "../assets/uni-img5.png";
import uniimg6 from "../assets/uni-img6.png";
import uniimg7 from "../assets/uni-img7.jpeg";
import uniimg8 from "../assets/uni-img8.png";
import uniimg9 from "../assets/uni-img9.png";
import uniimg10 from "../assets/uni-img10.png";
import uniimg11 from "../assets/uni-img11.jpeg";

import cach1 from "../assets/cach1.png";
import cach2 from "../assets/cach2.png";
import cach3 from "../assets/cach3.png";
import cach4 from "../assets/cach4.jpeg";
import cach5 from "../assets/cach5.png";
import cach6 from "../assets/cach6.png";
import cach7 from "../assets/cach7.png";
import cach8 from "../assets/cach8.jpeg";
import cach9 from "../assets/cach9.jpeg";
import cach10 from "../assets/cach10.png";
import cach11 from "../assets/cach11.png";
import cach12 from "../assets/cach12.png";

function EducationList() {
  const [key, setKey] = useState("college");
  return (
    <div className="educationlist_container">
      <div className="edulist-title">
        <h1>Get started by searching our education listings:</h1>
        <p>Explore Education Interest</p>
      </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
        style={{backgroundColor:"transparent"}}
      >
        <Tab  eventKey="School" title="SCHOOL">
          <div className="edulistmenuImg">
            <div className="img_container">
              <div>
                <Link>
                  <img src={eduimg1} alt="icon" />
                </Link>
                <p>CBSE</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg2} alt="icon" />
                </Link>
                <p>NIOS</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg3} alt="icon" />
                </Link>
                <p>CISCE</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg4} alt="icon" />
                </Link>
                <p>MAHARASHTRA BOARD</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg5} alt="icon" />
                </Link>
                <p>International Baccalaureate</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg6} alt="icon" />
                </Link>
                <p>PANJAB BOARD</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg7} alt="icon" />
                </Link>
                <p>HP BOARD</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg8} alt="icon" />
                </Link>
                <p>UP BOARD</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg9} alt="icon" />
                </Link>
                <p>MP BOARD</p>
              </div>
              <div>
                <Link>
                  <img src={eduimg10} alt="icon" />
                </Link>
                <p>BIHAR BOARD</p>
              </div>
            </div>
          </div>
        </Tab>

        <Tab eventKey="college" title="COLLEGE">
          <div className="edulistmenuImg">
            <div className="img_container">
              <div>
                <Link>
                  <img src={clgimg1} alt="icon" />
                </Link>
                <p>Animation</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg2} alt="icon" />
                </Link>
                <p>Arts</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg3} alt="icon" />
                </Link>
                <p>Computer Application</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg4} alt="icon" />
                </Link>
                <p>Education</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg5} alt="icon" />
                </Link>
                <p>Engineering</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg6} alt="icon" />
                </Link>
                <p>Fashion Design</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg7} alt="icon" />
                </Link>
                <p>Making and Journalism</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg8} alt="icon" />
                </Link>
                <p>Hotel Management</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg9} alt="icon" />
                </Link>
                <p>Law</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg10} alt="icon" />
                </Link>
                <p>Management</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg11} alt="icon" />
                </Link>
                <p>Medical</p>
              </div>
              <div>
                <Link>
                  <img src={clgimg12} alt="icon" />
                </Link>
                <p>Science</p>
              </div>
            </div>
            
          </div>
        </Tab>

        <Tab eventKey="university" title="UNIVERSITY">
          <div className="edulistmenuImg">
            <div className="img_container">
              <div>
                <Link>
                  <img src={uniimg1} alt="icon" />
                </Link>
                <p>Indian Institute of Science</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg2} alt="icon" />
                </Link>
                <p>Jamia Millia Islamia</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg3} alt="icon" />
                </Link>
                <p>Jawaharlal Nehru University</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg4} alt="icon" />
                </Link>
                <p>Delhi University</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg5} alt="icon" />
                </Link>
                <p>Banaras Hindu University</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg6} alt="icon" />
                </Link>
                <p>Aligarh Muslim University</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg7} alt="icon" />
                </Link>
                <p>Anna University</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg8} alt="icon" />
                </Link>
                <p>University of Hyderabad</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg9} alt="icon" />
                </Link>
                <p>University of Kerala</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg10} alt="icon" />
                </Link>
                <p>Andhra University</p>
              </div>
              <div>
                <Link>
                  <img src={uniimg11} alt="icon" />
                </Link>
                <p>University of Mumbai</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Coaching" title="COACHING">
        <div className="edulistmenuImg">
            <div className="img_container">
              <div>
                <Link>
                  <img src={cach1} alt="icon" />
                </Link>
                <p>Allen Career Institute</p>
              </div>
              <div>
                <Link>
                  <img src={cach2} alt="icon" />
                </Link>
                <p>Aakash Institute</p>
              </div>
              <div>
                <Link>
                  <img src={cach3} alt="icon" />
                </Link>
                <p>Resonance</p>
              </div>
              <div>
                <Link>
                  <img src={cach4} alt="icon" />
                </Link>
                <p>Career Point</p>
              </div>
              <div>
                <Link>
                  <img src={cach5} alt="icon" />
                </Link>
                <p>FIITJEE</p>
              </div>
              <div>
                <Link>
                  <img src={cach6} alt="icon" />
                </Link>
                <p>Vibrant Academy</p>
              </div>
              <div>
                <Link>
                  <img src={cach7} alt="icon" />
                </Link>
                <p>Bansal Classes</p>
              </div>
              <div>
                <Link>
                  <img src={cach8} alt="icon" />
                </Link>
                <p>Motion Kota</p>
              </div>
              <div>
                <Link>
                  <img src={cach9} alt="icon" />
                </Link>
                <p>Super30</p>
              </div>
              <div>
                <Link>
                  <img src={cach10} alt="icon" />
                </Link>
                <p>Narayana IIT Academy</p>
              </div>
              <div>
                <Link>
                  <img src={cach11} alt="icon" />
                </Link>
                <p>PACE</p>
              </div>
              <div>
                <Link>
                  <img src={cach12} alt="icon" />
                </Link>
                <p>Toppers Academy</p>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>

    
    </div>
  );
}

export default EducationList;
