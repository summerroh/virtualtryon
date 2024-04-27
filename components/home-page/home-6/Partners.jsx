const Partners = () => {
  const partnersData = [
    {
      imgSrc: "/images/logo/p-1.png",
      imgAlt: "logo",
      divClass: "img-box bx-a",
      link: "#",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "100",
    },
    {
      imgSrc: "/images/logo/p-2.png",
      imgAlt: "logo",
      divClass: "img-box bx-b",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "200",
    },
    {
      imgSrc: "/images/logo/p-3.png",
      imgAlt: "logo",
      divClass: "img-box bx-c",
      link: "#",
      colClasses: "col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "300",
    },
    {
      imgSrc: "/images/logo/p-4.png",
      imgAlt: "logo",
      divClass: "img-box bx-d",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "300",
    },
    {
      imgSrc: "/images/logo/p-5.png",
      imgAlt: "logo",
      divClass: "img-box bx-e",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "400",
    },
    {
      imgSrc: "/images/logo/p-6.png",
      imgAlt: "logo",
      divClass: "img-box bx-f",
      link: "#",
      colClasses: "col-xl-4 col-lg-2 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "500",
    },
    {
      imgSrc: "/images/logo/p-7.png",
      imgAlt: "logo",
      divClass: "img-box bx-g",
      link: "#",
      colClasses: "col-xl-2 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "600",
    },
    {
      imgSrc: "/images/logo/p-8.png",
      imgAlt: "logo",
      divClass: "img-box bx-h",
      link: "#",
      colClasses: "col-xl-3 col-lg-3 col-md-4 col-6",
      dataAos: "fade",
      dataAosDelay: "700",
    },
    {
      imgSrc: "/images/logo/p-9.png",
      imgAlt: "logo",
      divClass: "img-box bx-i",
      link: "#",
      colClasses: "col-xl-3 col-lg-12 col-md-4 col-6 m-auto",
      dataAos: "fade",
      dataAosDelay: "800",
    },
  ];

  return (
    <div className="row">
      {partnersData.map((partner, index) => (
        <div
          key={index}
          className={partner.colClasses}
          data-aos={partner.dataAos}
          data-aos-delay={partner.dataAosDelay}
        >
          <div className={`img-box ${partner.className}`}>
            <a href="#">
              <img src={partner.imgSrc} alt="logo" className="lazy-img" />
            </a>
          </div>
          {/* /.img-box */}
        </div>
      ))}
    </div>
  );
};

export default Partners;
