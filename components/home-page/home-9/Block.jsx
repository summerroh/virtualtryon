const Block = () => {
  const blocks = [
    {
      iconSrc: "/images/icon/icon_39.svg",
      bgColor: "#EBF8F8",
      title: "Product & Brand Designer",
    },
    {
      iconSrc: "/images/icon/icon_40.svg",
      bgColor: "#FFF8F8",
      title: "Coding & Programming",
    },
    {
      iconSrc: "/images/icon/icon_41.svg",
      bgColor: "#F3F5FF",
      title: "Online Marketing",
    },
  ];

  return (
    <>
      {blocks.map((block, index) => (
        <div
          key={index}
          className="col-md-4 "
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div
            className="card-style-six md-mt-30 text-center"
            style={{ backgroundColor: block.bgColor }}
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <img src={block.iconSrc} alt="icon" className="lazy-img" />
            </div>
            <h4 className="mt-55 lg-mt-30">{block.title}</h4>
          </div>
          {/* /.card-style-six */}
        </div>
      ))}
    </>
  );
};

export default Block;
