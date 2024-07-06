// used in dashboard pages
// check session storage for idToken. if no idToken, redirect them to login page

"use client";

const idToken =
  typeof window !== "undefined" ? sessionStorage.getItem("idToken") : null;
// const idToken = sessionStorage.getItem("idToken");

export function checkIsLoggedIn() {
  if (!idToken) {
    return false;
  }
  return true;
}

export function getUserToken() {
  return idToken;
}

export function checkIsVerified() {
  // const isVerified = sessionStorage.getItem("isVerified") === "true";
  const isVerified =
    typeof window !== "undefined"
      ? sessionStorage.getItem("isVerified") === "true"
      : false;
  return isVerified;
}
