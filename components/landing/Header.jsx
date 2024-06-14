"use client";

import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import RightNavMenu from "./RightNavMenu";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const Header = () => {
  const [user] = useAuthState(auth);
  const [navbar, setNavbar] = useState(false);

  console.log("user", user);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  //   box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.1);

  return (
    <header
      className={`px-10 md:px-20 py-2 z-10 fixed w-full transition-colors duration-500 ${
        navbar ? "fixed bg-white shadow-lg" : "bg-background-hero"
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <a
              className={`nav-link font-recoleta fs-20 ${
                !navbar ? "white-color" : ""
              }`}
              href={"#"}
            >
              Virtual Fitting Room
            </a>
          </div>
          <div className="d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <RightNavMenu user={user} navbar={navbar} />
          </div>
          <NavMenu user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
