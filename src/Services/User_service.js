// import axios from "axios";
import { MyAxios } from "./helper";
// import { response } from "express";

export const Registration = (user) => {
  return MyAxios.post("localhost:8080/user/create", user).then((response) =>
    response.json()
  );
};

export const loginUser = (loginDetail) => {
  return MyAxios.post(
    "http://localhost:8080/generate-token-authentication",
    loginDetail
  ).then((response) => `Bearer ${response.data.token}`);
};

// export const Query = (query, token) => {
//   console.log("Token:", token); // Log the token for debugging
//   return MyAxios.post("http://localhost:8080/query/create", query, {
//     headers: {
//       Authorization: token,
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.data);
// };

export const Query = (query) => {
  return MyAxios.post("localhost:8080/query/create", query).then((response) =>
    response.json()
  );
};

export const Review = (reviews, token) => {
  console.log("Token:", token); // Log the token for debugging
  return MyAxios.post("http://localhost:8080/review/create", reviews, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};


export const BankDetails = (bankDetails, token) => {
  console.log("Token:", token); // Log the token for debugging
  return MyAxios.post("http://localhost:8080/bank/addBank", bankDetails, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const changePasswordService = (username, currentPassword, newPassword, token) => {
  console.log("Token:", token); // Log the token for debugging
  return MyAxios.put("http://localhost:8080/changePassword", {
    username: username,
    currentPassword: currentPassword,
    newPassword: newPassword
  }, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  }).then((response) => response.data);
};


// export const changePasswordService = (username, currentPassword, newPassword, token) => {
//   console.log("Token:", token); // Log the token for debugging
//   return MyAxios.put("http://localhost:8080/changePassword", username, currentPassword, newPassword, {
//     headers: {
//       Authorization: token,
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());
// };