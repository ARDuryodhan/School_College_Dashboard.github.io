import React, { useState } from "react";

function LawCourseList() {
  const Lawcourses = {
    "BA LLB(HONS.)": [
      "BACHELOR OF ART AND BACHELOR OF LAW HONORRS"
    ],

    'BBA LLB(HONS.)': [
      "BACHELOR OF ART AND BACHELOR OF LEGISLATIVE LAW",
      "BUSINESS LAW",
      "CONSTITUTIONAL LAW",
      "CRIMINAL LAW",
      "INTELLECTUAL PROPERTY RIGHTS LAW",
      "INTERNATIONAL LAW",
      "LAW",
    ],

    'BCOM LLB': [
      "LAW", "BACHELOR OF COMMERCE AND BACHELOR OF LEGISLATIVE LAW"
    ],

    'BSC LLB': [
      "BACHELOR OF SCIENCE AND BACHELOR OF LEGISLATIVE LAW"
    ],

    'BA': [
      "LEGAL STUDIES"
    ],

    'BBA LLB': [
      "BACHELOR OF BUSINESS ADMINISTRATION AND BACHELOR OF LEGISLATIVE LAW",
    ],

    'CERTIFICATE COURSE': [
      ""
    ],

    'LLB': [
      "BACHELOR OF LAW",
      "BACHELOR OF LEGISLATIVE LAW",
      "LAW",
      "LLB(WEEKEND)",
    ],

    'LLB (HONS.)': [
      "BACHELOR OF LAW"
    ],

    'LLM': [
      "ALTERNATIVE DISPUTE RESOLUTION",
      "BANKING AND FINANCE ",
      "BUSINESS AND CORPORATE LAW",
      "BUSINESS LAW ",
      "COMMERCIAL ARBITRATION",
      "COMMERCIAL LAW ",
      "CONSTITUTIONAL &amp; ADMINISTRATIVE LAW",
      "CONSTITUTIONAL LAW ",
      "CORPORATE AND COMMERCIAL LAW",
      "CORPORATE AND FINANCIAL LAW",
      "CORPORATE AND SECURITIES LAW",
      "CORPORATE LAW ",
      "CRIMES AND TORTS LAW",
      "CRIMINAL AND SECURITY LAW",
      "CYBER LAW ",
      "HUMAN RIGHTS ",
      "INTELLECTUAL PROPERTY AND TRADE LAW",
      "INTELLECTUAL PROPERTY RIGHTS",
      "INTELLECTUAL PROPERTY RIGHTS AND TECHNOLOGY LAW",
      "INTERNATIONAL LAW ",
      "INTERNATIONAL AND COMPARATIVE LAW",
      "INTERNATIONAL TRADE AND INVESTMENT LAW",
      "INTERNATIONAL TRADE LAW",
      "LABOR LAW ",
      "LABOUR &amp; INDUSTRIAL LAW",
      "LABOUR LAW AND ADMINISTRATIVE LAW",
      "LAW ",
      "LEGAL STUDIES ",
      "MARITIME LAW ",
      "MASTER OF LAWS ",
      "PEDAGOGY AND RESEARCH",
      "TAXATION LAW ",
      "TECHNOLOGY LAW ",
    ],

    'M.PHIL': [
      "LAW STUDIES"
    ],

    'PG DIPLOMA': [
      "AIR &amp; SPACE LAW",
      "BUSINESS LAW",
      "CHILD RIGHTS LAW",
      "CONSUMER LAWS",
      "CYBER LAW",
      "ENVIRONMENTAL LAW",
      "HUMAN RIGHTS",
      "HUMAN RIGHTS AND INTERNATIONAL HUMANITARIAN LAW",
      "LABOUR LAW",
      "MEDIA LAW",
      "TAXATION LAW",
    
    ],

    'PHD': [
      "LAW STUDIES"
    ]
  }



  const [selectedCourse, setSelectedCourse] = useState("");
  const [subLawcourses, setSubLawcourses] = useState([]);

    const handleCourseChange=(e)=>{
      const course =e.target.value;
      setSelectedCourse(course);
      setSubLawcourses(Lawcourses[course] || []);
    };
    const handlesubcourseChange = (e) => {
      const subcourse = e.target.value;
      setSubLawcourses([subcourse]);
    };


  return (
    <div id="SelectCourse" className="refine_container">
      <div>
        <label>Select Course:</label>
        <select
          id="Lawcourseselect"
          value={selectedCourse}
          onChange={handleCourseChange}
        >
          <option value="" disabled>
            Select course
          </option>
          {Object.keys(Lawcourses).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Sub-Course:</label>
        <select
          id="subLawcourseselect"
          value={subLawcourses[0] || ""}
          onChange={handlesubcourseChange}
        >
          <option value="" disabled>
            Select sub-course
          </option>
          {subLawcourses &&
            subLawcourses.map((subCourse) => (
              <option key={subCourse} value={subCourse}>
                {subCourse}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default LawCourseList;
