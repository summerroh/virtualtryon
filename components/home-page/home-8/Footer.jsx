"use client";

import Link from "next/link";
import { useState } from "react";

const footerLinks = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pages-menu/pricing" },
      { label: "About us", href: "/pages-menu/about-us-v1" },
      { label: "Careers", href: "/blog/blog-v1" },
      { label: "Features", href: "/pages-menu/service-v1" },
      { label: "Demo the product", href: "/blog/blog-v1" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of use", href: "/pages-menu/faq" },
      { label: "Terms & conditions", href: "/pages-menu/faq" },
      { label: "Privacy policy", href: "/pages-menu/faq" },
      { label: "Cookie policy", href: "/pages-menu/faq" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Take the tour", href: "/pages-menu/faq" },
      { label: "Live chat", href: "/pages-menu/faq" },
      { label: "Self-service", href: "/pages-menu/faq" },
      { label: "Social", href: "/pages-menu/faq" },
      { label: "Collaboration", href: "/pages-menu/faq" },
      { label: "Jano Reviews", href: "/pages-menu/faq" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="col-lg-4 form-widget mb-30">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo/logo_05.png" alt="" width={95} />
          </Link>
        </div>
        <h6 className="pt-40 pb-10 text-white fw-normal">
          Join our newsletter
        </h6>
        <form
          onSubmit={handleSubmit}
          action="#"
          className="position-relative me-xxl-5"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="fw-500 position-absolute">
            Subscribe
          </button>
        </form>
        <div className="fs-14 mt-10 text-white opacity-50">
          We only send interesting and relevant emails.
        </div>
      </div>
      {/* End .col */}
      {footerLinks.map((section) => (
        <div className="col-lg-2 col-sm-4 ms-auto mb-30" key={section.title}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
