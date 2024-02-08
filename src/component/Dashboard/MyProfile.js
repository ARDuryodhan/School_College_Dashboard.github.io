import React, { useEffect, useState } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Container } from "react-bootstrap";
import axios from "axios";
import { currentUser } from "../../auth";
import defaultImg from "../../assets/defaultImg.png";

function MyProfile() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  const [image, setImage] = useState({
    placeholder: defaultImg,
  });

  // useEffect(() => {
  //   loadProfile();
  // }, []);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const decodedToken = currentUser();
        // console.log("User object:", decodedToken);

        if (decodedToken) {
          const response = await axios.get(
            `http://localhost:8080/user/${decodedToken.sub}`
          );
          // console.log("profile data", response.data);`

          setProfile(response.data);
          if (response.data.profileImage) {
            setImage({ placeholder: response.data.profileImage });
          }
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log("Error Profile", error);
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return (
    <div className="myreview_container">
      <DashboardHeader />
      <div className="d-flex">
        <div>
          <DashboardSidebar />
        </div>
        <main className="reviewMain_container">
          <Container>
            <h5>My Profile</h5>
            <hr />
            <div className="profileContainer">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div>
                      {profile ? (
                        <>
                          <div className="userImage">
                            <img src={image.placeholder} alt="defaultImg" />
                          </div>
                          <div className="UserInfo">
                            <div className="row">
                              <p className="col-3"> Username </p>
                              <p className="col-4">{profile.username}</p>
                            </div>

                            <div className="row">
                              <p className="col-3"> Email </p>
                              <p className="col-4"> {profile.email}</p>
                            </div>

                            <div className="row personal-info">
                              <p className="col-3">First Name </p>
                              <p className="col-4"> {profile.firstName}</p>
                            </div>

                            <div className="row personal-info">
                              <p className="col-3">Last Name </p>
                              <p className="col-4"> {profile.lastName}</p>
                            </div>

                            <div className="row">
                              <p className="col-3"> Mobile </p>
                              <p className="col-4"> {profile.mobile}</p>
                            </div>
                            {/* <div className="row">
                              <p className="col-3"> Profile Image </p>
                              <p className="col-4"> {profile.profile}</p>
                            </div> */}
                          </div>
                        </>
                      ) : (
                        <p>No profile data found</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default MyProfile;
