import Link from "next/link";

const links = [
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
  {
    title: "Refund Policy",
    href: "/refund",
  },
];

const icons = [
  {
    icon: "fab fa-facebook-f",
    href: "https://www.facebook.com/",
  },
  {
    icon: "fab fa-twitter",
    href: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li className="px-2">
      <Link href={href} className="text-gray-500 hover:text-gray-900">
        {title}
      </Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  return (
    <li className="px-2">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <i className={`${icon} text-gray-500 hover:text-gray-900`} />
      </Link>
    </li>
  );
};

const CopyrightFooter = () => {
  return (
    <div className="bg-dark pt-40">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            {links.map((link, index) => (
              <LinkItem key={index} title={link.title} href={link.href} />
            ))}
          </ul>
          <ul className="flex flex-row items-center mb-4 md:mb-0">
            {icons.map((icon, index) => (
              <IconItem key={index} icon={icon.icon} href={icon.href} />
            ))}
          </ul>
          <p className="text-gray-500 text-center">
            Copyright © {new Date().getFullYear()}{" "}
            <a
              className="text-gray-500 hover:text-gray-900"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Virtual Try On
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
