import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_02.svg",
    bgColor: "rgba(100, 219, 226, 0.18)",
    title: "Proffesional Support by expert.",
    description:
      "Through our Family Office Services, we are able to provide the expertise derived from our beginnings.",
    delay: 0,
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_156.svg",
    bgColor: "rgba(255, 171, 51, 0.18)",
    title: "Web & Graphics Design.",
    description:
      "The core of our service is based on the objective investment advice we seek to provide supported.",
    delay: 200,
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_157.svg",
    bgColor: "rgba(255, 160, 194, 0.18)",
    title: "Marketing & Affiliate Services.",
    description:
      "Capco’s response is proven by our superb record of driving change through effective portfolio.",
    delay: 300,
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_158.svg",
    bgColor: "rgba(56, 232, 255, 0.1)",
    title: "Web Development & Design",
    description:
      "The core of our service is based on the objective investment advice we seek to provide supported.",
    delay: 0,
  },
  {
    id: 5,
    iconSrc: "/images/icon/icon_159.svg",
    bgColor: "rgba(108, 55, 221, 0.1)",
    title: "Mobile Application Development.",
    description:
      "The core of our service is based on the objective investment advice we seek to provide supported.",
    delay: 200,
  },
  {
    id: 6,
    iconSrc: "/images/icon/icon_160.svg",
    bgColor: "rgba(68, 255, 0, 0.18)",
    title: "Content & Article Writing.",
    description:
      "The core of our service is based on the objective investment advice we seek to provide supported.",
    delay: 300,
  },
];

const Block2 = () => {
  return (
    <>
      {cardData.map((card) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
          key={card.id}
        >
          <div className="card-style-one pe-xxl-5 position-relative mb-90 md-mb-70">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ backgroundColor: card.bgColor }}
            >
              <Image
                width={32}
                height={40}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <h5 className="fw-500 mt-35 mb-25">
              <Link
                href="/pages-menu/service-details"
                className="tran3s tx-dark"
              >
                {card.title}
              </Link>
            </h5>
            <p className="mb-25">{card.description}</p>
            <Link href="/pages-menu/service-details">
              <Image
                width={41}
                height={14}
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

export default Block2;
