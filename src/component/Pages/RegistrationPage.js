import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signupImg from "../../assets/signupImg.png";
import userpic from "../../assets/userPic.jpeg";

function RegistrationPage() {
  // const [profileImg, setProfileImg] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:8080/user/create", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        mobile: mobile,
        username: username,
        password: password,
      });
      toast.success("Registation Successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setUsername("");
      setPassword("");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/loginForm");
    } catch (err) {
      toast.error("User Registation Failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <h2 className="signupTitle">SIGN-UP</h2>
      <div id="registration_container">
        <img src={signupImg} alt="signupImg" className="signupImg" />
        <div className="registrationPage">
          <form>
            <div className="userPicBox">
              <img src={userpic} alt="userpic" className="userpic" />
              {/* <input type="file" name="userpic" className="from-control" /> */}
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
              />
            </div>

            <div className="input-group " style={{ gap: "0rem 1rem" }}>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="mobile">Mobile:</label>
              <input
                className="form-control"
                type="number"
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(event) => {
                  setMobile(event.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="signupBtn">
              <button className="btn btn-primary" type="submit" onClick={save}>
                {loading ? "Registering..." : "Register"}
              </button>
              {loading && <p>Loading...</p>}
              <p>
                Already have an account? Click here to{" "}
                <Link to="/loginForm">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
