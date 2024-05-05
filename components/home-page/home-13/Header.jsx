"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./components/NavMenu";
import RightNavMenu from "./components/RightNavMenu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

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
            {/*
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_04.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
            */}
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <RightNavMenu />
          </div>
          {/* /.right-widget */}
          <NavMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
