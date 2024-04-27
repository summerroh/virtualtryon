const Social = () => {
  const socialIcons = [
    {
      href: "#",
      iconClass: "fab fa-facebook-square",
    },
    {
      href: "#",
      iconClass: "fab fa-twitter-square",
    },
    {
      href: "#",
      iconClass: "fab fa-linkedin",
    },
    {
      href: "#",
      iconClass: "fab fa-dribbble-square",
    },
  ];

  return (
    <ul className="d-flex justify-content-center social-icon style-none">
      {socialIcons.map((socialIcon, index) => (
        <li key={index}>
          <a href={socialIcon.href}>
            <i className={socialIcon.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
