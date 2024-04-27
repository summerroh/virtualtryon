const Social = () => {
  const socialList = [
    { platform: "facebook-f", url: "#" },
    { platform: "twitter", url: "#" },
    { platform: "linkedin", url: "#" },
  ];

  return (
    <ul className="d-flex justify-content-center social-icon style-none">
      {socialList.map((social) => (
        <li key={social.platform}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <i className={`fab fa-${social.platform}`} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
