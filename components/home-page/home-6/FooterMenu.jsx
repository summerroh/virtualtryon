import Link from "next/link";
import React from "react";

const footerData = [
  {
    title: "Links",
    className: "col-lg-3 col-sm-4 ms-auto mb-30",
    links: [
      { label: "Home", href: "/" },
      { label: "Pricing", href: "/pages-menu/pricing" },
      { label: "About us", href: "/pages-menu/about-us-v1" },
      { label: "Careers", href: "/blog/blog-v2" },
      { label: "Features", href: "/pages-menu/service-v1" },
      { label: "Demo the product", href: "/blog/blog-v3" },
    ],
  },
  {
    title: "Legal",
    className: "col-lg-3 col-sm-4 mb-30",
    links: [
      { label: "Terms of use", href: "/pages-menu/faq" },
      { label: "Terms & conditions", href: "/pages-menu/faq" },
      { label: "Privacy policy", href: "/pages-menu/faq" },
      { label: "Cookie policy", href: "/pages-menu/faq" },
    ],
  },
  {
    title: "Products",
    className: "col-xl-2 col-lg-3 col-sm-4 mb-30",
    links: [
      { label: "Take the tour", href: "/blog/1" },
      { label: "Live chat", href: "/blog/2" },
      { label: "Self-service", href: "/blog/3" },
      { label: "Social", href: "/blog/4" },
      { label: "Collaboration", href: "/blog/4" },
      { label: "Jano Reviews", href: "/blog/5" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 footer-intro mb-40">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo/logo_01.png" alt="logo" width={95} />
              </Link>
            </div>
            <a href="#" className="email tran3s fs-18 mt-35 mb-15 md-mt-10">
              januinc@company.com
            </a>
            <br />
            <a href="#" className="mobile tran3s fs-20 fw-500">
              +757 699-4478
            </a>
          </div>
          {footerData.map(({ title, className, links }) => (
            <div className={className} key={title}>
              <h5 className="footer-title tx-dark fw-500">{title}</h5>
              <ul className="footer-nav-link style-none">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;
