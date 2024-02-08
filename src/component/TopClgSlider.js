import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";

import topclgimg1 from "../assets/topclg-img1.png";
import topclgimg2 from "../assets/topclg-img2.jpg";
import topclgimg3 from "../assets/topclg-img3.jpg";
import topclgimg4 from "../assets/topclg-img4.jpg";
import topclgimg5 from "../assets/topclg-img5.jpg";
import topclgimg6 from "../assets/topclg-img6.jpg";
import topclgimg7 from "../assets/topclg-img7.jpeg";
import topclgimg8 from "../assets/topclg-img8.jpeg";
import topclgimg9 from "../assets/topclg-img9.jpeg";
import topclgimg10 from "../assets/topclg-img10.jpg";
import topclgimg11 from "../assets/topclg-img11.jpg";
import topclgimg12 from "../assets/topclg-img12.jpeg";
import topclgimg13 from "../assets/topclg-img13.jpg";
import topclgimg14 from "../assets/topclg-img14.jpeg";

function TopClgSlider() {
  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ backgroundColor: "#fff", padding: "1rem 1rem 3rem 1rem" }}>
        <div className="topClg-container">
          <h2> Recommended Top College in India</h2>
          <Slider {...settings} className="sliders">
            <Card>
              <Card.Img variant="top" src={topclgimg1} />
              <Card.Body>
                <Card.Title>
                  <p>k. r. mangalam university</p>
                </Card.Title>
                <Card.Text>
                  <p>gurgaon</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg2} />
              <Card.Body>
                <Card.Title>
                  <p>ITS Engineering College College </p>
                </Card.Title>
                <Card.Text>
                  <p>Uttar Pradesh</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg3} />
              <Card.Body>
                <Card.Title>
                  <p>woxsen university</p>
                </Card.Title>
                <Card.Text>
                  <p>Telangana</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              {" "}
              <Card.Img variant="top" src={topclgimg4} />
              <Card.Body>
                <Card.Title>
                  <p>apajee school management</p>
                </Card.Title>
                <Card.Text>
                  <p>Delhi</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              {" "}
              <Card.Img variant="top" src={topclgimg5} />
              <Card.Body>
                <Card.Title>
                  <p>Genesis Institute of Dental Sciences</p>
                </Card.Title>
                <Card.Text>
                  <p>Punjab</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg6} />
              <Card.Body>
                <Card.Title>
                  <p>manav rachna dental college</p>
                </Card.Title>
                <Card.Text>
                  <p>haryana</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              {" "}
              <Card.Img variant="top" src={topclgimg7} />
              <Card.Body>
                <Card.Title>
                  <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                    Indian Institute of Film and Animation{" "}
                  </p>
                </Card.Title>
                <Card.Text>
                  <p>Bengaluru</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg8} />
              <Card.Body>
                <Card.Title>
                  <p>sunderdeep GROUP college</p>
                </Card.Title>
                <Card.Text>
                  <p>Uttar Pradesh</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg9} />
              <Card.Body>
                <Card.Title>
                  <p>Shivalik college of engineering</p>
                </Card.Title>
                <Card.Text>
                  <p>Uttarakhand</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg10} />
              <Card.Body>
                <Card.Title>
                  <p>Ganga Group of Institutions</p>
                </Card.Title>
                <Card.Text>
                  <p>Delhi</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              {" "}
              <Card.Img variant="top" src={topclgimg11} />
              <Card.Body>
                <Card.Title>
                  <p>Universal Business School</p>
                </Card.Title>
                <Card.Text>
                  <p>Mumbai</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              {" "}
              <Card.Img variant="top" src={topclgimg12} />
              <Card.Body>
                <Card.Title>
                  <p>vidya siri college of pharmacy</p>
                </Card.Title>
                <Card.Text>
                  <p>Bengaluru</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={topclgimg13} />
              <Card.Body>
                <Card.Title>
                  <p>surendera dental college</p>
                </Card.Title>
                <Card.Text>
                  <p>Rajasthan</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
            <Card>
              {" "}
              <Card.Img variant="top" src={topclgimg14} />
              <Card.Body>
                <Card.Title>
                  <p>saraswati group of college</p>
                </Card.Title>
                <Card.Text>
                  <p>Punjab</p>
                </Card.Text>
                <button>Apply Here</button>
              </Card.Body>
            </Card>
          </Slider>
        </div>
        <div className="btn_viewmore">
          <button>VIEW MORE <i className="fa-solid fa-chevron-right" style={{color:"#ffffff"}}></i></button>
        </div>
      </div>
    </>
  );
}

export default TopClgSlider;
