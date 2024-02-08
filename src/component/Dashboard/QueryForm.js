import React, { useState } from "react";
import { MyAxios } from "../../Services/helper";

function QueryForm() {
  const [queryCategory, setQueryCategory] = useState("");
  const [queryDescription, setQueryDescription] = useState("");
  const [date, setDate] = useState("");

  // const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    if (!queryCategory || !queryDescription) {
      alert("Please fill in all");
      return;
    }
    
    try {
      setQueryCategory("");
      setQueryDescription("");
      setDate("")

      

      await MyAxios.post("/query/create", {
        queryCategory: queryCategory,
        queryDescription: queryDescription,
        date: date,
        status: "open",
      });

      alert("Query Submitted successfully");
      setQueryCategory("");
      setQueryDescription("");
      setDate("");
      
    } catch (err) {
      alert("Query Submission failed");
      console.error(err);
    }
  }

  const handleCategoryChange = (event) => {
    setQueryCategory(event.target.value);
  };

  return (
    <div id="queryContainer container-fluid ">
      <h2>Query </h2>
      <div className="queryForm_container">
        <form className="form-control">
          <div>
            <label>Query Category:</label>
            <select
              className="form-select"
              id="queryCategory"
              name="queryCategory"
              value={queryCategory}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select Query Category</option>
              <optgroup label="Admission Query">
                <option value="Course Details">Course Details</option>
                <option value="Eligibility Criteria">
                  Eligibility Criteria
                </option>
                <option value="Fees Details">Fees Details</option>
                <option value="Form Correction">Form Correction</option>
              </optgroup>
              <optgroup label="General Query">
                <option value="Hostel">Hostel</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Other General Queries">
                  Other General Queries
                </option>
              </optgroup>
              <optgroup label="Technical Query">
                <option value="Payment Issues">Payment Issues</option>
                <option value="Other Technical Queries">
                  Other Technical Queries
                </option>
              </optgroup>
            </select>
          </div>
          <div>
            <label>Query Description:</label>
            <textarea
              className=" form-control"
              type="text"
              id="mobile"
              name="mobile"
              value={queryDescription}
              onChange={(event) => {
                setQueryDescription(event.target.value);
              }}
              required
            />
            <button className="btn btn-primary" type="submit" onClick={save}>
              Sumbmit Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QueryForm;
