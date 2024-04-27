import React from "react";

const socialMedia = [
  {
    iconClass: "fab fa-facebook-square",
    link: "#",
  },
  {
    iconClass: "fab fa-twitter-square",
    link: "#",
  },
  {
    iconClass: "fab fa-linkedin",
    link: "#",
  },
  {
    iconClass: "fab fa-dribbble-square",
    link: "#",
  },
];

const Social = () => {
  return (
    <ul className="d-flex justify-content-center social-icon style-none">
      {socialMedia.map((item, index) => (
        <li key={index}>
          <a href={item.link}>
            <i className={item.iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
