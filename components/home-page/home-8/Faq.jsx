const Faq = () => {
  const faqItems = [
    {
      question: "What is crypto?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How do you different criteria in your process?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How can invest money here?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How can I trade my crypto into different currency?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How can I accept credit cards online?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
  ];

  return (
    <div className="accordion accordion-style-three md-mt-60" id="accordionOne">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${
                index === 2 ? "not-collapsed" : "collapsed"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
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
