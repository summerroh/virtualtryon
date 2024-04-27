import React from "react";

const pricingPlans = {
  monthly: [
    {
      id: 1,
      name: "Silver Plan",
      price: "$17",
      info: "Great for Individual Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      id: 2,
      name: "Gold Plan",
      price: "$25",
      info: "Great for Individual Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      id: 3,
      name: "Business Plan",
      price: "$35",
      info: "Great for Individual Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    // ... Add other monthly plans here
  ],
  yearly: [
    {
      id: 1,
      name: "Silver Plan",
      price: "$123",
      info: "Great for Individual Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      id: 2,
      name: "Gold Plan",
      price: "$199",
      info: "Great for Individual Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      id: 3,
      name: "Business Plan",
      price: "$239",
      info: "Great for Individual Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
  ],
};

const Pricing2 = () => {
  const renderPlan = (plan) => (
    <div key={plan.id} className="col-md-4 pr-column sm-mb-20">
      <div className="pr-header">
        <div className="plan">{plan.name}</div>
        <div className="price">{plan.price}</div>
        <div className="info">{plan.info}</div>
      </div>{" "}
      {/* /.pr-header */}
      <div className="pr-body">
        <ul className="style-none">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <span className="pr-text d-block d-lg-none mb-5">
                {feature.text}
              </span>
              <i
                className={`bi ${
                  feature.available
                    ? "bi-check2 availabe"
                    : "bi-x not-available"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="pr-footer">
        <a href="#" className="trial-button fw-500 fs-16 tran3s">
          Sign up
        </a>
        <div className="trial-text mt-15 fs-15 opacity-75">
          Get your 30 day free trial
        </div>
      </div>
    </div>
  );

  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-one"
        role="tablist"
        data-aos="fade-up"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#month"
            type="button"
            role="tab"
          >
            Monthly
          </button>
        </li>
        {/* End monthly */}

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#year"
            type="button"
            role="tab"
          >
            Yearly
          </button>
        </li>
        {/* End monthly */}
      </ul>
      <div
        className="pricing-table-area-one mt-110 lg-mt-60 pe-xxl-4 ps-xxl-4"
        data-aos="fade-up"
      >
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 position-relative">
              <div className="col-lg-3 pr-list-wrapper d-none d-lg-block position-relative">
                <ul className="style-none">
                  <li>Full Access Library</li>
                  <li>Multiple User</li>
                  <li>Refund</li>
                  <li>24/7 Support</li>
                </ul>
              </div>
              <div className="col-lg-9 pr-table-wrapper ml-auto">
                <div className="row gx-0">
                  {pricingPlans.monthly.map(renderPlan)}
                </div>
              </div>
            </div>
          </div>
          {/* End tab-pane */}

          <div className="tab-pane" id="year">
            <div className="row gx-0 position-relative">
              <div className="col-lg-3 pr-list-wrapper d-none d-lg-block position-relative">
                <ul className="style-none">
                  <li>Full Access Library</li>
                  <li>Multiple User</li>
                  <li>Refund</li>
                  <li>24/7 Support</li>
                </ul>
              </div>
              <div className="col-lg-9 pr-table-wrapper ml-auto">
                <div className="row gx-0">
                  {pricingPlans.yearly.map(renderPlan)}
                </div>
              </div>
            </div>
          </div>
          {/* End tab-pane */}
        </div>
      </div>
    </>
  );
};

export default Pricing2;
