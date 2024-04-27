const logos = [
  {
    src: "/images/logo/Plogo-1.png",
    width: "193px",
    height: "193px",
    className: "",
  },
  {
    src: "/images/logo/Plogo-2.png",
    width: "65px",
    height: "65px",
    className: "shapes logo-one",
  },
  {
    src: "/images/logo/Plogo-3.png",
    width: "105px",
    height: "105px",
    className: "shapes logo-two",
  },
  {
    src: "/images/logo/Plogo-4.png",
    width: "80px",
    height: "80px",
    className: "shapes logo-three",
  },
  {
    src: "/images/logo/Plogo-5.png",
    width: "148px",
    height: "148px",
    className: "shapes logo-four",
  },
  {
    src: "/images/logo/Plogo-6.png",
    width: "105px",
    height: "105px",
    className: "shapes logo-five",
  },
];

const ScreenHolder = () => {
  return (
    <div className="screen-holder-one d-flex align-items-center justify-content-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`round-bg d-flex align-items-center justify-content-center ${logo.className}`}
          style={{ width: logo.width, height: logo.height }}
        >
          <img src={logo.src} alt={`logo ${index}`} className="lazy-img" />
        </div>
      ))}
      <img
        src="/images/shape/shape_32.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
      />
    </div>
  );
};

export default ScreenHolder;
