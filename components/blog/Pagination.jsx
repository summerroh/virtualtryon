"use client";

import { useState } from "react";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [1, 2, 3, 4]; // replace with actual page numbers

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <ul className="d-flex align-items-center style-none">
      {pageNumbers.map((pageNumber) => (
        <li
          className={pageNumber === activePage ? "active" : ""}
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
      <li>...</li>
      <li>Last</li>
      <li className="arrow">
        <i className="bi bi-arrow-right" />
      </li>
    </ul>
  );
};

export default Pagination;
