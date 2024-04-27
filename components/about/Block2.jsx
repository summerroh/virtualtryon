import Image from "next/image";
import React from "react";

const Block2 = () => {
  const cardData = [
    {
      iconSrc: "/images/icon/icon_175.svg",
      title: "Learn skills with over 120k+",
      subtitle: "Video courses.",
      delay: 0,
    },
    {
      iconSrc: "/images/icon/icon_176.svg",
      title: "Choose courses taught by",
      subtitle: "Real-world experts.",
      delay: 200,
    },
    {
      iconSrc: "/images/icon/icon_177.svg",
      title: "Learn with lifetime access on",
      subtitle: "Mobile and desktop.",
      delay: 300,
    },
  ];

  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className="card-style-twentySix text-center mt-25">
            <div className="icon rounded-circle m-auto d-flex align-items-center justify-content-center">
              <Image
                width={31}
                height={30}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <h5 className="tx-dark mt-40 lg-mt-30 mb-5">{card.title}</h5>
            <p className="fs-18">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block2;
