import React from "react";

export default function ImageRoller() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <section id="review" class="review-area">
        <div class="container">
          <div class="customer-review-wrapper">
            <div class="row gutter-24">
              <div class="col-lg-4">
                <div class="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div class="review-item">
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
              <div class="col-lg-4">
                <div class="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div class="review-item">
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
              <div class="col-lg-4">
                <div class="review-item-wrap">
                  {items.map((item) => {
                    return (
                      <div class="review-item">
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
