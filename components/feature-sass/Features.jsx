import Image from "next/image";
import Link from "next/link";
import React from "react";

const featuresData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_15.svg",
    title: "Time Tracking",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_16.svg",
    title: "Voice & Video Call",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_17.svg",
    title: "Cloud Storage",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
];

const Features = () => {
  return (
    <>
      {featuresData.map((feature) => (
        <div
          key={feature.id}
          className={`col-lg-4 col-md-6 mt-40 lg-mt-30 d-flex`}
          data-aos="fade-up"
          data-aos-delay={`${feature.id * 100}`}
        >
          <div className="card-style-three border-0">
            <div className="icon d-flex align-items-end">
              <Image
                width={65}
                height={65}
                src={feature.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <h4 className="mt-25 mb-20">{feature.title}</h4>
            <p className="mb-50">{feature.description}</p>
            <Link href="/pages-menu/service-details">
              <Image
                width={39}
                height={15}
                src="/images/icon/icon_18.svg"
                alt="icon"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-three */}
        </div>
      ))}
    </>
  );
};

export default Features;
