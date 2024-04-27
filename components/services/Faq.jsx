const accordionItems = [
  {
    id: 1,
    title: "Google ads setup & management",
    content:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  {
    id: 2,
    title: "Web Design & Development",
    content:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  {
    id: 3,
    title: "Reputation management",
    content:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
