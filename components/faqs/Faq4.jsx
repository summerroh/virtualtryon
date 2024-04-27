import React from "react";

const faqData = [
  {
    id: 1,
    question: "Google ads setup & management",
    answer:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  {
    id: 2,
    question: "Web Design & Development",
    answer:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  {
    id: 3,
    question: "Reputation management",
    answer:
      "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.",
  },
  // Add more FAQ items as needed
];

const Faq4 = () => {
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={`heading${faq.id}`}>
            <button
              className={`accordion-button ${faq.id === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded={faq.id === 1 ? "true" : "false"}
              aria-controls={`collapse${faq.id}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${faq.id}`}
            className={`accordion-collapse collapse ${
              faq.id === 1 ? "show" : ""
            }`}
            aria-labelledby={`heading${faq.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq4;
