import Link from "next/link";

const FeatureData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "File sharing",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_14.svg",
    title: "Team Management",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Time Tracking",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_16.svg",
    title: "Voice & video call",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Cloud storage",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
];

const Features = () => {
  return (
    <>
      {FeatureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6 mt-40"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <div className="card-style-three">
            <div className="icon d-flex align-items-end">
              <img src={feature.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            <Link href="/pages-menu/service-details">
              <img
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
