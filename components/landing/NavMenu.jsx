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
  const [isScrolling, setIsScrolling] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
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
        isScrolling ? "scrolling" : ""
      }`}
    >
      <div className="flex">
        <ul className="flex flex-row space-x-12">
          {navItems
            .filter((navItem) => !navItem.loggedIn || user)
            .map((navItem, i) => (
              <li key={i} className="nav-item">
                <a
                  className={`font-medium text-lg ${
                    isScrolling ? "text-dark" : "text-white"
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
