import React, { useState } from "react";

function PharmaCourseList() {
  const Pharmacourses = {
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
  const [subPharmaCourses, setSubPharmaCourses] = useState([]);

    const handleCourseChange=(e)=>{
      const course =e.target.value;
      setSelectedCourse(course);
      setSubPharmaCourses(Pharmacourses[course] || []);
    };
    const handlesubcourseChange = (e) => {
      const subcourse = e.target.value;
      setSubPharmaCourses([subcourse]);
    };


  return (
    <div id="SelectCourse" className="refine_container">
      <div>
        <label>Select Course:</label>
        <select
          id="PharmacourseSelect"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="" disabled>
            Select course
          </option>
          {Object.keys(Pharmacourses).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Sub-Course:</label>
        <select
          id="subPharmaCourseSelect"
          value={subPharmaCourses[0] || ""}
          onChange={handlesubcourseChange}
        >
          <option value="" disabled>
            Select sub-course
          </option>
          {subPharmaCourses &&
            subPharmaCourses.map((subCourse) => (
              <option key={subCourse} value={subCourse}>
                {subCourse}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default PharmaCourseList;
