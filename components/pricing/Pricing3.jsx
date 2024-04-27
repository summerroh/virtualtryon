import React from "react";

const pricingData = [
  {
    name: "Shared",
    details: "For individuals and teams",
    background: "#FFF7EB",
    price: "$8",
    monthlyText: "Per editor, monthly",
    renewalText: "$3.99/mo when you renew",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
  },
  {
    name: "WordPress",
    details: "For individuals and teams",
    background: "#E2F2FD",
    price: "$12",
    monthlyText: "For team, monthly",
    renewalText: "$3.99/mo when you renew",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
  },
  {
    name: "VPS",
    details: "For individuals and teams",
    background: "#FFEBEB",
    price: "$37",
    monthlyText: "All users, monthly",
    renewalText: "$3.99/mo when you renew",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
  },
];

const Pricing3 = () => {
  return (
    <>
      {pricingData.map((pricing, index) => (
        <div key={index} className={`col-lg-4 col-md-6 `}>
          <div
            className="pr-table-wrapper mt-40"
            data-aos="fade-up"
            data-aos-delay={`0.${index + 1}s`}
          >
            <div className="pack-name fw-500 tx-dark">{pricing.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {pricing.details}
            </div>
            <div
              className="top-banner align-items-center d-md-flex"
              style={{ background: pricing.background }}
            >
              <div className="price fw-500">
                <sup>$</sup>
                {pricing.price}
              </div>
              <div>
                <span>{pricing.monthlyText}</span>
                <em className="d-block">{pricing.renewalText}</em>
              </div>
            </div>
            <ul className="pr-feature style-none">
              {pricing.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {index === 1 ? (
              <a href="#" className="btn-fourteen fw-500 tran3s w-100">
                Start 30 days free trial
              </a>
            ) : (
              <a href="#" className="trial-button">
                Start 30 days free trial
              </a>
            )}
            <div className="trial-text pt-25 tx-dark">
              No card required, cancel any time
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing3;
