import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileDrawer } from "../header/MobileDrawer";

const navItems = [
  { title: "Login", href: "/login", loggedIn: false },
  { title: "Dashboard", href: "/dashboard", loggedIn: true },
];

export default function RightNavMenu({ user, isScrolling }) {
  const [activeLink, setActiveLink] = useState(0);
  const [scrollingStarted, setScrollingStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollingStarted(true);
      } else {
        setScrollingStarted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scrollingStarted ? "scrolling" : ""}`}>
      {/* <div className="block lg:hidden"> */}
      <div className="block hidden">
        <MobileDrawer isScrolling={isScrolling} />
      </div>

      <div>
        <ul
          className={`font-medium text-lg ${
            isScrolling ? "text-dark" : "text-white"
          }`}
        >
          {navItems
            .filter((navItem) => navItem.loggedIn === !!user)
            .map((navItem, i) => (
              <li key={i} className="nav-item">
                <Link href={navItem.href}>
                  <div
                    className={`nav-link ${activeLink === i ? "active" : ""} ${
                      scrollingStarted ? "scrolling" : ""
                    }`}
                    onClick={() => setActiveLink(i)}
                  >
                    {navItem.title}
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}
