import Image from "next/image";

const Pricing = () => {
  const plans = [
    {
      icon: "/images/icon/icon_56.svg",
      plan: "Starter Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "Email & Live chat.",
      ],
      price: "$9.99",
      trial: "up to 3 user + 1.99 per user",
      className: "pr-column pr-one",
    },
    {
      icon: "/images/icon/icon_57.svg",
      plan: "Silver Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "2 website 3 sub domain",
        "Email & Live chat.",
        "Backling",
      ],
      price: "$19.99",
      trial: "up to 5 user + 1.99 per user",
      className: "pr-column active",
    },
    {
      icon: "/images/icon/icon_58.svg",
      plan: "Gold Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "Email & Live chat.",
      ],
      price: "$29.99",
      trial: "up to 7 user + 1.99 per user",
      className: "pr-column pr-two",
    },
    {
      icon: "/images/icon/icon_59.svg",
      plan: "Diamond Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "Email & Live chat.",
      ],
      price: "$59.99",
      trial: "up to 10 user + 1.99 per user",
      className: "pr-column pr-three",
    },
  ];
  const plans2 = [
    {
      icon: "/images/icon/icon_56.svg",
      plan: "Starter Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "Email & Live chat.",
      ],
      price: "$19.99",
      trial: "up to 3 user + 1.99 per user",
      className: "pr-column pr-one",
    },
    {
      icon: "/images/icon/icon_57.svg",
      plan: "Silver Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "2 website 3 sub domain",
        "Email & Live chat.",
        "Backling",
      ],
      price: "$59.99",
      trial: "up to 5 user + 1.99 per user",
      className: "pr-column active",
    },
    {
      icon: "/images/icon/icon_58.svg",
      plan: "Gold Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "Email & Live chat.",
      ],
      price: "$99.99",
      trial: "up to 7 user + 1.99 per user",
      className: "pr-column pr-two",
    },
    {
      icon: "/images/icon/icon_59.svg",
      plan: "Diamond Plan",
      features: [
        "Unlimited Email",
        "5gb Hosting & Domain",
        "Email & Live chat.",
      ],
      price: "$129.99",
      trial: "up to 10 user + 1.99 per user",
      className: "pr-column pr-three",
    },
  ];

  return (
    <div data-aos="fade-up">
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-three"
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
        {/* End Monthly */}
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
        {/* End yarly */}
      </ul>
      {/* End ul */}

      <div
        className="pricing-table-area-three mt-160 lg-mt-100 xs-mt-60"
        data-aos="fade-up"
      >
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 align-items-center">
              {plans.map((plan, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <Image
                      width={25}
                      height={25}
                      src={plan.icon}
                      alt="icon"
                      className="icon"
                    />
                    <div className="plan tx-dark">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-dark">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        {plan.trial}
                      </div>
                      <a href="#" className="btn-twelve fw-500 tran3s">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /.tab-pane */}

          <div className="tab-pane" id="year">
            <div className="row gx-0 align-items-center">
              {plans2.map((plan, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <Image
                      width={25}
                      height={25}
                      src={plan.icon}
                      alt="icon"
                      className="icon"
                    />
                    <div className="plan tx-dark">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-dark">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        {plan.trial}
                      </div>
                      <a href="#" className="btn-twelve fw-500 tran3s">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
