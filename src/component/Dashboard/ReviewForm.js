import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import reviewImg from  '../../assets/reviewImg.png';
import { MyAxios } from "../../Services/helper";

const ReviewForm = () => {

  const [course, setCourse] = useState("");
  const [review_for, setReview_for] = useState("");
  const [overall_rating, setOverall_rating] = useState("");
  const [is_publish, setIs_publish] = useState(false);

  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    if (
      !course ||
      !review_for ||
      !overall_rating ||
      overall_rating < 1 ||
      overall_rating > 5
    ) {
      alert("Please fill in all fields ");
      return;
    }
   
    try {
      await MyAxios.post("/review/create", {
        course: course,
        review_For: review_for,
        overall_Rating: overall_rating,
        is_publish: is_publish,
      });
      alert("Review Submitted successfully");
      setCourse("");
      setReview_for("");
      setOverall_rating("");
      setIs_publish(false);
      navigate("/my-review");
    } catch (err) {
      alert("Review Submission failed");
      console.error(err);
    }
  }

  const handleReviewChange = (event) => {
    setReview_for(event.target.value);
  };

  return (
    <div id="reviewContainer" className="container-fluid">
      <h1>Write Review</h1>
      <div className="reviewForm_container">
        <img src={reviewImg} alt="review-img" />
        <Form onSubmit={save}>
          <div>
            <label>Course Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Review Content:</label>
            <textarea
              className="form-control"
              placeholder="Write your review here"
              style={{ height: "100px" }}
              value={review_for}
              onChange={handleReviewChange}
              required
            />
          </div>

          <div>
            <label>Overall Rating:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter overall rating (out of 5)"
              maxLength={5}
              value={overall_rating}
              onChange={(e) =>
                setOverall_rating(Math.min(5, Math.max(1, e.target.value)))
              }
              required
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              // role="switch"
              id="custom-switch"
              checked={is_publish}
              onChange={() => setIs_publish(!is_publish)}
            />
            <label className="form-check-label" htmlFor="custom-switch">
              Publish Review: <span style={{color:"gray",fontWeight:"bold"}}>{is_publish ? 'YES' : 'NO'}</span>
            </label>
          </div>

          <Button type="submit" >
            Submit Review
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ReviewForm;
