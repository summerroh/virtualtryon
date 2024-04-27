"use client";

import { useState } from "react";

const FilterBox = () => {
  const [formData, setFormData] = useState({
    property: "",
    market: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const formOptions = {
    property: {
      title: "I’m looking to..",
      options: [
        { value: "buy-portfolio", display: "Buy Portfolio" },
        { value: "condo", display: "Condo" },
        { value: "apartments", display: "Apartments" },
        { value: "villa", display: "Villa" },
        { value: "for-rent", display: "For Rent" },
      ],
    },
    market: {
      title: "Markets",
      options: [
        { value: "new-york", display: "New York" },
        { value: "new-jersey", display: "New Jersey" },
        { value: "pennsylvania", display: "Pennsylvania" },
        { value: "south-carolina", display: "South Carolina" },
      ],
    },
    price: {
      title: "Price Range",
      options: [
        { value: "10000-200000", display: "$10,000 - $200,000" },
        { value: "20000-300000", display: "$20,000 - $300,000" },
        { value: "40000-500000", display: "$40,000 - $500,000" },
      ],
    },
  };

  return (
    <form onSubmit={handleSubmit} className="search-area">
      <div className="row gx-0 align-items-center">
        {Object.entries(formOptions).map(([key, { title, options }]) => (
          <div className="col-lg-3" key={key}>
            <div className="input-block">
              <div className="title">{title}</div>
              <select
                className="nice-select"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              >
                {options.map(({ value, display }) => (
                  <option key={value} value={value} data-display={display}>
                    {display}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="col-lg-3">
          <div className="input-block">
            <button type="submit" className="w-100 fw-500 tran3s">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FilterBox;
