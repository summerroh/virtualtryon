import Image from "next/image";
import Link from "next/link";
import React from "react";

const featuresData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_13.svg",
    title: "File Sharing",
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
    iconSrc: "/images/icon/icon_17.svg",
    title: "Cloud Storage",
    description:
      "Our deep understanding of project and program management has enabled the success of our clients.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_164.svg",
    title: "Unlimited Hosting & Domain",
    description:
      "Commonly used in the graphic, print & publishing industries for previewing visual layout and mockups.",
    colClass: "col-lg-8",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_165.svg",
    title: "24x7 Support",
    description:
      "Our deep understanding of project and program management has enabled.",
    colClass: "col-lg-4",
  },
];

const Features2 = () => {
  return (
    <>
      {featuresData.map((feature) => (
        <div
          key={feature.id}
          className={`col-md-6 d-flex mt-40 lg-mt-30 ${
            feature.colClass || "col-lg-4"
          }`}
          data-aos="fade-up"
          data-aos-delay={`${feature.id * 100}`}
        >
          <div className="card-style-three border-0">
            <div className="icon d-flex align-items-end">
              <Image
                width={75}
                height={60}
                style={{ objectFit: "contain" }}
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

export default Features2;
