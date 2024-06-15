"use client";

import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { MobileDrawer } from "../header/MobileDrawer";

const DashboardHeader = () => {
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
          isScrolling ? "bg-white shadow-lg" : "bg-background-hero"
        }`}
      >
        <div className="relative">
          <div className="flex items-center justify-between">
            <a
              className={`font-recoleta text-xl ${
                !isScrolling ? "text-white" : "text-dark"
              }`}
              href={"/"}
            >
              Virtual Fitting Room
            </a>

            <div className="flex align-items-center ms-auto z-1">
              <div className="block lg:hidden">
                <MobileDrawer isScrolling={isScrolling} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
