import Image from "next/image";

const blocks = [
  {
    icon: "/images/icon/icon_75.png",
    crName: "BTC",
    crPoint: "1.34500",
    arrow: "up",
    crValue: "+14%",
    shape: "/images/shape/shape_103.svg",
    balance: "42,530.2310",
  },
  {
    icon: "/images/icon/icon_76.png",
    crName: "DESH",
    crPoint: "1.42800",
    arrow: "down",
    crValue: "-11%",
    shape: "/images/shape/shape_104.svg",
    balance: "3,210.2390",
  },
  {
    icon: "/images/icon/icon_77.png",
    crName: "BTC",
    crPoint: "1.34500",
    arrow: "up",
    crValue: "+14%",
    shape: "/images/shape/shape_105.svg",
    balance: "51,530.2310",
  },
];

const Block1 = () => {
  return (
    <>
      {blocks.map((block, index) => (
        <div className="col-lg-4" key={index}>
          <div className="trade-meta-block">
            <div className="d-sm-flex justify-content-between">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <Image
                  width={35}
                  height={35}
                  src={block.icon}
                  alt="shape"
                  className="lazy-img"
                />
              </div>
              <div className="meta-point d-inline-flex align-items-center justify-content-between xs-mt-20">
                <div className="pe-lg-4">
                  <div className="cr-name text-uppercase">{block.crName}</div>
                  <div className="cr-point text-white opacity-75 fs-15">
                    {block.crPoint}
                  </div>
                </div>
                <div className="ms-5 text-center">
                  <div className={`arrow arrow-${block.arrow}`}>
                    {block.arrow === "up" ? (
                      <i className="bi bi-caret-up-fill" />
                    ) : (
                      <i className="bi bi-caret-down-fill" />
                    )}
                  </div>
                  <div className="cr-value">{block.crValue}</div>
                </div>
              </div>
              {/* /.meta-point */}
            </div>
            <div className="mt-15 d-sm-flex justify-content-between align-items-center">
              <img
                src={block.shape}
                alt="shape"
                className=" order-sm-last"
                data-aos="fade-up"
              />
              <div className="btc-balance xs-mt-10 text-white fw-500">
                $<span className="counter">{block.balance}</span>
              </div>
            </div>
          </div>
          {/*  /.trade-meta-block */}
        </div>
      ))}
    </>
  );
};

export default Block1;
