import React from "react";

const logos = [
  { id: "a", src: "/images/logo/p-1.png", className: "lazy-img" },
  { id: "b", src: "/images/logo/p-2.png", className: "lazy-img" },
  { id: "c", src: "/images/logo/p-3.png", className: "lazy-img" },
  { id: "d", src: "/images/logo/p-4.png", className: "lazy-img" },
  { id: "e", src: "/images/logo/p-5.png", className: "lazy-img" },
  { id: "f", src: "/images/logo/p-6.png", className: "lazy-img" },
  { id: "g", src: "/images/logo/p-7.png", className: "lazy-img" },
  { id: "h", src: "/images/logo/p-8.png", className: "lazy-img" },
  { id: "i", src: "/images/logo/p-9.png", className: "lazy-img" },
];

const SocialPartner = () => {
  return (
    <>
      {logos.map((logo) => (
        <div
          key={logo.id}
          className={`col-xl-${logo.id === "h" ? "3" : "2"} col-lg-${
            logo.id === "h" ? "12" : "3"
          } col-md-4 col-6`}
          data-aos="fade-up"
          data-aos-delay={
            logo.id === "h" ? "400" : (logos.indexOf(logo) * 50).toString()
          }
        >
          <div className={`img-box bx-${logo.id}`}>
            <a href="#">
              <img src={logo.src} alt="logo" className={logo.className} />
            </a>
          </div>{" "}
          {/* /.img-box */}
        </div>
      ))}
    </>
  );
};

export default SocialPartner;
