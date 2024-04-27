const Faq = () => {
  const faqData = [
    {
      question: "What is web hosting?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How do you weigh different criteria in your process?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "What can I use to build my website?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question:
        "If I already have a website, can I transfer it to your web hosting?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How can I accept credit cards online?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "What are the additional requirements I should know about?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
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

export default Faq;
