import React, { useState } from "react";

function DesignCourseList() {
  const Designcourses = {
    BPharm: ["AYURVED", "PHARAMACEUTICS", "PHARMACOLOGY", "PHARMACY"],
    BPharmaLET: [
      "B. PHARAM",
      "B.PHARM LET",
      "D. PHARMA",
      "DIPLOMA",
      "M. PHARM",
      "PG DIPLOMA",
      "PH D.",
      "PH.D/M.PHIL",
      "PHARM. D.",
    ],
    DPHARAMA: ["ALLOPATHIC", "PHARMACY"],
    DIPLOMA: ["PHARMACY", "RURAL HEALTH CARE"],
    MPHARMA: ["ALLOPATHIC", "INDUSTRIAL PHARMACY", "B. PHARM + MBA"],
    PGDIPLOMA: ["CLINIC DIAGNOSTICS", "CLINIC PATHALOGY AND DIAGNOSTICS"],
    PHD: ["PHARMACY"],
    PHDMPHIL: [],
    PHARMAD: ["DOCTOR OF PHARMACY", "POST BACCALAUREATE"],
  };
  const [selectedCourse, setSelectedCourse] = useState("");
  const [subDesigncourses, setSubDesigncourses] = useState([]);

    const handleCourseChange=(e)=>{
      const course =e.target.value;
      setSelectedCourse(course);
      setSubDesigncourses(Designcourses[course] || []);
    };
    const handlesubcourseChange = (e) => {
      const subcourse = e.target.value;
      setSubDesigncourses([subcourse]);
    };


  return (
    <div id="SelectCourse" className="refine_container">
      <div>
        <label>Select Course:</label>
        <select
          id="DesigncourseSelect"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="" disabled>
            Select course
          </option>
          {Object.keys(Designcourses).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Sub-Course:</label>
        <select
          id="subDesigncourseSelect"
          value={subDesigncourses[0] || ""}
          onChange={handlesubcourseChange}
        >
          <option value="" disabled>
            Select sub-course
          </option>
          {subDesigncourses &&
            subDesigncourses.map((subCourse) => (
              <option key={subCourse} value={subCourse}>
                {subCourse}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default DesignCourseList;
