import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import examimg1 from "../../assets/examimg2.png";

function FindExam() {
  return (
    <div className="findExamPage">
      <h1>EXAMS</h1>

      <div className="exam_section">
        <div className="exam_row">
          <Card>
            <Card.Title>
              <p>Management Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link>CMAT</Link>
                    </li>
                    <li>
                      <Link>GMAT</Link>
                    </li>
                    <li>
                      <Link>ATMA</Link>
                    </li>
                    <li>
                      <Link>KMAT</Link>
                    </li>
                    <li>
                      <Link>JMET</Link>
                    </li>
                    <li>
                      <Link>SNAP</Link>
                    </li>
                    <li>
                      <Link>MAH CET</Link>
                    </li>
                    <li>
                      <Link>NPAT BBA</Link>
                    </li>
                    <li>
                      <Link>BUMAT</Link>
                    </li>
                    <li>
                      <Link>TANCET</Link>
                    </li>
                    <li>
                      <Link>SUAT MANAGEMENT</Link>
                    </li>
                    <li>
                      <Link>REVA MAT</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Business School Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">GGSIPU CET BBA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SPJAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPMAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIFT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NMAT by GMAC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TISS NET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MICAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IRMASAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">St. Xavier's Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Christ University BBA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UGAT-AIMA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP MBA Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PGCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IBSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TSICET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">B-MAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">X-GMT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DU JAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPES-MET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GOT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AUMAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SRMCAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSEE MBA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">APICET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HPU-MAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PTU-MET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Odisha JEE MBA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JKLU MET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TAP</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Engineering Entrance Exams</p>
            </Card.Title>
            <Card.Img
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GATE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BCECE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Assam CEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KEAM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WBJEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">COMEDK UGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TS EAMCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AP EAMCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">OJEE PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JKCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JEECE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CG PET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUSAT CAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GUJCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIST Admissions UG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIST Admissions PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IISER Admissions</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TNEA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GATE ECE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GATE Chemical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Gate Civil</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MU OET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GATE Life Sciences</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GATE Mechanical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIT JEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MHT CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GATE Instrumentation</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SRMJEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NATA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DTU</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIIT Hyderabad</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIIT Delhi</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPESEAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KIITEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ATIT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DAIICT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JMI EEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AMUEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Chandigarh Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Sikkim Manipal University SMIT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JAYPEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GITAM GAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Punjab Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Haryana Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Sastra University</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BVPCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Nirma University</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">REAP</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Banasthali University Aptitude Test</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KLU EEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Odisha JEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JCECE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RGIPT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Uttrakhand Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LNMIIT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP B.E Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CIPET JEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Tripura JEE (TJEE)</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SAAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BSAUEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TMISAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CENTAC Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">J&amp;K BPEE CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IUET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KRLMPCA CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JAC Delhi</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JUST</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AISEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UCEED</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIIT-B M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NSIT M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">VITMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Karnataka PGCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIIT BH</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AP PGECET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIITM-K exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JNU CEE M.Tech</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Maharashtra M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Gujarat PGCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JIIT PGCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Thapar M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RGIPT M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ISI Admission Test</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LNMIIT- PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Amrita M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Kerala M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Uttarakhand M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PDPU M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ISM EE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPTU M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Nirma M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Chhattisgarh M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TS PGECET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UOHyd M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DASA PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Sastra M.Tech Admissions</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PTU M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WBUT PGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RTU CAM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIIT Delhi PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BITS HD</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CEED</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIITH PGEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SRMGEET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MUOET PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GITAM GAT PGT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUSAT M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Himachal Pradesh M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">VTUEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AUEET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NPAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PESSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JKLU EET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HPCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HITSEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPES M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Thapar JEE Counselling</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LPU NEST</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JMI Admissions</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Uttarakhand Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIEST</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CIEAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SBAIEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SUAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">REVA EET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GLAET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DTU M.Tech Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SAAT PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TANCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KIITEE-PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Medical Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">NEET UG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NEET PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIIMS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIIMS PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JIPMER</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CMC VELLORE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SAAT Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MU OET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KIITEE PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AFMC MBBS Admission</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PGIMER Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CMC Vellore CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">COMEDK Medicine</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NIPER</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Tamil Nadu Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DCECE Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AFMS PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ASSO-CET PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BHU PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Karnataka PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NIMSET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DUPGMET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UP PGMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET PGMC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Goa PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MMU PG CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Gujrat PG Medical Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HP PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Haryana PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Karnataka PGET Dental</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Rajasthan PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Sikkim PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Odisha PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIIMS MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">COMEDK UGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MH CET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BHU Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AMU MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CMC LUDHIANA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MGIMS Wardha Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Amrita MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KCET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DU Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KIMS UG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">D.Y. PATIL AICET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ASSO-CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KEAM Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BVP CET MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AP EAMCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP DMAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WBJEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">St John's MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MGM-CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Yenepoya University Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PIMS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BLDE UGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CG PMT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GCET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SMU MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Haryana Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JKCET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPCMET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CETPPMC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIIMS Nursing</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GUJCET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TS EAMCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MGDCH JET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPCAT DENTAL</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Odisha Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Uttarakhand CPMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NUUGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MAHER</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPUCET Nursing</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SRH University PMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MMU CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Rajasthan PC PMT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Jamia Hamdard MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Jharkhand Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HP Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ASSAM CEE MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KRLMPCA CET MBBS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPMT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TJEE Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIPGMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CMC Vellore PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">COMEDK PGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIPGDEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DNB CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MU OET PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MGMPGCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CMC Ludhiana PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Tamil Nadu PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AP PG MET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BVP PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MH PGMPGDCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KLEU PGAIET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">D. Y. Patil AIPGMET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PIMS AICET PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Kerala PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">YU PGET Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RIMS PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KRLMPCA PGCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HIHT PGMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">FMGE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Punjab PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Assam PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BCECE PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WB PG MAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UKPGMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Jharkhand State PGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPPGMET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PGMET J&amp;K</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Tamil Nadu PG Dental</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Amrita PG Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TNPCEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BCECE Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RUHS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Hotel Management Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">NCHM JEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UGAT-AIMA Hotel Management</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSEE BHMCT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UKSEE BHMCT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WBJEE HM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET BHMCT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PUTHAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Ecole Hoteliere Lavasa</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Oberoi STEP</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IHM-A</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NCHMCT JEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CET BHMCT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MAH HM CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BIT BHMCT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SRM BHMCT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">eCHAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NCHMCT PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Law Entrance Exams</p>
            </Card.Title>
            <Card.Img
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">CLAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AILET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TS LAWCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MH CET Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IAS General Studies</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Defense</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Others</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DU LLB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ULSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET LLB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BHU UET Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Christ University Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JMI Law Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KLEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SET Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KIITEE Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BLAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AMU Law Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LSAT-INDIA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AP LAWCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIL Entrance Test</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BVP CET Law</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PU B.A. LL.B</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PU LLB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RULET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUSAT CAT LLB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ILSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUSAT CAT BBA LLB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HPNET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Calcutta University BA LLB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LFAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MNLUAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Sastra University BA LLB Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">REVA CLAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CLAT PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AILET PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Allahabad University LLM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ILI CAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET LLM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIBE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LSAT India PG</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MNLUAT LLM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TS PGLCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUSAT CAT LLM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AP PGLCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KLEE LLM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DU LLM Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AMU LLM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ACLAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ITLA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Films Making & Journalism Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">FTII Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BVB Mass Communication Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUCET Mass Communication</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">
                        Pune University Mass Communication Admission
                      </Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DCJ University of Mumbai Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JMI Mass Communication Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KIITEE Arts and Humanities</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET BJMC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DU DSJ Entrance Exam</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">St. Xaviers BMM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Christ University BA CEP</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIMC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ACJ</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">XIC OET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SRFTI</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Computer Applications Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">IPU CET BCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIMA UGAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TANCET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PG CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UKSEE MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KEE MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NIMCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">JNU CEE MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BIT MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSEE MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">DUMCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ICET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MAH CET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CUSAT CAT Arts and Humanities</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">B CAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CEE Kerala MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IIITM-K MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IPU CET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AMU MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GCET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KARNATAKA PGCET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CST</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">HARYANA OLET MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Odisha JEE MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PUCSD</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TIET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CG PMC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">K MAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WB JECA MCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KMCA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LUCSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MKU PG ENTRANCE EXAM</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MP MET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PAM CAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RMCAAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Science Entrance Exams</p>
            </Card.Title>
            <Card.Img
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">ASMOC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT Degree</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CATE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AU AIMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Competition Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">IBPS PO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NDA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SBI PO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IBPS Clerk</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SBI Clerk</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CDS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSC CS Prelims</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SSC CGL</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SSC CHSL</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SCRA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSC CS Mains</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SBI Associate Banks Clerk</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SBI Associate Banks PO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RBI Grade B Officer</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SBI SO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IBPS SO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CTET Elementary</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CTET Primary</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RBI Assistant</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IBPS CWE RRB</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NTSE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NSO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NSTSE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NCO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UCO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">INO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ZIO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NSE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UIEO</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NSEJS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SLSTSE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SSTSE Rajasthan</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Pharmacy Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">GPAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MAH-MPHCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PUNJAB CET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">APPGECET Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSEE Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">WBJEE Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">OJEE Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GUJCET Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AIPSSCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BCECE Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UP-CPMT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KLEU-AIET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">AU AIMEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Punjab PMET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Rajasthan Medical</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TANCET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NU PGET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NMAT-P</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GAT UGTP</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CENTAC JET Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">OLET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MT CET Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">EAMCET Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">VYAPAM PEPT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">RPET Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NIPER JEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BITS HD Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">TNPCEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>School Entrance Exams</p>
            </Card.Title>
            <Card.Img
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">NTSE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">KVPY</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Other Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link to="/">CGFNS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">CDS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">MCAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">ACT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">USMLE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PTE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Maths Olympiad</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NDA</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">NTSE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SSC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">UPSC</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Sciences</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">PCAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">SAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BHU PET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">BHU UET</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">
                        IGRUA Entrance Exam for CPL (commercial pilot license)
                      </Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">GRE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">IELTS</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">LSAT</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                    <li>
                      <Link to="/">Aviation</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Main</Link>
                    </li>
                    <li>
                      <Link to="/">BITSAT</Link>
                    </li>
                    <li>
                      <Link to="/">VITEEE</Link>
                    </li>
                    <li>
                      <Link to="/">JEE Advanced</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Universities Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link>
                        BITSAT (Birla Institute of Technology and Science
                        Admission Test):
                      </Link>
                    </li>
                    <li>
                      <Link>
                        VITEEE (VIT Engineering Entrance Examination):
                      </Link>
                    </li>
                    <li>
                      <Link>
                        SRMJEEE (SRM Joint Engineering Entrance Examination):
                      </Link>
                    </li>
                    <li>
                      <Link>Manipal Entrance Test (MET):</Link>
                    </li>
                    <li>
                      <Link>
                        Amrita Entrance Examination - Engineering (AEEE):
                      </Link>
                    </li>
                    <li>
                      <Link>
                        fessional University National Eligibility and
                        Scholarship Test (LPUNEST):
                      </Link>
                    </li>
                    <li>
                      <Link>
                        Thapar Institute of Engineering and Technology Entrance
                        Exam (TIET):
                      </Link>
                    </li>
                    <li>
                      <Link>Symbiosis Entrance Test (SET):</Link>
                    </li>
                    <li>
                      <Link>Christ University Entrance Test:</Link>
                    </li>
                    <li>
                      <Link>Ashoka Aptitude Test (AAT):</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Title>
              <p>Coaching Entrance Exams</p>
            </Card.Title>
            <Card.Img
              variant="top"
              src={examimg1}
              style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <div className="exam_list">
                  <ul>
                    <li>
                      <Link>FIITJEE Talent Reward Exam (FTRE)</Link>
                    </li>
                    <li>
                      <Link>Resonance National Entrance Test (ResoNET)</Link>
                    </li>
                    <li>
                      <Link>Allen Scholarship cum Admission Test (ASAT)</Link>
                    </li>
                    <li>
                      <Link>Akash National Talent Hunt Exam (ANTHE)</Link>
                    </li>
                    <li>
                      <Link>Bansal Classes Scholarship Test (BCST)</Link>
                    </li>
                    <li>
                      <Link>
                        Vibrant Academy Admission Cum Scholarship Test (VAAST)
                      </Link>
                    </li>
                    <li>
                      <Link>Narayana Scholastic Aptitude Test (NSAT)</Link>
                    </li>
                    <li>
                      <Link></Link>
                      Aakash National Eligibility & Scholarship Test (NEST)
                    </li>
                    <li>
                      <Link>Brilliant Pala Talent Search Exam (BTSE)</Link>
                    </li>
                    <li>
                      <Link>Career Point National Admission Test (CPNAT)</Link>
                    </li>
                    <li>
                      <Link>Super 30 Entrance Exam</Link>
                    </li>
                  </ul>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FindExam;
