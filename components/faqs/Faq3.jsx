import React from "react";

const faqData = [
  {
    id: "One",
    question: "What is web hosting?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "Two",
    question: "How do you weigh different criteria in your process?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "Three",
    question: "What can I use to build my website?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "Four",
    question:
      "If I already have a website, can I transfer it to your web hosting?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "Five",
    question: "How can I accept credit cards online?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
  {
    id: "Six",
    question: "What are the additional requirements I should know about?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
  },
];

const Faq3 = () => {
  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={`heading${faq.id}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${faq.id}`}
              aria-expanded="false"
              aria-controls={`collapse${faq.id}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${faq.id}`}
            className="accordion-collapse collapse"
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

export default Faq3;
