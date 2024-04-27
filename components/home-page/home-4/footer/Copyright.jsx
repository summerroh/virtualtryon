"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", link: "/about-v1" },
  { label: "Blog", link: "/blog-v1" },
  { label: "Contact", link: "/contact" },
  { label: "Privacy", link: "/faq" },
  { label: "Policy", link: "/faq" },
];

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Copyright = () => {
  const [year, setYear] = useState(getCurrentYear());

  return (
    <div className="bottom-footer d-md-flex align-items-center justify-content-between">
      <ul className="d-flex flex-wrap justify-content-center justify-content-md-start footer-nav style-none pb-15 order-md-last">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <p className="copyright text-center mb-15 text-white order-md-first">
        © 20022 - {year} jano inc.
      </p>
    </div>
  );
};

export default Copyright;
