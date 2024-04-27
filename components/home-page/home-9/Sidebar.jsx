import Link from "next/link";
import { navItems } from "@/data/menu";

const Sidebar = () => {
  const socialIcons = [
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
  ];

  return (
    <div
      className="offcanvas offcanvas-end sidebar-nav d-flex flex-column"
      tabIndex={-1}
      id="offcanvasRight"
    >
      <div className="offcanvas-header">
        <div className="logo">
          <Link href="/" className="d-block">
            <img src="/images/logo/logo_04.png" alt="" width={90} />
          </Link>
        </div>
        <button
          type="button"
          className="close-btn tran3s"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="bi bi-x-lg" />
        </button>
      </div>
      {/* End header */}

      <div className="sidebar-nav-item">
        <ul className="style-none">
          {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
              {item.submenuItems ? (
                <>
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu">
                    {item.submenuItems.map((subitem, index) => (
                      <li key={index}>
                        <Link href={subitem.link} className="dropdown-item">
                          <span>{subitem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.link}>{item.title}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* End .sidebar-nav-item */}

      <ul className="d-flex social-icon style-none mt-auto">
        {socialIcons.map((item, index) => (
          <li key={index}>
            <a href={item.url}>
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>

      <p className="pt-10 fs-15">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          style={{ color: "inherit" }}
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>{" "}
        inc.
      </p>
    </div>
  );
};

export default Sidebar;
