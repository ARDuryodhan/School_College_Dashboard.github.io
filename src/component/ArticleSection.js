import React from "react";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ArticleSection() {
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

  // const videoId = "Oq61TxejZ5g";
  return (
    <>
      <div style={{ backgroundColor: "#fff", padding: "1rem 1rem 3rem 1rem" }}>
        <div className="article_container">
          <h2> Articles</h2>
          <Slider {...settings} className="sliders">
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/WyLUAMGOJUA?si=JK6pjSfZI8DD0Y6L"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>k. r. mangalam university</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    Recognized by UGC, is the top-ranking private university in
                    Gurgaon/ Delhi NCR and the Best University in Gurgaon. We
                    are connected with some of the corporates/ organisations
                    around the globe that provide students access to the best
                    job opportunities.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
            <iframe src="https://www.youtube.com/embed/ylmRK_1X_yc?si=9efdwVtSDcgy0pUn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <Card.Body>
                <Card.Title>
                  <p>woxsen university</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    Our innovative, internationally aligned and intellectually
                    rigorous degree programs are curated to empower and reinvent
                    student calibre to help them build contemporary global
                    careers and life skills.Woxsen aims to empower its students
                    with a global mind-set through a cutting-edge curriculum,
                    world-class pedagogy, industry connections and international
                    partnerships.{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/TDTei5yVmng?si=vB1lnuUxvHcHJJmr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>apjee school</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    In its endeavour to establish a truly international level
                    Centre of Excellence in Management, the Apeejay Education
                    established the Apeejay School of Management (ASM) in 1993.
                    The ASM strives to develop competent and relevant manpower
                    for the twenty first century needs of trade, business, and
                    industry.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/JJvEfz2mecM?si=q4xs8dftG4Y_-5sT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>CBSE</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    CBSE affiliates schools for the purpose of Board Examination
                    for Secondary & Senior Secondary level. More than 24000
                    schools are affiliated to CBSE as on date. The updated list
                    is available at link. The Board leads in innovation in
                    teaching-learning methodologies by devising student centered
                    paradigms.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/AHFX-mMPE5E?si=cLJ1fHTbHvl-t_Ns"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>Maharashtra Board</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    The Maharashtra State Board of Secondary & Higher Secondary
                    Education, Pune 411004 is an Autonomous Body established
                    under the provisions of the Maharashtra Act No. 41 of 1965.
                    The Maharashtra State Board of Secondary & Higher Secondary
                    Education, conducts the HSC and SSC Examinations in the
                    state of Maharashtra through its nine Divisional Boards
                    located at Pune, Mumbai, Aurangabad, Nasik, Kolhapur,
                    Amravati, Latur, Nagpur and Ratnagiri. The Board conducts
                    examination twice a year and the number of students
                    appearing for the main examination is around 14 Lacs for HSC
                    and 17 Lac’s SSC, for the supplementary examination around 6
                    Lacs students are expected HSC and SSC together. There are
                    about 21000 schools (SSC) and 7000 (HSC) Higher Sec. Schools
                    / Jr. colleges in the entire state.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/drdLFJ-xGRI?si=sz8EKtpOwM1tiR-n"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>ALLEN Career Institute</p>
                </Card.Title>
                <Card.Text>
                  <p>
                    ALLEN Career Institute , a pioneer and the most reliable
                    coaching institute in its field was founded by Shri Rajesh
                    Maheshwari on 18th April 1988 with a mission that every
                    student of ALLEN - becomes a success story. ALLEN is named
                    in the memory of Late Shri Laxmi Narayan Maheshwari, father
                    of four directors- Shri Govind Maheshwari, Shri Rajesh
                    Maheshwari, Shri Naveen Maheshwari and Shri Brajesh
                    Maheshwari. ALLEN Career Institute is a student-oriented
                    organization where each and every student is considered as
                    an important asset of the institution. The Institute
                    understands the accountability of bringing the finest mentor
                    and building an excellent knowledge pool because in current
                    cut-throat competitive environment individual has to be
                    aware of the latest examination patterns and is required to
                    put efforts in a proper direction. With such commitment,
                    ALLEN Career Institute Pvt. Ltd. has grown into a large
                    group of 10015+ members as on date, with the trust of 25 Lac
                    + Student in all modes since 1988. ALLEN is an extraordinary
                    combination of spiritual values and modern technology. Our
                    endeavours here ensure preparing the students for life by
                    developing in them, an analytical mind, the right attitude
                    and a spirit of goodness backed by academic excellence.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/N0J2ivGYofU?si=cGfs681YejmVKrTk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>Aakash BYJU’S </p>
                </Card.Title>
                <Card.Text>
                  <p>
                    Aakash Educational Services Limited (Aakash BYJU’S) is a
                    leading educational institution in India that provides
                    comprehensive test preparatory services to students
                    preparing for medical and engineering entrance exams,
                    school/board exams, NTSE, Olympiads and other foundation
                    level exams. Aakash has been committed to the success of
                    students since 1988. It has been recognized nationally as
                    one of the most trusted brands in the education sector. With
                    300+ branches across India, 5000+ expert faculty,
                    comprehensive study material, regular tests & assessments
                    and an efficient doubt clearing system, backed by robust
                    technology for an omni channel experience, Aakash BYJU'S
                    provides one of the best coaching experiences for students
                    aspiring to become a doctor or an engineer.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-1">
              <iframe
                src="https://www.youtube.com/embed/TMaXn4_cyss?si=3rIBQNW2g8pQaa6O"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card.Body>
                <Card.Title>
                  <p>super30 </p>
                </Card.Title>
                <Card.Text>
                  <p>
                    Super 30 is a non-profit educational program that offers
                    free coaching classes to economically disadvantaged students
                    in Patna, India. The program is for the JEE Mains and JEE
                    Advanced entrance exams for IITs. The program was founded in
                    2009 by Anand Kumar, a math teacher, and Abhayanand, the
                    former D.G.P of Bihar. The program provides students with
                    free study materials, food, and accommodation. However, the
                    program is only available to a limited number of students,
                    and the selection process is based on merit. The program's
                    vision is to commit to a single, renewed education agenda
                    that is holistic, ambitious, and aspirational, leaving no
                    one behind. Its mission is to transform lives through
                    education, recognizing the important role of education as a
                    main driver of development. Kumar and his school have been
                    the subject of several smear campaigns, some of which have
                    been carried in Indian media sources. His life and work were
                    portrayed in the 2019 film, Super 30, where Kumar is played
                    by Hrithik Roshan
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ArticleSection;
