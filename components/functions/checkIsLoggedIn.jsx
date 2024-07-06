// used in dashboard pages
// check coockies for idToken. if no idToken, redirect them to login page

"use client";

import { parse } from "cookie";

export function checkIsLoggedIn() {
  if (typeof document !== "undefined") {
    const cookies = parse(document.cookie);
    const idToken = cookies.idToken;
    return !!idToken;
  }
  return false;
}

export function getUserToken() {
  if (typeof document !== "undefined") {
    const cookies = parse(document.cookie);
    return cookies.idToken || null;
  }
  return null;
}

export function checkIsVerified() {
  if (typeof document !== "undefined") {
    const cookies = parse(document.cookie);
    return cookies.isVerified === "true";
  }
  return false;
}
