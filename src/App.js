import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import FindSchool from "./component/Pages/FindSchool";
import HeaderTopSec from "./component/HeaderTopSec";
import HeaderBottomSec from "./component/HeaderBottomSec";
import FindCollege from "./component/Pages/FindCollege";
import FindUniversity from "./component/Pages/FindUniversity";
import FindCoahing from "./component/Pages/FindCoahing";
import FindCourses from "./component/Pages/FindCourses";
import FindExam from "./component/Pages/FindExam";
import Counselling from "./component/Pages/CounselingPage";
import AddSchoolClg from "./component/Pages/AddSchoolClg";
import PharmacyPage from "./component/CoursesPages/PharmacyPage";
import LawPage from "./component/CoursesPages/LawPage";
import DesignPage from "./component/CoursesPages/DesignPage";
import MngtPage from "./component/CoursesPages/MngtPage";
import EngnrPage from "./component/CoursesPages/EngnrPage";
import MedicalPage from "./component/CoursesPages/MedicalPage";
import ArtsPage from "./component/CoursesPages/ArtsPage";
import FooterPage from "./component/Footer";
import GIBSmgtDetails from "./component/InformattionPages/GIBSmgtDetails";
import RegistrationPage from "./component/Pages/RegistrationPage";
import LoginForm from "./component/Pages/LoginForm";
import { ToastContainer } from "react-toastify";

import MyQuery from "./component/Dashboard/MyQuery";
import MyProfile from "./component/Dashboard/MyProfile";
import MyReview from "./component/Dashboard/MyReview";
import QueryForm from "./component/Dashboard/QueryForm";
import ReviewForm from "./component/Dashboard/ReviewForm";
import BankDetails from "./component/Dashboard/BankDetails";
import ChangePassword from "./component/Dashboard/ChangePassword";
import UploadDoc from "./component/Dashboard/UploadDoc";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderTopSec />
        <HeaderBottomSec />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findschool" element={<FindSchool />} />
          <Route path="/findcolleges" element={<FindCollege />} />
          <Route path="/finduniversity" element={<FindUniversity />} />
          <Route path="/findcoachings" element={<FindCoahing />} />
          <Route path="/findcourses" element={<FindCourses />} />
          <Route path="/exams" element={<FindExam />} />
          <Route path="/freeCounselling" element={<Counselling />} />
          <Route path="/addschool+college" element={<AddSchoolClg />} />

          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/myProfile" element={<MyProfile />} />

          <Route path="/phamacy" element={<PharmacyPage />} />
          <Route path="/law" element={<LawPage />} />
          <Route path="/management" element={<MngtPage />} />
          <Route path="/engineering" element={<EngnrPage />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/arts" element={<ArtsPage />} />
          <Route path="/design" element={<DesignPage />} />

          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-review" element={<MyReview />} />
          <Route path="/my-query" element={<MyQuery />} />
          <Route path="/query" element={<QueryForm />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/bankDetails" element={<BankDetails />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/uploadDoc" element={<UploadDoc />} />

          <Route path="/GIBSmgtDetails" element={<GIBSmgtDetails />} />
        </Routes>

        <ToastContainer />

        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
