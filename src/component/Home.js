import React from "react";

import HomeBanner from "./HomeBanner";
import EducationList from "./EducationList";
import TopClgSlider from "./TopClgSlider";
// import Footer from "./Footer";
import ArticleSection from "./ArticleSection";
import Contactus from "./Contact_us";
import PopularSearch from "./PopularSearch";
import ToolsService from "./ToolsService";
import TrendingsCareer from "./TrendingsCareer";

function Home() {
  return (
    <>
      <div className="home_container">
        <HomeBanner       />
        <EducationList    />
        <TopClgSlider     />
        <ToolsService     />
        <PopularSearch    />
        <TrendingsCareer  />
        <ArticleSection   />
        <Contactus        />
        {/* <Footer           /> */}
      </div>
    </>
  );
}

export default Home;
