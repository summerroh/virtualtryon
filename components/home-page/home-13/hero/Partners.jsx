import React from "react";

const Partners = () => {
  const partners = [
    { name: "Google", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "Facebook", font: "font-recoleta" },
    { name: "", font: "" },
    { name: "Insta", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "Dribbble", font: "font-recoleta" },
    { name: "", font: "" },
    { name: "Fundbox", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "Segment", font: "font-recoleta" },
  ];

  return (
    <div className="d-xl-flex align-items-center">
      <h3 className="title tx-dark d-flex justify-content-center align-items-center m0 lg-pb-30">
        <span className="fw-bold">100+</span>
        <span className="font-recoleta">Trusted Partners</span>
        <span className="ms-4 d-none d-sm-inline-block">
          <img
            src="/images/shape/shape_119.svg"
            alt="img"
            className="lazy-img"
          />
        </span>
      </h3>

      <div className="logo-wrapper fw-500 tx-dark d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between">
        {partners.map((partner, index) => (
          <React.Fragment key={index}>
            {partner.name && <div className="br-name">{partner.name}</div>}
            {!partner.name && <div className="br-name">.</div>}
          </React.Fragment>
        ))}
      </div>
      {/* /.logo-wrapper */}
    </div>
  );
};

export default Partners;
