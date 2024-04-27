import Image from "next/image";

const FancyBlock = () => {
  const cardsData = [
    {
      iconSrc: "/images/icon/icon_70.svg",
      title: "Submit Ticket",
      description: "Elit esse cillum dolo fugiat nulla tur nos ullamo.",
      delay: "100",
    },
    {
      iconSrc: "/images/icon/icon_71.svg",
      title: "Choose Migration",
      description: "quis nostrud exerct ullamo sucirity finibus ne derived.",
      delay: "200",
    },
    {
      iconSrc: "/images/icon/icon_72.svg",
      title: "Complete",
      description: "Duis aute irure dolor reprehe de Cicero's voluptat velit.",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className={`card-style-eleven d-flex w-100 mt-85 lg-mt-40`}>
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <Image
                width={24}
                height={24}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <div className="text">
              <h4 className="mb-10">{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock;
