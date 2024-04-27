"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";

const Header3 = () => {
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
      className={`theme-main-menu sticky-menu theme-menu-nine ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="notice-banner text-center">
        It&lsquo;s the last day to save. The skills for now —{" "}
        <a href="#" className="fw-500">
          now on sale.
        </a>
      </div>
      {/* End notice banner */}

      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="logo order-lg-0">
              <Image
                src="/images/logo/logo_07.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          {/* End logo */}
          <form
            action="#"
            className="header-search-one position-relative order-lg-1 me-auto"
          >
            <input type="text" placeholder="What do you want to learn today?" />
            <Image
              width={20}
              height={20}
              src="/images/icon/icon_122.svg"
              alt="icon"
              className="icon position-absolute"
            />
          </form>
          <div className="right-widget d-flex align-items-center order-lg-3 ms-xxl-5 ms-lg-3">
            <Link
              href="/login"
              className="login-btn-two fw-500 d-none d-lg-flex align-items-center me-4"
            >
              <Image
                width={20}
                height={20}
                src="/images/icon/icon_121.svg"
                alt="icon"
                className="me-2"
              />
              <span>login</span>
            </Link>
            <Link
              href="/signup"
              className="signup-btn-three fw-500 tran3s d-none d-lg-block"
            >
              Sign Up
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header3;
