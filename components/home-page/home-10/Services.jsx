import Link from "next/link";

const servicesData = [
  {
    bgColor: "rgba(255, 171, 51, 0.18)",
    iconSrc: "/images/icon/icon_01.svg",
    title: "Quality Design Maker.",
    description:
      "The core of our service is based on the objective investment advice we seek to provide supported.",
  },
  {
    bgColor: "rgba(100, 219, 226, 0.18)",
    iconSrc: "/images/icon/icon_02.svg",
    title: "Professional Support by Expert.",
    description:
      "Through our Family Office Services, we are able to provide the expertise derived from our beginnings.",
  },
  {
    bgColor: "rgba(255, 160, 194, 0.18)",
    iconSrc: "/images/icon/icon_03.svg",
    title: "Marketing & Affiliate Services.",
    description:
      "Capco’s response is proven by our superb record of driving change through effective portfolio.",
  },
  {
    bgColor: "rgba(246, 243, 255, 1)",
    iconSrc: "/images/icon/icon_04.svg",
    title: "Cross Browser Optimized.",
    description:
      "The core of our service is based on the objective investment advice we seek to provide supported.",
  },
];

const Services = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-3 col-sm-6`}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="card-style-one pe-xxl-5 position-relative mt-40">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: service.bgColor }}
            >
              <img src={service.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <Link
                href="/pages-menu/service-details"
                className="tran3s tx-dark"
              >
                {service.title}
              </Link>
            </h5>
            <p className="mb-25">{service.description}</p>
            <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_05.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-one */}
        </div>
      ))}
    </>
  );
};

export default Services;
