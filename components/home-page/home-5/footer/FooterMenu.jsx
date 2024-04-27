const FooterMenu = () => {
  const footerData = [
    {
      title: "About",
      links: [
        { title: "Home", href: "/" },
        { title: "Learn about us", href: "/about-v1" },
        { title: "Careers", href: "/about-v1" },
        { title: "Features", href: "/service-v1" },
        { title: "Blog", href: "/blog-v1" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
    {
      title: "Services",
      links: [
        { title: "Charity", href: "/service-details" },
        { title: "Donation", href: "/service-details" },
        { title: "Fundrising", href: "/service-details" },
        { title: "Our Campaign", href: "/service-details" },
        { title: "Volunteer", href: "/service-details" },
      ],
      colClass: "col-lg-2 col-sm-4 mb-30", // Add col class for this section
    },
  ];

  return (
    <>
      {footerData.map((section, index) => (
        <div className={section.colClass} key={index}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
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
