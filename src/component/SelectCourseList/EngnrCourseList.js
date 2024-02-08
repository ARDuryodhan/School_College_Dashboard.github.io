import React, { useState } from "react";

function EngnrCourseList() {
  const Engnrcourses = {
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
  const [subEngnrcourses, setSubEngnrcourses] = useState([]);

    const handleCourseChange=(e)=>{
      const course =e.target.value;
      setSelectedCourse(course);
      setSubEngnrcourses(Engnrcourses[course] || []);
    };
    const handlesubcourseChange = (e) => {
      const subcourse = e.target.value;
      setSubEngnrcourses([subcourse]);
    };


  return (
    <div id="SelectCourse" className="refine_container">
      <div>
        <label>Select Course:</label>
        <select
          id="Engnrcourseselect"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="" disabled>
            Select course
          </option>
          {Object.keys(Engnrcourses).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Sub-Course:</label>
        <select
          id="subEngnrcourseselect"
          value={subEngnrcourses[0] || ""}
          onChange={handlesubcourseChange}
        >
          <option value="" disabled>
            Select sub-course
          </option>
          {subEngnrcourses &&
            subEngnrcourses.map((subCourse) => (
              <option key={subCourse} value={subCourse}>
                {subCourse}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default EngnrCourseList;
