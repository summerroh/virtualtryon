import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { title: "About me", href: "#s1" },
  { title: "Services", href: "#s2" },
  { title: "Portfolio", href: "#s3" },
  { title: "Skill", href: "#s4" },
  { title: "Contact", href: "#s5" },
];

const NavMenu = () => {
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
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#one-page-nav"
        aria-controls="one-page-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="one-page-nav">
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
          {navItems.map((navItem, i) => (
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
