const Pricing = () => {
  const tabs = [
    {
      id: "month",
      label: "Monthly",
      active: true,
    },
    {
      id: "year",
      label: "Yearly",
      active: false,
    },
  ];

  const plans = [
    {
      name: "Silver Plan",
      price: "$17",
      info: "Great for Individial Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      name: "Gold Plan",
      price: "$25",
      info: "Great for Startup",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: true },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      name: "Business Plan",
      price: "$35",
      info: "Great for Large Business",
      features: [
        { text: "Send documents for eSigning", available: true },
        { text: "Multiple User", available: true },
        { text: "Refund", available: true },
        { text: "Bulk invite to sign", available: true },
      ],
    },
  ];
  const plans2 = [
    {
      name: "Silver Plan",
      price: "$117",
      info: "Great for Individial Person",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: false },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      name: "Gold Plan",
      price: "$125",
      info: "Great for Startup",
      features: [
        { text: "Send documents for eSigning", available: false },
        { text: "Multiple User", available: false },
        { text: "Refund", available: true },
        { text: "Bulk invite to sign", available: true },
      ],
    },
    {
      name: "Business Plan",
      price: "$135",
      info: "Great for Large Business",
      features: [
        { text: "Send documents for eSigning", available: true },
        { text: "Multiple User", available: true },
        { text: "Refund", available: true },
        { text: "Bulk invite to sign", available: true },
      ],
    },
  ];

  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-one"
        role="tablist"
        data-aos="fade-up"
      >
        {tabs.map((tab) => (
          <li key={tab.id} className="nav-item" role="presentation">
            <button
              className={`nav-link ${tab.active ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      {/* End nav */}

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
                  {plans.map((item, index) => (
                    <div className="col-md-4 pr-column sm-mb-20" key={index}>
                      <div className="pr-header">
                        <div className="plan">{item.name}</div>
                        <div className="price">{item.price}</div>
                        <div className="info">{item.info}</div>
                      </div>
                      <div className="pr-body">
                        <ul className="style-none">
                          {item.features.map((feature) => (
                            <li key={feature.text}>
                              <span className="pr-text d-block d-lg-none mb-5">
                                {feature.text}
                              </span>
                              <i
                                className={
                                  feature.available
                                    ? "bi bi-check2 availabe"
                                    : "bi bi-x not-available"
                                }
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pr-footer">
                        <a
                          href="#"
                          className="trial-button fw-500 fs-16 tran3s"
                        >
                          Sign up
                        </a>
                        <div className="trial-text mt-15 fs-15 opacity-75">
                          Get your 30 day free trial
                        </div>
                      </div>
                    </div>
                  ))}
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
                  {plans2.map((item, index) => (
                    <div className="col-md-4 pr-column sm-mb-20" key={index}>
                      <div className="pr-header">
                        <div className="plan">{item.name}</div>
                        <div className="price">{item.price}</div>
                        <div className="info">{item.info}</div>
                      </div>
                      <div className="pr-body">
                        <ul className="style-none">
                          {item.features.map((feature) => (
                            <li key={feature.text}>
                              <span className="pr-text d-block d-lg-none mb-5">
                                {feature.text}
                              </span>
                              <i
                                className={
                                  feature.available
                                    ? "bi bi-check2 availabe"
                                    : "bi bi-x not-available"
                                }
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pr-footer">
                        <a
                          href="#"
                          className="trial-button fw-500 fs-16 tran3s"
                        >
                          Sign up
                        </a>
                        <div className="trial-text mt-15 fs-15 opacity-75">
                          Get your 30 day free trial
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Pricing;
