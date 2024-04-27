import Link from "next/link";

const services = [
  {
    iconSrc: "/images/icon/icon_104.svg",
    title: "Home Loan",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_105.svg",
    title: "Travel Insurance",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_106.svg",
    title: "Insure the Car",
    delay: "300",
  },
  {
    iconSrc: "/images/icon/icon_107.svg",
    title: "Health Insurance",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/icon_141.svg",
    title: "Life Insurance",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/icon_142.svg",
    title: "Family Inurance",
    delay: "300",
  },
];

const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          key={index}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img
                src={service.iconSrc}
                alt="icon"
                className="lazy-img m-auto"
              />
            </div>
            <p className="fs-20 m0 pt-20">I want</p>
            <h4 className="tx-dark">{service.title}</h4>
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
