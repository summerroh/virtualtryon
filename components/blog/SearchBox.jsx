"use client";

import { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    // handle form submission logic here
    console.log(`Submitting search query: ${query}`);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search.."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">
        <i className="bi bi-search" />
      </button>
    </form>
  );
};

export default SearchBox;
