const accordionData = [
  {
    question: "How does the free trial work?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
  },
  {
    question: "How do I proccess home loan from jano?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
  },
  {
    question: "Do you recommend Pay as you go or Pre pay?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
  },
  {
    question: "What do I get for $0 with my plan?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
  },
  {
    question: "How to find specific property from any city?",
    answer:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-seven md-mt-60" id="accordionOne">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={"heading" + index}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + index}
              aria-expanded={index === 1 ? "true" : "false"}
              aria-controls={"collapse" + index}
            >
              {item.question}
            </button>
          </div>
          <div
            id={"collapse" + index}
            className={`accordion-collapse collapse${
              index === 1 ? " show" : ""
            }`}
            aria-labelledby={"heading" + index}
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
