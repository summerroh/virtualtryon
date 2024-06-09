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

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-four ${
        navbar ? "fixed" : ""
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
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <RightNavMenu user={user} />
          </div>
          <NavMenu user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;
