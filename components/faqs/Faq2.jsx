import React from "react";

const faqItems = [
  {
    id: 1,
    question: "How does the free trial work?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: 2,
    question: "How do you weigh different criteria in the process?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: 3,
    question: "What does janu look for in an idea?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    isOpen: true, // Set the third item to be open by default
  },
  {
    id: 4,
    question: "What do you look for in a founding team?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
];

const Faq2 = () => {
  return (
    <div className="accordion accordion-style-one md-mt-40" id="accordionOne">
      {faqItems.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button${
                item.isOpen ? " active" : " collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.isOpen ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.isOpen ? " show" : ""
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

export default Faq2;
