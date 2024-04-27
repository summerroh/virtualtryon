const tabData = [
  {
    id: "sp1",
    title: "Create task",
    subtitle: "for any team person",
    image: "/images/media/img_06.jpg",
  },
  {
    id: "sp2",
    title: "Make timeframe",
    subtitle: "for do the task",
    image: "/images/media/img_05.jpg",
  },
  {
    id: "sp3",
    title: "Get task complated",
    subtitle: "by your member",
    image: "/images/media/img_06.1.jpg",
  },
];

const ProductTabs = () => {
  return (
    <>
      <ul
        className="nav nav-tabs d-block d-md-flex justify-content-between"
        data-aos="fade-up"
        role="tablist"
      >
        {tabData.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === "sp1" ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
            >
              {tab.title}
              <span className="d-none d-lg-inline-block">{tab.subtitle}</span>
            </button>
          </li>
        ))}
      </ul>
      <div
        className="tab-content position-relative mt-120 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <img
          src="/images/shape/shape_33.svg"
          alt="media"
          className="lazy-img shapes shape-three"
        />
        <img
          src="/images/shape/shape_34.svg"
          alt="media"
          className="lazy-img shapes shape-four"
        />
        {tabData.map((tab) => (
          <div
            className={`tab-pane ${tab.id === "sp1" ? "active show" : ""}`}
            id={tab.id}
            key={tab.id}
          >
            <img
              src={tab.image}
              alt="media"
              className="lazy-img main-screen w-100"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductTabs;
