"use client";

import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(".com");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted: ${inputValue}${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit} className="d-md-flex align-items-center">
      <div className="input-wrapper position-relative">
        <input
          type="text"
          placeholder="Search your  domain name here.."
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="select-wrapper">
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value=".com">.com</option>
            <option value=".org">.org</option>
            <option value=".tech">.tech</option>
            <option value=".co">.co</option>
            <option value=".me">.me</option>
          </select>
        </div>
        {/* /.select-wrapper */}
      </div>
      {/* /.input-wrapper */}
      <button
        type="submit"
        className="search-btn text-uppercase text-white fw-500 fs-18 tran3s"
      >
        SEARCH
      </button>
    </form>
  );
};

export default Form;
