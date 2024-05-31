import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileDrawer } from "../header/MobileDrawer";

const navItems = [
  { title: "Login", href: "/login", loggedIn: false },
  { title: "Dashboard", href: "/dashboard", loggedIn: true },
];

export default function RightNavMenu({ user }) {
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
    <nav
      className={`navbar navbar-expand-lg order-lg-2 ${
        scrollingStarted ? "scrolling" : ""
      }`}
    >
      <div className="block lg:hidden">
        <MobileDrawer />
      </div>

      <div className="navbar-collapse" id="one-page-nav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_04.png"
                  alt="logo"
                  width={90}
                  height={25}
                />
              </Link>
            </div>
          </li>
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
