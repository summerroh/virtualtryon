"use client";

import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Shared",
    details: "For individuals and teams",
    price: "$8",
    billing: "Per editor, monthly",
    limit: "with unlimited email",
    btnClass: "trial-button",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 2,
    name: "WordPress",
    details: "For individuals and teams",
    price: "$12",
    billing: "For team, monthly",
    limit: "team with 8 users",
    btnClass: "btn-fourteen fw-500 tran3s w-100",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
  {
    id: 3,
    name: "VPS",
    details: "For individuals and teams",
    price: "$37",
    billing: "All users, monthly",
    limit: "for unlimited users",
    btnClass: "trial-button",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },
  {
    id: 4,
    name: "Dedicated",
    details: "For individuals and teams",
    price: "$79",
    billing: "All users, monthly",
    limit: "for unlimited users",
    btnClass: "trial-button",
    features: [
      "Unlimited Email",
      "5gb Hosting",
      "2 website 3 sub domain",
      "Email & Live chat",
      "Backling",
      "Discount Program",
    ],
    bgColor: "#E4F4F1",
    animDelay: "300",
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <>
      {plans.map((plan) => (
        <div
          className="col-xl-3 col-sm-6"
          key={plan.id}
          data-aos="fade-up"
          data-aos-delay={plan.animDelay}
        >
          <div
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center d-md-flex"
              style={{ background: plan.bgColor }}
            >
              <div className="price fw-500">
                <sup>$</sup>
                {plan.price}
              </div>
              <div>
                <span>{plan.billing}</span>
                <em className="d-block">{plan.limit}</em>
              </div>
            </div>
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#" className={plan.btnClass}>
              Start 30 days free trial
            </a>
            <div className="trial-text pt-25 tx-dark">
              No card required, cancel any time
            </div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default Pricing;
