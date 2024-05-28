import React from "react";

export default function ImageRoller() {
  const items = [
    "/images/image-roller/amy-half.png",
    "/images/image-roller/amy-upperbody.png",
    "/images/image-roller/lucy-half.png",
    "/images/image-roller/rachael-half.png",
    "/images/image-roller/rachael-upperbody.png",
    "/images/image-roller/amy-half.png",
  ];

  const items2 = [
    "/images/image-roller/jacob-half.png",
    "/images/image-roller/ken-half.png",
    "/images/image-roller/liam-half.png",
    "/images/image-roller/rachael-half.png",
    "/images/image-roller/rachael-upperbody.png",
    "/images/image-roller/amy-half.png",
  ];

  return (
    <>
      <section id="review" className="review-area">
        <div className="container">
          <div className="customer-review-wrapper">
            <div className="row">
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items.map((item, index) => {
                    return (
                      <div key={index} className="review-item">
                        <img
                          src={item}
                          alt="img"
                          className="lazy-img d-inline rounded-lg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items2.map((item, index) => {
                    return (
                      <div key={index} className="review-item">
                        <img
                          src={item}
                          alt="img"
                          className="lazy-img d-inline rounded-lg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items.map((item, index) => {
                    return (
                      <div key={index} className="review-item">
                        <img
                          src={item}
                          alt="img"
                          className="lazy-img d-inline rounded-lg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items2.map((item, index) => {
                    return (
                      <div key={index} className="review-item">
                        <img
                          src={item}
                          alt="img"
                          className="lazy-img d-inline rounded-lg"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
