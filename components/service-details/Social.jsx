const Social = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", link: "#" },
    { icon: "fab fa-twitter", link: "#" },
    { icon: "fab fa-linkedin-in", link: "#" },
    { icon: "fab fa-pinterest", link: "#" },
    { icon: "fab fa-dribbble", link: "#" },
  ];

  return (
    <ul className="d-flex justify-content-between social-icon style-none pe-4">
      {socialLinks.map((link, i) => (
        <li key={i}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <i className={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
