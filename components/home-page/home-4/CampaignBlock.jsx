import Image from "next/image";

const CampaignBlock = () => {
  const campaigns = [
    {
      imgSrc: "/images/media/img_30.jpg",
      goal: "$123,000",
      daysLeft: "2",
      ribbonBg: "#FF3F64",
      title: "Education for all",
      description:
        "Lorem ipsum dolor consectetur adipisci. Vivamus in magna tellus fringilla eleifend.",
      aosDelay: "100",
    },
    {
      imgSrc: "/images/media/img_31.jpg",
      goal: "$47,000",
      daysLeft: "3",
      ribbonBg: "#FFBA3C",
      title: "Feed African child",
      description:
        "Lorem ipsum dolor consectetur adipisci. Vivamus in magna tellus fringilla eleifend.",
      aosDelay: "200",
    },
    {
      imgSrc: "/images/media/img_32.jpg",
      goal: "$320,000",
      daysLeft: "5",
      ribbonBg: "#00E38A",
      title: "Better Future",
      description:
        "Lorem ipsum dolor consectetur adipisci. Vivamus in magna tellus fringilla eleifend.",
      aosDelay: "300",
    },
    {
      imgSrc: "/images/media/img_31.jpg",
      goal: "$47,000",
      daysLeft: "3",
      ribbonBg: "#FFBA3C",
      title: "Feed African child",
      description:
        "Lorem ipsum dolor consectetur adipisci. Vivamus in magna tellus fringilla eleifend.",
      aosDelay: "400",
    },
  ];

  return (
    <>
      {campaigns.map((campaign, index) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={campaign.aosDelay}
          key={index}
        >
          <div className="card-style-eight mt-40 ">
            <div className="img-meta position-relative">
              <Image
                width={364}
                height={282}
                src={campaign.imgSrc}
                alt=""
                className="lazy-img w-100"
              />
              <div className="donation-goal d-flex align-items-center justify-content-between position-absolute">
                <div className="fw-500 text-white fs-20">
                  Goal: {campaign.goal}
                </div>
                <div className="fs-15 text-white">
                  {campaign.daysLeft} days left
                </div>
              </div>
              <div
                className="ribbon position-absolute"
                style={{ background: campaign.ribbonBg, width: "66%" }}
              />
            </div>
            <div className="text-meta pt-40 pb-25 ps-2 pe-2 pe-xl-4 ps-xl-4">
              <h4 className="mb-5">{campaign.title}</h4>
              <p className="mb-40">{campaign.description}</p>
              <a href="#" className="btn-ten fs-16 fw-500 position-relative">
                Donate Now <i className="fa-solid fa-angle-right" />
              </a>
            </div>
            {/* /.text-meta */}
          </div>
          {/* /.card-style-eight */}
        </div>
      ))}
    </>
  );
};

export default CampaignBlock;
