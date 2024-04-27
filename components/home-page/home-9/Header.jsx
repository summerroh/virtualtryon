"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PortfolioMenu from "../../header/PortfolioMenu";

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
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_04.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <button
              className="sidebar-nav-button d-none d-lg-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span></span>
            </button>
          </div>
          {/* /.right-widget */}
          <PortfolioMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
