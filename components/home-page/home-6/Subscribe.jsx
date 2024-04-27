"use client";
import React from "react";

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form from refreshing the page on submit
    // add your custom submit logic here
  };

  return (
    <form onSubmit={handleSubmit} className="position-relative">
      <input type="email" placeholder="Email address" />
      <button type="submit" className="tran3s position-absolute fw-500">
        Try for free
      </button>
    </form>
  );
};

export default Subscribe;
