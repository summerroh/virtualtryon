"use client";

import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import RightNavMenu from "./RightNavMenu";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user] = useAuthState(auth);
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

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
            <RightNavMenu user={user} />
          </div>
          {/* /.right-widget */}
          <NavMenu user={user} />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
