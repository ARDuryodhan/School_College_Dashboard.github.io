import React from "react";
import toolimg1 from "../assets/toolsimg1.jpg";
import toolimg2 from "../assets/toolsimg2.jpg";
import toolimg3 from "../assets/toolsimg3.jpg";
import toolimg4 from "../assets/toolsimg4.jpg";

function ToolsService() {
  return (
    <div className="tools-service_container">
      <h3>Tools and Services</h3>
      <div className="toolBox">
        <ul>
          <li>
            <figure>
              <div className="toolImg">
                <img src={toolimg1} alt="toolimg" />
              </div>
              <figcaption>Review</figcaption>
              <div>
              </div>
            </figure>
          </li>
          <li>
            <figure>
              <div className="toolImg">
                <img src={toolimg2} alt="toolimg" />
              </div>
              <figcaption>Explore Career <i className="fa-solid fa-chevron-right"></i></figcaption>
              <div>
              </div>
            </figure>
          </li>
          <li>
            <figure>
              <div className="toolImg">
                <img src={toolimg3} alt="toolimg" />
              </div>
              <figcaption>Bank rates</figcaption>
              <div>
              </div>
            </figure>
          </li>
          <li>
            <figure>
              <div className="toolImg">
                <img src={toolimg4} alt="toolimg" />
              </div>
              <figcaption>admission</figcaption>
              <div>
              </div>
            </figure>
          </li>
        </ul>
        {/* <ul>
            <li>
              <a href="https://www.allschoolscolleges.com/review">
              <figure><img src="images/review.jpg" alt=""></figure>
              <article>
              <span><img src="images/write-a-review.png" width="100" alt=""></span>
              <div class="law_cost">

              <span>Write A Review</span>
              <small><i class="fa fa-chevron-right" aria-hidden="true"></i>
              </small>
              </div>
              </article>
            </a>
            </li>
            </ul> */}
      </div>
    </div>
  );
}

export default ToolsService;
