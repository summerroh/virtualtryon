import React from "react";

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor Degree of design.",
      university: "University of Boston, USA",
    },
    {
      degree: "UI/UX Design",
      university: "University of Vegas, USA",
    },
  ];

  return (
    <>
      {educationItems.map((item, i) => (
        <React.Fragment key={i}>
          <p className="text-lg tx-dark">{item.degree}</p>
          <div className="tx-sp2 text-uppercase">{item.university}</div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Education;
