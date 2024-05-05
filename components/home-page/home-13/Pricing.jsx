const monthlyPricingPlans = [
  {
    id: "reguler",
    price: "$13",
    plan: "Reguler Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "Email & Live chat.",
      "Cloud",
    ],
  },
  {
    id: "flexible",
    price: "$20",
    plan: "Flexible Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "2 website 3 sub domain",
      "Email & Live chat.",
      "Backling",
      "Discount Programe",
    ],
    active: true,
  },
  {
    id: "business",
    price: "$43",
    plan: "Business Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "Email & Live chat.",
      "Cloud",
    ],
  },
];
const yearlyPricingPlans = [
  {
    id: "reguler",
    price: "$113",
    plan: "Reguler Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "Email & Live chat.",
      "Cloud",
    ],
  },
  {
    id: "flexible",
    price: "$210",
    plan: "Flexible Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "2 website 3 sub domain",
      "Email & Live chat.",
      "Backling",
      "Discount Programe",
    ],
    active: true,
  },
  {
    id: "business",
    price: "$413",
    plan: "Business Plan",
    features: [
      "Unlimited Email",
      "5gb Hosting & Domain",
      "Email & Live chat.",
      "Cloud",
    ],
  },
];

const Pricing = () => {
  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-two"
        data-aos="fade-up"
        role="tablist"
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
      </ul>

      <div className="mt-80 lg-mt-50" data-aos="fade-up">
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row gx-xxl-5 align-items-center pricing-table-area-two">
                  {monthlyPricingPlans.map((plan) => (
                    <div key={plan.id} className="col-lg-4 col-sm-6">
                      <div
                        className={`pr-column mt-40 ${
                          plan.active ? "active" : ""
                        }`}
                      >
                        <div className="pr-header pb-30 mb-45">
                          <div className="price fw-500 tx-dark">
                            {plan.price}
                          </div>
                          <div className="plan tx-dark">{plan.plan}</div>
                        </div>
                        <div className="pr-body">
                          <ul className="style-none text-start">
                            {plan.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pr-footer pt-55 lg-pt-30">
                          <div className="trial-text opacity-75 mb-20">
                            Up to 7 user + 1.99 per user
                          </div>
                          <a
                            href="#"
                            className="signup-btn fw-500 tran3s w-100"
                          >
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* End month */}
          <div className="tab-pane" id="year">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row gx-xxl-5 align-items-center pricing-table-area-two">
                  {yearlyPricingPlans.map((plan) => (
                    <div key={plan.id} className="col-lg-4 col-sm-6">
                      <div
                        className={`pr-column mt-40 ${
                          plan.active ? "active" : ""
                        }`}
                      >
                        <div className="pr-header pb-30 mb-45">
                          <div className="price fw-500 tx-dark">
                            {plan.price}
                          </div>
                          <div className="plan tx-dark">{plan.plan}</div>
                        </div>
                        <div className="pr-body">
                          <ul className="style-none text-start">
                            {plan.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pr-footer pt-55 lg-pt-30">
                          <div className="trial-text opacity-75 mb-20">
                            Up to 7 user + 1.99 per user
                          </div>
                          <a
                            href="#"
                            className="signup-btn fw-500 tran3s w-100"
                          >
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* year */}
        </div>
      </div>
    </>
  );
};

export default Pricing;
