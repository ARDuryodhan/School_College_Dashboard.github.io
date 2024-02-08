import { jwtDecode } from "jwt-decode";




//user isLogin=>
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data == null) {
    return false;
  } else {
    return true;
  }
};

//doLogin=> data=> set to localstorage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
  window.location.reload();
};

//doLogout=> remove from localStorage

export const doLogout = (next) => {
  localStorage.removeItem("data");

  // next();
  window.location.href = "/";
};



export const currentUser = () => {
  const token = localStorage.getItem("data");
  
  if (token) {
    // Decode the JWT token to get user information
    const decodedToken = jwtDecode(token);

    return decodedToken;
  } else {
    return null; // return null if not logged in
  }
};