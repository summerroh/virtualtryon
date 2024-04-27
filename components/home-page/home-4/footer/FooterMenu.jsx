const FooterMenu = () => {
  const footerData = [
    {
      title: "Solution",
      links: [
        { title: "Home", href: "/" },
        { title: "Learn about us", href: "/pages-menu/about-us-v1" },
        { title: "Careers", href: "/" },
        { title: "Features", href: "/pages-menu/service-v1" },
        { title: "Blog", href: "/blog/blog-v1" },
      ],
      colClass: "col-xl-2 col-lg-3 col-sm-4 ms-auto mb-30", // Add col class for this section
    },
    {
      title: "Products",
      links: [
        { title: "Charity", href: "/pages-menu/service-details" },
        { title: "Donation", href: "/pages-menu/service-details" },
        { title: "Fundrising", href: "/pages-menu/service-details" },
        { title: "Our Campaign", href: "/pages-menu/service-details" },
        { title: "Volunteer", href: "/pages-menu/service-details" },
      ],
      colClass: "col-lg-3 col-sm-4 mb-30", // Add col class for this section
    },
  ];

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-bold">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenu;
