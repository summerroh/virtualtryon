const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "Pricing", url: "/" },
      { label: "About us", url: "/" },
      { label: "Service", url: "/" },
      { label: "Blog", url: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Item Support", url: "/" },
      { label: "Forum", url: "/" },
      { label: "Report Abuse", url: "/" },
      { label: "Live", url: "/" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Web hosting", url: "/" },
      { label: "Cloud hosting", url: "/" },
      { label: "WordPress hosting", url: "/" },
      { label: "VPS hosting", url: "/" },
      { label: "Dedicated hosting", url: "/" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
