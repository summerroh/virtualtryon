import React from "react";

export default function ImageRoller() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <section id="review" className="review-area">
        <div className="container">
          <div className="customer-review-wrapper">
            <div className="row">
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div className="review-item">
                        <img
                          src="/images/media/model1-thumb.png"
                          alt="img"
                          className="lazy-img d-inline"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div className="review-item">
                        <img
                          src="/images/media/model1-thumb.png"
                          alt="img"
                          className="lazy-img d-inline"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div className="review-item">
                        <img
                          src="/images/media/model1-thumb.png"
                          alt="img"
                          className="lazy-img d-inline"
                          style={{ width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-3 p-0">
                <div className="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div className="review-item">
                        <img
                          src="/images/media/model1-thumb.png"
                          alt="img"
                          className="lazy-img d-inline"
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
