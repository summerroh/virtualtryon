import Image from "next/image";
import React from "react";

const featuresData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_167.svg",
    title: "SSD Harddrive",
    description:
      "We run our service on Google Cloud, which guarantees premium availability and reliability and one of the fastest networks out there.",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_168.svg",
    title: "Light Speed & MangoDB",
    description:
      "We are consistently among the first to integrate and offer the latest speed technologies such as the newest PHP versions.",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_169.svg",
    title: "Lscache",
    description:
      "We developed a custom PHP setup that cuts the TTFB (time to first byte) and makes the overall resource usage more efficient.",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_170.svg",
    title: "Free CDN & Subdomain",
    description:
      "Free CDN powered by CloudFlare allows you to cache content and serve it from servers closest to your visitors for faster web serving.",
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_171.svg",
    title: "Custom MySQL Setup",
    description:
      "Our MySQL setup allows for a large number of requests to be processed simultaneously and masterfully handles heavy queries.",
  },
  {
    id: 6,
    iconSrc: "/images/icon/icon_172.svg",
    title: "Top WP Performance",
    description:
      "For WordPress sites, we have developed a powerful plugin that gives you control over the server and makes it significantly faster.",
  },
];

const Features = () => {
  return (
    <>
      {featuresData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-sm-6 d-flex mt-40"
          data-aos="fade-up"
          data-aos-delay={`${(feature.id - 1) * 100}`}
        >
          <div className="card-style-twentyFive">
            <div className="icon d-flex align-items-end">
              <Image
                width={45}
                height={45}
                src={feature.iconSrc}
                alt="icon"
                className="lazy-img mh-100"
              />
            </div>
            <h4 className="mt-40 lg-mt-30 mb-20">{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
          {/* /.card-style-twentyFive */}
        </div>
      ))}
    </>
  );
};

export default Features;
