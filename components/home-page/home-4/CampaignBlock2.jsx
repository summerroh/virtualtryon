const campaignBlocks = [
  {
    imageUrl: "/images/media/img_35.jpg",
    iconUrl: "/images/icon/icon_48.svg",
    title: "Make Donation",
    isWhiteTitle: true,
  },
  {
    imageUrl: "/images/media/img_36.jpg",
    iconUrl: "/images/icon/icon_49.svg",
    title: "Be a Volunteer",
    subtitle: (
      <>
        Growing up in poverty, children face tough <br /> hunger and
        malnutrition
      </>
    ),
  },
  {
    imageUrl: "/images/media/img_37.jpg",
    iconUrl: "/images/icon/icon_50.svg",
    title: "Fundrising",
    isWhiteTitle: true,
  },
];

const CampaignBlock2 = () => {
  return (
    <>
      {campaignBlocks.map((block, index) => (
        <div
          className={`card-style-nine position-relative d-flex flex-column justify-content-center align-items-center ${
            index === 1 ? "center-item" : ""
          }`}
          style={{ backgroundImage: `url(${block.imageUrl})` }}
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <div className="icon d-flex align-items-end">
            <img src={block.iconUrl} alt="" className="lazy-img" />
          </div>
          <div
            className={`title mt-25 mb-${block.subtitle ? "15" : "30"} ${
              block.isWhiteTitle ? "text-white" : "tx-dark"
            }`}
          >
            {block.title}
          </div>
          {block.subtitle && (
            <p className="fs-18 text-center tx-dark">{block.subtitle}</p>
          )}
          <a
            href="#"
            className="btn-more rounded-circle text-center fw-light tran3s"
          >
            +
          </a>
        </div>
      ))}
    </>
  );
};

export default CampaignBlock2;
