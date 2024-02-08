import React from "react";
import img1 from "../assets/homeBanner1.jpg";
import img2 from "../assets/homeBanner2.jpg";
import img3 from "../assets/homeBanner3.jpg";
import img4 from "../assets/homeBanner4.jpg";
import { Carousel } from "react-bootstrap";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div className="blackbox">
      <div className="Home-Banner">
        <Carousel>
          <Carousel.Item>
            <img src={img1} alt="homebanner" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="homebanner" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="homebanner" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img4} alt="homebanner" />
          </Carousel.Item>
        </Carousel>
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
