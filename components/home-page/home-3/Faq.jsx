import React from "react";

const faqData = [
  {
    id: 1,
    question: "Lowest Price.",
    answer:
      "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
  },
  {
    id: 2,
    question: "Boost-up Skills",
    answer:
      "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
  },
  {
    id: 3,
    question: "Learn Language",
    answer:
      "It only takes 5 minutes. Set-up is smooth and simple, with fully customisable page design to reflect your brand.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-six" id="accordionOne">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              index === 0 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
