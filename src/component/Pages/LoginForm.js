import React, { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../Services/User_service";
import { doLogin } from "../../auth/index";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/loginImg.png";

function LoginForm() {
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handlechange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    //validation
    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("Username or Password is Requried..!");
      return;
    }

    // submit the data to server to generate the token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);
        //save data to localStorage
        doLogin(data, () => {
          console.log("login details is save to local storage");
          // redirect to dashboard page
          navigate("/myProfile");
        });

        toast.success("Login Success  :)");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 500) {
          toast.error(error.response.data.message);
        } else {
          toast.error("something went wrong on server..!!");
        }
      });
  };

  return (
    <>
      <h1 className="loginTitle">LOGIN </h1>
      <div id="login_container">
        <img src={loginImg} alt="loginImg" />
        <div className="loginPage">
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="loginUsername">Username:</label>
              <input
                className="form-control"
                type="text"
                id="loginUsername"
                name="loginUsername"
                value={loginDetail.username}
                onChange={(e) => handlechange(e, "username")}
              />
            </div>
            <div>
              <label htmlFor="loginPassword">Password:</label>
              <input
                className="form-control"
                type="password"
                id="loginPassword"
                name="loginPassword"
                value={loginDetail.password}
                onChange={(event) => handlechange(event, "password")}
              />
            </div>
            <div className="signinBtn">
              <button className="btn btn-primary mt-4" type="submit">
                Login
              </button>
              <p>
                Already have an account? Click here to{" "}
                <Link to="/registration">SIGN-UP</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
