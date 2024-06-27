"use client";

import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import RightNavMenu from "./RightNavMenu";
import { MobileDrawer } from "../header/MobileDrawer";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isScrolling, setIsScrolling] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
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
    <>
      <div
        className={`px-10 md:px-20 py-6 lg:py-4 z-30 fixed w-full transition-colors duration-500 ${
          isScrolling ? "bg-white shadow-header" : "bg-background-hero"
        }`}
      >
        <div className="relative">
          <div className="flex items-center justify-between">
            <a
              className={`font-recoleta text-xl text-medium ${
                !isScrolling ? "text-white" : "text-dark"
              }`}
              href={"/"}
            >
              Virtual Try On
            </a>

            <div className="flex align-items-center ms-auto ms-lg-0 order-lg-3 z-1">
              <RightNavMenu user={user} isScrolling={isScrolling} />
            </div>
            <div className="hidden lg:block">
              <NavMenu user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
