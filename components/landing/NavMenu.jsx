import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { title: "Services", href: "#services", loggedIn: false },
  { title: "Pricing", href: "#pricing", loggedIn: false },
  { title: "FAQ", href: "#faq", loggedIn: false },
  // { title: "Dashboard", href: "#s5", loggedIn: true },
];

const NavMenu = ({ user }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [scrollingStarted, setScrollingStarted] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollingStarted(true);
      } else {
        setScrollingStarted(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Adjust scroll position with a timeout to ensure smooth scroll completes first
        // setTimeout(() => {
        //   const buffer = 100; // Adjust this value as needed
        //   window.scrollBy(0, -buffer);
        // }, 300); // Adjust this timeout value if necessary
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg order-lg-2 ${
        scrollingStarted ? "scrolling" : ""
      }`}
    >
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
            .filter((navItem) => !navItem.loggedIn || user)
            .map((navItem, i) => (
              <li key={i} className="nav-item">
                <a
                  className={`nav-link ${activeLink === i ? "active" : ""} ${
                    scrollingStarted ? "scrolling" : ""
                  }`}
                  href={navItem.href}
                  onClick={() => setActiveLink(i)}
                >
                  {navItem.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
