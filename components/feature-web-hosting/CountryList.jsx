import React from "react";

const countries = [
  { id: 1, name: "Asia", className: "one" },
  { id: 2, name: "Africa", className: "two" },
  { id: 3, name: "Europe", className: "three" },
  { id: 4, name: "North America", className: "four" },
  { id: 5, name: "South America", className: "five" },
  { id: 6, name: "Australia", className: "six" },
  { id: 7, name: "Antarctica", className: "seven" },
];

const CountryList = () => {
  return (
    <>
      {countries.map((country) => (
        <div
          key={country.id}
          className={`location rounded-circle ${country.className}`}
        >
          <span>{country.name}</span>
        </div>
      ))}
    </>
  );
};

export default CountryList;
