const LogoGroup = () => {
  const logoImages = [
    "Plogo-7.png",
    "Plogo-8.png",
    "Plogo-9.png",
    "Plogo-10.png",
    "Plogo-11.png",
    "Plogo-12.png",
    "Plogo-13.png",
  ];

  return (
    <>
      {logoImages.map((image, index) => (
        <div
          className="logo d-flex align-items-center justify-content-center"
          key={index}
        >
          <img src={`/images/logo/${image}`} alt="logo" className="lazy-img" />
        </div>
      ))}
    </>
  );
};

export default LogoGroup;
