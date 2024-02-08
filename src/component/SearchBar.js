import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function SearchBar() {
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="serachBar_container">
      <div className="searchItem">
        <InputGroup>
          <select
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
            style={{ width: "9vw", height: "7.8vh" }}
          >
            <option value="College">College</option>
            <option value="School">School</option>
            <option value="University">University</option>
            <option value="Coaching">Coaching</option>
          </select>

          <Form.Control
            aria-label="Text input with dropdown button"
            placeholder="Search Colleges/Schools/University/Coaching"
          />
          <Button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Button>
        </InputGroup>
        <div className="infoBtn">
          <Button>
            <i className="fa-solid fa-building-columns"></i> Colleges
          </Button>
          <Button>
            <i className="fa-solid fa-school"></i> Schools
          </Button>
          <Button>
            <i className="fa-solid fa-graduation-cap"></i> University
          </Button>
          <Button>
            <i className="fa-solid fa-person-chalkboard"></i> Coaching
          </Button>
          <Button className="contactBtn">
            <i className="fa-solid fa-clipboard-question"></i> Confused..?
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
