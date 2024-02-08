import React, { useEffect, useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

function MyReview() {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    loadReviewList();
  }, []);

  const loadReviewList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/review/getAllReview"
      );
      // console.log("Review List Data:", response.data);

      setReviewList(response.data);
    } catch (error) {
      console.error("Error loading Review list:", error);
    }
  };

  return (
    <div className="myreview_container">
      <DashboardHeader />
      <div className="d-flex">
        <div>
          <DashboardSidebar />
        </div>
        <main className="reviewMain_container">
          <Container>
            <h5>My Review</h5>
            <hr />
            <div className="reviewTable">
              <Table bordered hover>
                <thead>
                  <tr className="reviewTable-heading">
                    <th>Review For </th>
                    <th>Course </th>
                    <th>Overall Rating</th>
                    <th> Is Publish</th>
                    <th>Review Date</th>
                    <th>Review Time</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewList
                    .filter((reviewItem) => reviewItem.is_publish === "true")
                    .map((reviewItem, index) => (
                      <tr key={reviewItem.id}>
                        <td>{reviewItem.review_For}</td>
                        <td>{reviewItem.course}</td>
                        <td className="text-center">
                          {reviewItem.overall_Rating}
                        </td>
                        <td className="text-center">
                          {reviewItem.is_publish === "true" ? "YES" : "NO"}
                        </td>
                        <td className="text-center">
                          {new Date(
                            reviewItem.review_date
                          ).toLocaleDateString()}
                        </td>
                        <td className="text-center">{new Date(
                            reviewItem.review_date
                          ).toLocaleTimeString()}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default MyReview;
